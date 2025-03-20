<template>
  <section class="carrers">
    <div class="container">
      <div class="carrers__content">
        <h2>Careers</h2>
        <p>
          You are always welcome at Chempa, but we cannot accommodate every applicant. We seek suitable candidates for various departments based on our hiring needs. If you're interested, please send us your CV, and we’ll evaluate
          the possibility of working together.
        </p>
        <div class="hr"></div>
      </div>
      <div class="carrers__content">
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
  callOnce(FormStore.PostFormCareer);
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
