document.getElementById('year').textContent = new Date().getFullYear();

const links = document.querySelectorAll('nav a');
const sections = [...links].map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);

const setActive = () => {
  let currentId = 'home';
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 140 && rect.bottom >= 140) currentId = section.id;
  });
  links.forEach(link => {
    link.style.opacity = link.getAttribute('href') === `#${currentId}` ? '1' : '0.72';
  });
};

window.addEventListener('scroll', setActive, { passive: true });
setActive();
