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
          <input 
            name="name" 
            v-model="FormStore.FormCheck['name']" 
            type="text" 
            class="form-control" 
            placeholder="Full Name*" 
            :class="{'error': !FormStore.FormCheck['name'] && submitted}"
          />
          <input 
            name="email" 
            v-model="FormStore.FormCheck['email']" 
            type="email" 
            class="form-control" 
            placeholder="Email*" 
            :class="{'error': !FormStore.FormCheck['email'] && submitted}"
          />
          <input 
            name="phone" 
            v-model="FormStore.FormCheck['phone']" 
            type="text" 
            class="form-control" 
            placeholder="Phone*" 
            @input="maskPhoneNumber"
            :class="{'error': !FormStore.FormCheck['phone'] && submitted}"
          />
          <textarea 
            name="message" 
            v-model="FormStore.FormCheck['message']" 
            cols="40" 
            rows="10" 
            class="form-control" 
            placeholder="Message*" 
            :class="{'error': !FormStore.FormCheck['message'] && submitted}"
          ></textarea>
          <input 
            type="file" 
            name="upload" 
            @change="handleFileSelect" 
          />
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

let submitted = false; // Track if the form has been submitted

const submitForm = () => {
  submitted = true; // Form gönderildiğinde submitted değerini true yap

  let errorMessage = "";
  
  // Alanları kontrol et
  if (!FormStore.FormCheck.name) {
    errorMessage += "Name is required. ";
  }
  if (!FormStore.FormCheck.email) {
    errorMessage += "Email is required. ";
  }
  if (!FormStore.FormCheck.message) {
    errorMessage += "Message is required. ";
  }
  if (!FormStore.FormCheck.phone) {
    errorMessage += "Phone is required. ";
  }

  // Eğer herhangi bir eksik alan varsa hata mesajını göster
  if (errorMessage) {
    notification({
      type: "danger",
      head: "Error: Missing Fields",
      message: errorMessage,
      timer: 15000,
    });
    return false; // Formu göndermeyi engelle
  }

  // Form verilerini gönderme işlemi
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


// Handle phone number mask with the format: (XXX) XXX XX XX
const maskPhoneNumber = (event) => {
  let input = event.target;
  let value = input.value.replace(/\D/g, ""); // Remove non-numeric characters

  if (value.length > 10) {
    value = value.slice(0, 10); // Limit to 10 digits
  }

  // Apply mask: (XXX) XXX XX XX format
  let maskedValue = "";
  if (value.length > 0) maskedValue = `(${value.slice(0, 3)}`;
  if (value.length > 3) maskedValue += `) ${value.slice(3, 6)}`;
  if (value.length > 6) maskedValue += ` ${value.slice(6, 8)}`;
  if (value.length > 8) maskedValue += ` ${value.slice(8, 10)}`;

  input.value = maskedValue;
  FormStore.FormCheck["phone"] = maskedValue; // Update the model
};

// Handle file selection
const handleFileSelect = (type) => {
  const file = type.target.files[0];
  if (file) {
    const fileName = file.name;
    const fileExtension = fileName.split(".").pop().toLowerCase();
    document.querySelector(".fileName").innerHTML = fileName;
    // Supported file types
    const allowedExtensions = ["pdf", "doc", "docx"];

    if (allowedExtensions.includes(fileExtension)) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // File reading logic here
        FormStore.FormCheck["file"] = file;
      };
      reader.readAsDataURL(file);
    } else {
      // Unsupported file type message
      notification({
        type: "danger",
        head: "Invalid file format",
        message: "You can only upload PDF or Word files.",
      });
    }
  }
};
</script>
