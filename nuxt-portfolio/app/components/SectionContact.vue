<script setup>
import { ref, onMounted } from 'vue';
import emailjs from '@emailjs/browser';

const contactForm = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
});

const sendEmail = () => {
  if (!contactForm.value.name || !contactForm.value.email || !contactForm.value.message) {
    alert("❌ Please fill in all required fields.");
    return;
  }

  const templateParams = {
    from_name: contactForm.value.name,
    from_email: contactForm.value.email,
    phone: contactForm.value.phone,
    subject: contactForm.value.subject,
    message: contactForm.value.message
  };

  emailjs.send("service_hm5mqlp", "template_j8oa6qo", templateParams)
    .then((response) => {
      alert("✅ Message sent successfully!");
      contactForm.value = { name: '', email: '', phone: '', subject: '', message: '' };
    }, (error) => {
      alert("❌ Error sending message.");
      console.error("FAILED...", error);
    });
};

onMounted(() => {
    emailjs.init("sBDn25xwU_mDHizOJ");
});
</script>

<template>
    <section id="contact" class="min-h-screen bg-navy-light px-[9%] py-[10rem]">
       <h2 class="text-[4.5rem] text-center mb-12">Contact <span class="text-teal">Me</span></h2>
       
       <form @submit.prevent="sendEmail" class="max-w-[90rem] mx-auto text-center">
          <div class="flex flex-wrap justify-between gap-4 mb-4">
             <input v-model="contactForm.name" type="text" placeholder="Full Name" required class="flex-1 w-full md:w-[48%] p-6 text-[1.6rem] bg-navy text-slate-lightest rounded-lg border border-teal focus:outline-none focus:shadow-[0_0_10px_#64ffda]">
             <input v-model="contactForm.email" type="email" placeholder="Email Address" required class="flex-1 w-full md:w-[48%] p-6 text-[1.6rem] bg-navy text-slate-lightest rounded-lg border border-teal focus:outline-none focus:shadow-[0_0_10px_#64ffda]">
          </div>
          <div class="flex flex-wrap justify-between gap-4 mb-4">
             <input v-model="contactForm.phone" type="number" placeholder="Phone Number" required class="flex-1 w-full md:w-[48%] p-6 text-[1.6rem] bg-navy text-slate-lightest rounded-lg border border-teal focus:outline-none focus:shadow-[0_0_10px_#64ffda]">
             <input v-model="contactForm.subject" type="text" placeholder="Email Subject" required class="flex-1 w-full md:w-[48%] p-6 text-[1.6rem] bg-navy text-slate-lightest rounded-lg border border-teal focus:outline-none focus:shadow-[0_0_10px_#64ffda]">
          </div>
          <textarea v-model="contactForm.message" cols="30" rows="10" placeholder="Your Message" required class="w-full p-6 text-[1.6rem] bg-navy text-slate-lightest rounded-lg border border-teal resize-none focus:outline-none focus:shadow-[0_0_10px_#64ffda] mb-8"></textarea>
          <button type="submit" class="inline-block px-12 py-4 bg-teal text-navy text-[1.6rem] font-semibold rounded-full hover:shadow-[0_0_1.6rem_#64ffda] transition-all duration-300">Send Message</button>
       </form>
    </section>
</template>
