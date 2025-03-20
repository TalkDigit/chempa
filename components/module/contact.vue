<template>
    <section class="contact">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-7">
                    <div class="contact__content">
                        <h2>Get In Touch / Contact Us</h2>
                        <div class="hr"></div>
                        <p>Thank you for reaching out to us. Please provide all your details along with any questions, inquiries, or complaints. The Chempa Team is honored to assist you.</p>
                    </div>

                    <div class="form">
                        <input name="name" v-model="FormStore.FormCheck['name']" type="text" class="form-control" placeholder="Full Name*" />
                        <input name="email" v-model="FormStore.FormCheck['email']" type="email" class="form-control" placeholder="Email*" />
                        <input name="phone" v-model="FormStore.FormCheck['phone']" type="text" class="form-control" placeholder="Phone*" />
                        <textarea name="message" v-model="FormStore.FormCheck['message']" cols="40" rows="10" class="form-control" placeholder="Message*"></textarea>
                        <input type="file" name="upload" @change="handleFileSelect" />

                        <button @click="submitForm">Send</button>
                    </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-5">
                    <div class="contact__content">
                        <h2>Location</h2>
                        <div class="hr"></div>
                        <p>Istanbul World Trade Center, EGS Business Park, B-3 Block 13th Floor No:407-415, 34149 Bakirkoy-Istanbul / TURKEY</p>

                        <a href="mailto:info@chempa.com.tr"><i class="fa-regular fa-envelope"></i>info@chempa.com.tr</a><br />
                        <a href="tel:+90 212 670 43 00"><i class="fa-brands fa-whatsapp"></i>+90 212 670 43 00</a><br />
                        <a href="tel:+90 212 670 43 53 "><i class="fa-solid fa-print"></i>+90 212 670 43 53 </a>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24091.744293905856!2d28.790375745184907!3d40.99312796654112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa3feca109815%3A0xbbab8f6abfc174ba!2sEGS%20Business%20Park!5e0!3m2!1str!2str!4v1741305599319!5m2!1str!2str"
                            width="100%"
                            height="360px"
                            style="border: 0;"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import notification from "duct-notification";
    import getData from "@/utilities/getData";
    import getAssets from "@/utilities/getAssets";
    const FormStore = useForm();

    const submitForm = () => {
        if (!FormStore.FormCheck.name || FormStore.FormCheck.name == "" || !FormStore.FormCheck.email || FormStore.FormCheck.email == "" || !FormStore.FormCheck.message || FormStore.FormCheck.message == "") {
            notification({
                type: "danger",
                head: "Eksik Alan",
                message: "Eksik Alan",
                timer: 15000,
            });
            return false;
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
        callOnce(FormStore.PostFormContact);
        FormStore.FormCheck = {};
        document.querySelector(".fileName").innerHTML = t("fileSelect");
        kvkk.value = false;
    };

    const handleFileSelect = (type) => {
        const file = type.target.files[0];
        if (file) {
            const fileName = file.name;
            const fileExtension = fileName.split(".").pop().toLowerCase();
            document.querySelector(".fileName").innerHTML = fileName;
            // Desteklenen dosya türlerini burada tanımlayabilirsiniz
            const allowedExtensions = ["pdf", "doc", "docx"];

            if (allowedExtensions.includes(fileExtension)) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    // Dosya okunduğunda yapılacak işlemler burada
                    // data.value.proje_dosya = file;
                    FormStore.FormCheck["file"] = file;
                };
                reader.readAsDataURL(file);
            } else {
                // Desteklenmeyen dosya türleri için hata mesajı göster
                notification({
                    type: "danger",
                    head: "Hatalı dosya formatı",
                    message: "Yalnızca PDF ve Word dosyaları yükleyebilirsiniz.",
                });
            }
        }
    };
</script>
