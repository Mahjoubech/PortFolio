<script setup>
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
</template>
