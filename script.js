// Typing Effect
const textArray = ["Sakthi R P", "HR Professional", "Tech Enthusiast"];
let index = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function type() {
    if (charIndex < textArray[index].length) {
        typingElement.textContent += textArray[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        index = (index + 1) % textArray.length;
        setTimeout(type, 500);
    }
}

// Scroll Effects (Navbar & Reveal)
const header = document.querySelector("header");
const revealElements = document.querySelectorAll(".fade-in");

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => scrollObserver.observe(el));

window.addEventListener("scroll", () => {
    // Header shadow on scroll
    header.classList.toggle("scrolled", window.scrollY > 50);
    
    // Active link highlighting
    let current = "";
    document.querySelectorAll("section").forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
    // For a real pro feel, you'd animate this with a class
});

// Form Submission (Visual Only)
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = e.target.querySelector("button");
    const msg = document.getElementById("formMessage");
    
    btn.innerText = "Sending...";
    setTimeout(() => {
        btn.innerText = "Message Sent!";
        msg.style.color = "#00ff00";
        msg.textContent = "Thank you! I will get back to you soon.";
        e.target.reset();
    }, 1500);
});

// Init
document.addEventListener("DOMContentLoaded", type);