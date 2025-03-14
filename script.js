// Animated Name
const animatedName = document.querySelector('.animated-name');
let nameText = animatedName.textContent;
animatedName.textContent = '';

for (let char of nameText) {
    let span = document.createElement('span');
    span.textContent = char;
    animatedName.appendChild(span);
}

let delay = 0;
document.querySelectorAll('.animated-name span').forEach((span) => {
    span.style.opacity = 0;
    span.style.animation = `fadeIn 1s ease ${delay}s forwards`;
    delay += 0.1;
});

// Contact Form Submission
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    form.reset();
});

// Smooth Scroll
const links = document.querySelectorAll('a[href^="#"]');

for (let link of links) {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    });
}

// WhatsApp Button
const whatsappBtn = document.querySelector('.whatsapp-btn');
whatsappBtn.addEventListener('click', () => {
    window.open('https://wa.me/918978493009', '_blank');
});

// Projects Animation
const projects = document.querySelectorAll('.project');

window.addEventListener('scroll', () => {
    projects.forEach((project) => {
        const projectTop = project.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (projectTop < windowHeight - 50) {
            project.style.opacity = 1;
            project.style.transform = 'translateY(0)';
        }
    });
});

// Initial Project Styling
projects.forEach((project) => {
    project.style.opacity = 0;
    project.style.transform = 'translateY(50px)';
    project.style.transition = 'all 0.5s ease-in-out';
});

// Fade-in Animation
const style = document.createElement('style');
style.textContent = `
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}`;
document.head.appendChild(style);
