window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(255,255,255,0.98)';
    navbar.style.boxShadow = '0 1px 6px rgba(0,0,0,0.15)';
  } else {
    navbar.style.background = 'rgba(255,255,255,0.9)';
    navbar.style.boxShadow = '0 1px 6px rgba(0,0,0,0.1)';
  }
});