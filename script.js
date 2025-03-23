// Typing animation
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Web Designer', 'Web Developer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
  });
  
  // Mobile menu toggle
  let menu = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');
  
  menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  }
  
  // Close menu on scroll and reveal elements
  window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
    
    // Reveal elements on scroll
    revealElements();
    
    // Active navbar highlight
    highlightNavbar();
  }
  
  // Add reveal class to sections when the page loads
  document.addEventListener('DOMContentLoaded', function() {
    // Add reveal class to all sections
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('reveal');
    });
    
    // Start reveal animation for visible elements
    setTimeout(() => {
      revealElements();
    }, 300);
    
    // Initialize skill bars animation
    animateSkillBars();
    
    // Highlight active navbar item
    highlightNavbar();
  });
  
  // Reveal elements on scroll
  function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  }
  
  // Animate skill bars when in view
  function animateSkillBars() {
    const skillsSection = document.querySelector('.skills');
    
    if (!skillsSection) return;
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBars = document.querySelectorAll('.progress-line span');
          progressBars.forEach((bar, index) => {
            setTimeout(() => {
              // The width is already set in CSS classes, this just triggers the transition
              bar.style.opacity = 1;
            }, index * 100);
          });
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(skillsSection);
  }
  
  // Highlight active navbar item based on scroll position
  function highlightNavbar() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop - 200) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  }