<script setup>
const activeSection = useActiveSection();

onMounted(() => {
  const sections = document.querySelectorAll('section');
  const observerOptions = { threshold: 0.3 };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
        
        // Animations triggering
        entry.target.classList.add('active-section'); 
        
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
</script>

<template>
  <div>
    <SectionHome id="home" />
    <SectionSkills id="skills" />
    <SectionPortfolio id="portfolio" />
    <SectionContact id="contact" />
  </div>
</template>
