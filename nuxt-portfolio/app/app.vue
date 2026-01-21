<script setup>
import { onMounted, ref } from 'vue';
import Typed from 'typed.js';
import emailjs from '@emailjs/browser';

const isMenuOpen = ref(false);
const activeSection = ref('home');

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

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
  // Typed JS
  new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Web Designer', 'Web Developer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
  });

  // EmailJS Init
  emailjs.init("sBDn25xwU_mDHizOJ");

  // Scroll Observer for Active Link
  const sections = document.querySelectorAll('section');
  const observerOptions = { threshold: 0.3 };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
        
        // Animations triggering
        entry.target.classList.add('active-section'); // Add your reveal logic here if needed via CSS classes or keep simplified
        
        // Skill bars animation
        if (entry.target.id === 'skills') {
          const progressLines = document.querySelectorAll('.progress-line span');
           progressLines.forEach(line => {
             // force reflow or just let CSS animate if class is added
             line.style.transform = 'scaleX(1)';
           });
        }
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
});

// Data
const skillsData = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', percent: 80 },
      { name: 'CSS', percent: 70 },
      { name: 'JavaScript', percent: 70 },
      { name: 'Tailwind CSS', percent: 75 }
    ]
  },
  {
    title: 'Frameworks & Backend',
    items: [
      { name: 'React JS', percent: 40 },
      { name: 'Vue JS', percent: 50 },
      { name: 'PHP', percent: 82 },
      { name: 'Laravel', percent: 78 }
    ]
  },
  {
    title: 'Database & Others',
    items: [
      { name: 'SQL', percent: 80 },
      { name: 'PostgreSQL', percent: 80 },
      { name: 'Git & GitHub', percent: 82 },
      { name: 'REST API', percent: 62 }
    ]
  }
];

const portfolioItems = [
   { image: '/assets/swlni.png', category: 'Local Mind Platform', title: 'Swlni - Localized Questions Application', link: 'https://github.com/Mahjoubech/LocalMind.git' },
   { image: '/assets/voiture.png', category: 'Localized Cars Platform', title: 'LocaAuto - Platform Cars For Clients', link: 'https://github.com/BouizmouneSalma/Location_de_voiture.git' },
   { image: '/assets/blog.png', category: 'Blog Platform', title: 'Content Management System Application', link: 'https://github.com/Mahjoubech/Blog-Management-App.git' },
   { image: '/assets/cours.png', category: 'Cours Platform', title: 'Online cours platform to enhance skills', link: 'https://github.com/Mahjoubech/Cours-Platform.git' },
   { image: '/assets/fut.png', category: 'FUT-Champions', title: 'FUT-Champions-Web-App-Ultimate-Team ⚽', link: 'https://github.com/Mahjoubech/FUT-Champions-Web-App-Ultimate-Team.git' },
   { image: '/assets/shoes.png', category: 'Ecomerce Platform', title: 'Sneakers E-Commerce Website Application', link: 'https://github.com/MostafaRhazlani/brief_5-Plateforme-E-commerce.git' }
];
</script>

<template>
  <div class="font-sans text-slate-lightest bg-navy selection:bg-teal selection:text-navy">
    
    <!-- Header -->
    <header class="fixed top-0 left-0 w-full px-[3%] md:px-[9%] py-4 md:py-6 flex justify-between items-center z-50 bg-navy/85 backdrop-blur-md transition-all duration-300">
      <div class="logo">
         <svg viewBox="0 0 200 100" class="w-[70px] h-[70px]">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#64ffda">
                  <animate attributeName="stop-color" values="#64ffda;#0d9359;#64ffda" dur="5s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stop-color="#0d9359">
                  <animate attributeName="stop-color" values="#0d9359;#64ffda;#0d9359" dur="5s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>
            <circle cx="100" cy="50" r="40" stroke="url(#gradient)" stroke-width="3" fill="none" opacity="0.6">
              <animate attributeName="r" values="40;45;40" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="100" cy="50" r="35" stroke="url(#gradient)" stroke-width="2" fill="none" />
            <path d="M125,65 L113,30 L100,55 L87,30 L75,65" stroke="url(#gradient)" stroke-width="5" fill="none">
              <animate attributeName="stroke-width" values="5;6;5" dur="2s" repeatCount="indefinite" />
            </path>
          </svg>
      </div>

      <div class="md:hidden text-[2.8rem] text-teal cursor-pointer" @click="toggleMenu">
        <i :class="isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
      </div>

      <nav :class="[
          'md:flex items-center gap-8 absolute md:static top-full w-full md:w-auto h-screen md:h-auto bg-navy/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-8 md:p-0 transition-all duration-300 ease-in-out',
          isMenuOpen ? 'right-0' : 'right-[-100%]'
        ]">
        <a v-for="link in ['Home', 'Skills', 'Portfolio']" :key="link" 
           :href="`#${link.toLowerCase()}`" 
           @click="closeMenu"
           :class="['block md:inline-block text-[1.8rem] text-slate-lightest hover:text-teal font-medium my-4 md:my-0 relative group transition duration-300', activeSection === link.toLowerCase() ? 'text-teal' : '']">
           {{ link }}
           <span :class="['absolute bottom-[-5px] left-0 h-[3px] bg-teal transition-all duration-300', activeSection === link.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full']"></span>
        </a>
         <div class="mt-4 md:mt-0 md:ml-8">
            <a href="#contact" class="inline-block px-8 py-3 bg-transparent text-teal border-2 border-teal rounded-full text-[1.6rem] font-semibold hover:bg-teal hover:text-navy hover:shadow-[0_0_20px_#64ffda] hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                 Contact Me
            </a>
         </div>
      </nav>
    </header>

    <!-- Home Section -->
    <section id="home" class="min-h-screen flex flex-col md:flex-row justify-center items-center px-[9%] py-[10rem] md:pt-[12rem] gap-8">
      <div class="flex-1 md:max-w-[50%] animate-float">
         <h3 class="text-[3.2rem] font-bold mb-2">Hi, There !</h3>
         <h1 class="text-[5.8rem] font-bold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal to-[#0d9359]">Cherkaoui Mahjoub</h1>
         <h3 class="text-[3.2rem] font-bold mb-6">I'm a <span class="multiple-text text-teal"></span></h3>
         <p class="text-[1.6rem] mb-8 leading-relaxed">
           I am a passionate Full Stack Developer specializing in web development
           with Laravel, PHP, and modern front-end technologies. I love building
           clean, efficient, and user-friendly applications.
         </p>
         
         <div class="flex gap-4 mb-10">
            <a href="https://www.linkedin.com/in/mahjoub-cherkaoui-6b0198332/" target="_blank" class="w-16 h-16 flex items-center justify-center border-2 border-teal rounded-full text-[1.8rem] text-teal hover:bg-teal hover:text-navy hover:-translate-y-2 hover:shadow-[0_0_20px_#64ffda] transition-all duration-300"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/Mahjoubech" target="_blank" class="w-16 h-16 flex items-center justify-center border-2 border-teal rounded-full text-[1.8rem] text-teal hover:bg-teal hover:text-navy hover:-translate-y-2 hover:shadow-[0_0_20px_#64ffda] transition-all duration-300"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.facebook.com/share/1BTdCjuDKg/" target="_blank" class="w-16 h-16 flex items-center justify-center border-2 border-teal rounded-full text-[1.8rem] text-teal hover:bg-teal hover:text-navy hover:-translate-y-2 hover:shadow-[0_0_20px_#64ffda] transition-all duration-300"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/gal1y_sss?igsh=MXNmc2xzb2JsZzNyYg==" target="_blank" class="w-16 h-16 flex items-center justify-center border-2 border-teal rounded-full text-[1.8rem] text-teal hover:bg-teal hover:text-navy hover:-translate-y-2 hover:shadow-[0_0_20px_#64ffda] transition-all duration-300"><i class="fa-brands fa-instagram"></i></a>
         </div>

         <a href="/assets/cv.pdf" class="inline-block px-10 py-4 bg-teal rounded-full text-navy text-[1.6rem] font-semibold tracking-wider hover:shadow-[0_0_1.6rem_#64ffda] transition-all duration-300">Download CV</a>
      </div>
      
      <div class="flex-1 flex justify-center mt-12 md:mt-0 relative group">
         <img src="/assets/image.png" alt="Profile" class="w-[70vw] md:w-[25vw] border-[3px] border-teal animate-morph shadow-[0_0_15px_rgba(100,255,218,0.3)] animate-glow" />
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="min-h-screen bg-navy-light px-[9%] py-[10rem]">
       <h2 class="text-[4.5rem] text-center mb-12">My <span class="text-teal">Skills</span></h2>
       
       <div class="flex flex-wrap justify-around gap-6 mb-16">
          <div v-for="(stat, index) in [{num: '14+', label: 'Technologies'}, {num: '1K+', label: 'Hours of Work'}, {num: '15+', label: 'Projects Completed'}]" :key="index"
               class="bg-navy p-10 rounded-2xl text-center flex-1 min-w-[200px] border border-teal/10 shadow-[0_0_10px_rgba(100,255,218,0.2)] hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(100,255,218,0.3)] transition-all duration-300">
             <h3 class="text-[4rem] text-teal mb-2">{{ stat.num }}</h3>
             <p class="text-[1.8rem] text-slate-lightest">{{ stat.label }}</p>
          </div>
       </div>

       <div class="flex flex-wrap gap-8 justify-between">
          <div v-for="(category, catIndex) in skillsData" :key="catIndex" 
               class="flex-1 min-w-[300px] p-8 bg-navy rounded-2xl shadow-[0_0_10px_rgba(100,255,218,0.2)]">
             <h3 class="text-[2.4rem] text-teal text-center mb-8">{{ category.title }}</h3>
             <div v-for="(skill, skillIndex) in category.items" :key="skillIndex" class="mb-6">
                <div class="flex justify-between mb-2 text-[1.7rem]">
                   <p>{{ skill.name }}</p>
                   <p class="text-teal">{{ skill.percent }}%</p>
                </div>
                <div class="w-full h-[10px] bg-white/10 rounded-full overflow-hidden relative progress-line">
                   <span class="absolute top-0 left-0 h-full bg-teal rounded-full origin-left transition-transform duration-[1500ms] scale-x-0" :style="{ width: skill.percent + '%' }"></span>
                </div>
             </div>
          </div>
       </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="min-h-screen bg-navy px-[9%] py-[10rem]">
       <h2 class="text-[4.5rem] text-center mb-16">My <span class="text-teal">Portfolio</span></h2>
       
       <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(project, index) in portfolioItems" :key="index" 
               class="group relative overflow-hidden bg-navy-light rounded-[28px] border border-transparent hover:border-teal p-5 shadow-[0_0_5px_#64ffda] hover:shadow-[0_5px_20px_rgba(100,255,218,0.2)] hover:-translate-y-2 transition-all duration-400">
             <img :src="project.image" :alt="project.title" class="w-full h-[200px] object-cover rounded-[28px] mb-6">
             <div class="flex justify-between items-center mb-2">
                <div class="text-[20px] font-semibold">{{ project.category }}</div>
                <a :href="project.link" target="_blank" class="w-10 h-10 flex items-center justify-center bg-transparent border border-teal rounded-full text-[1.8rem] text-slate-lightest hover:bg-teal hover:text-navy hover:scale-110 transition-all duration-300">
                   <i class="fa-brands fa-github"></i>
                </a>
             </div>
             <h4 class="text-[22px] font-bold leading-snug">{{ project.title }}</h4>
          </div>
       </div>
    </section>

    <!-- Contact Section -->
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

    <!-- Footer -->
    <footer class="bg-navy py-10 text-center relative">
       <div class="flex justify-center gap-6 mb-6">
          <a href="https://www.linkedin.com/in/mahjoub-cherkaoui-6b0198332/" target="_blank" class="w-16 h-16 flex items-center justify-center border-[0.2rem] border-teal rounded-full text-[2rem] text-teal hover:bg-teal hover:text-navy hover:-translate-y-2 hover:shadow-[0_0_20px_#64ffda] transition-all duration-300"><i class="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/Mahjoubech" target="_blank" class="w-16 h-16 flex items-center justify-center border-[0.2rem] border-teal rounded-full text-[2rem] text-teal hover:bg-teal hover:text-navy hover:-translate-y-2 hover:shadow-[0_0_20px_#64ffda] transition-all duration-300"><i class="fa-brands fa-github"></i></a>
          <a href="https://www.facebook.com/share/1BTdCjuDKg/" target="_blank" class="w-16 h-16 flex items-center justify-center border-[0.2rem] border-teal rounded-full text-[2rem] text-teal hover:bg-teal hover:text-navy hover:-translate-y-2 hover:shadow-[0_0_20px_#64ffda] transition-all duration-300"><i class="fa-brands fa-facebook"></i></a>
          <a href="https://www.instagram.com/gal1y_sss?igsh=MXNmc2xzb2JsZzNyYg==" target="_blank" class="w-16 h-16 flex items-center justify-center border-[0.2rem] border-teal rounded-full text-[2rem] text-teal hover:bg-teal hover:text-navy hover:-translate-y-2 hover:shadow-[0_0_20px_#64ffda] transition-all duration-300"><i class="fa-brands fa-instagram"></i></a>
       </div>
       <p class="text-[1.6rem] text-slate-lightest">&copy; Cherkaoui Mahjoub | All Rights Reserved</p>
    </footer>
  </div>
</template>


