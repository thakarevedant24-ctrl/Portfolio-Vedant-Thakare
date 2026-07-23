// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('nav-active');

    // Animate Links
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Hamburger Animation
    hamburger.classList.toggle('toggle');
});

// Close mobile menu when a link is clicked
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
        links.forEach(li => li.style.animation = '');
        hamburger.classList.remove('toggle');
    });
});

// --- SCROLL ANIMATION LOGIC ---
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15, // 15% of the element must be visible to trigger
    rootMargin: "0px 0px -50px 0px" // Triggers slightly before entry
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return; // If not in view, do nothing
        } else {
            entry.target.classList.add('appear'); // Add class to trigger CSS animation
            appearOnScroll.unobserve(entry.target); // Stop observing once animated
        }
    });
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Simple Form Submission Handler
const form = document.getElementById('contact-form');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        alert(`Thanks for reaching out, ${name}! Your message has been sent. (This is a demo alert)`);
        form.reset();
    });
}