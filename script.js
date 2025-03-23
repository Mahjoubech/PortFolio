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
  let cnt = document.querySelector('.top-btn');
  let navbar = document.querySelector('.navbar');
  cnt.onclick = () => {
  cnt.classList.toggle('bx-x');
    navbar.classList.toggle('active');}
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
          const skillPercentages = document.querySelectorAll('.percent');
          progressBars.forEach((bar, index) => {
            const percentage = skillPercentages[index];
            let width = parseInt(percentage.textContent);
            setTimeout(() => {
              // The width is already set in CSS classes, this just triggers the transition
              bar.style.opacity = 1;
              bar.style.width = `${width}%`;
            }, index * 100);
            let current = 0;
          const interval = setInterval(() => {
            if (current >= width) {
              clearInterval(interval);
            } else {
              current++;
              percentage.textContent = `${current}%`;
            }
          }, 10);
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
  document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("sBDn25xwU_mDHizOJ");

    document.getElementById("contact-form").addEventListener("submit", function(e) {
        e.preventDefault();
        let fullName = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let subject = document.getElementById("subject").value;
        let message = document.getElementById("message").value;
        if (!fullName || !email || !phone || !subject || !message) {
            alert("❌ Please fill in all fields.");
            return;
        }

        let templateParams = {
            from_name: fullName,
            from_email: email,
            phone: phone,
            subject: subject,
            message: message
        };

        // Send the email via EmailJS using the template
        emailjs.send("service_hm5mqlp", "template_j8oa6qo", templateParams)
            .then(function(response) {
                alert("✅ Message sent successfully!");
                console.log("SUCCESS!", response);
                document.getElementById("contact-form").reset(); // Reset form after sending
            }, function(error) {
                alert("❌ Error sending message. Check the console for details.");
                console.error("FAILED...", error);
            });
    });
});



