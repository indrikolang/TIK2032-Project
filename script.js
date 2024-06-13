document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav__content ul li a');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
    
        navLinks.forEach(navLink => navLink.classList.remove('active'));
    
        this.classList.add('active');
    
        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId); 
        targetElement.scrollIntoView({ behavior: 'smooth' }); 
      });
    });
  });
  
    

    // Ambil semua link dalam navigasi
const navLinks = document.querySelectorAll('.nav__content a');

navLinks.forEach(link => {
link.addEventListener('click', function(event) {

    event.preventDefault();


    navLinks.forEach(navLink => navLink.classList.remove('active'));

   
    this.classList.add('active');

    
    const targetId = this.getAttribute('href').substring(1); 
    const targetElement = document.getElementById(targetId); 
    targetElement.scrollIntoView({ behavior: 'smooth' }); 
});
});
