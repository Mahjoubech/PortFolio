<script setup>
import { onMounted } from 'vue';
import Typed from 'typed.js';

onMounted(() => {
  new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer Java', 'Web Developer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
  });
});
</script>

<template>
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
</template>
