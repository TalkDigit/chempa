<template>
    <section class="carrers">
        <div class="container">
            <div class="carrers__content">
                <h2>Careers</h2>
                <p>You are always welcome at Chempa, but we cannot accommodate every applicant. We seek suitable candidates for various departments based on our hiring needs. If you're interested, please send us your CV, and we’ll evaluate the possibility of working together.</p>
                <div class="hr"></div>
            </div>
            <div class="carrers__content">
               

                <div class="form">
        <input name="name" v-model="FormStore.FormCheck['name']" type="text" class="form-control" placeholder="Full Name*" />
        <input name="email" v-model="FormStore.FormCheck['email']" type="email" class="form-control" placeholder="Email*" />
        <input name="phone" v-model="FormStore.FormCheck['phone']" type="text" class="form-control" placeholder="Phone*" />
        <textarea name="message" v-model="FormStore.FormCheck['message']" cols="40" rows="10" class="form-control" placeholder="Message*"></textarea>
        <input type="file" name="upload" @change="handleFileSelect" />

        <button  @click="submitForm">Send</button>
    </div>



            </div>

        
        </div>
    </section>
</template>


<script setup>
import notification from 'duct-notification'
import getData from "@/utilities/getData";
import getAssets from "@/utilities/getAssets";
const FormStore = useForm()

const submitForm = () => {
    if(
        (!FormStore.FormCheck.name || FormStore.FormCheck.name == '') ||
        !FormStore.FormCheck.email || FormStore.FormCheck.email == '' ||
        !FormStore.FormCheck.message || FormStore.FormCheck.message == ''
    ){
        notification({
            type : 'danger',
            head: "Eksik Alan",
            message: "Eksik Alan",
            timer : 15000
            })
        return false
    }

    const form = new FormData();

    const dataObj = FormStore.FormCheck;
    for (const key in dataObj) {
    if (Object.hasOwnProperty.call(dataObj, key)) {
        const value = dataObj[key];
        const valueToAdd = value !== "" ? value : "";

        form.append("data[" + key + "]", valueToAdd);
    }
    }
    FormStore.FormCheck = form;
    callOnce(FormStore.PostFormCareer)
    FormStore.FormCheck = {}
    document.querySelector('.fileName').innerHTML = t('fileSelect')
    kvkk.value = false
}


const handleFileSelect = (type) => {
  const file = type.target.files[0];
  if (file) {
    const fileName = file.name;
    const fileExtension = fileName.split(".").pop().toLowerCase();
    document.querySelector('.fileName').innerHTML = fileName
    // Desteklenen dosya türlerini burada tanımlayabilirsiniz
    const allowedExtensions = ["pdf", "doc", "docx"];

    if (allowedExtensions.includes(fileExtension)) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Dosya okunduğunda yapılacak işlemler burada
        // data.value.proje_dosya = file;
        FormStore.FormCheck['file'] = file
      };
      reader.readAsDataURL(file);
    } else {
      // Desteklenmeyen dosya türleri için hata mesajı göster
      notification({
        type: "danger",
        head: "Hatalı dosya formatı",
        message: "Yalnızca PDF ve Word dosyaları yükleyebilirsiniz."
      });
    }
  }
};
</script>
