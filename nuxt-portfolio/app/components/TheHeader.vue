<script setup>
const isMenuOpen = ref(false);
const activeSection = useActiveSection();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
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
</template>
