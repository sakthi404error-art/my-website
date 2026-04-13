// Toggle Mobile Menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
});

// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}
// CONTACT FORM VALIDATION
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const userMessage = document.getElementById("message").value.trim();

    // Basic validation
    if (name === "" || email === "" || userMessage === "") {
        message.style.color = "red";
        message.textContent = "Please fill all fields!";
        return;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        message.style.color = "red";
        message.textContent = "Enter a valid email!";
        return;
    }

    // Success
    message.style.color = "lightgreen";
    message.textContent = "Message sent successfully!";

    // Reset form
    form.reset();
});
// ACTIVE NAV LINK ON SCROLL
const sections = document.querySelectorAll("section");
const navLinksAll = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinksAll.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
// NAVBAR CHANGE ON SCROLL
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
});
// ADVANCED SCROLL REVEAL
const reveals = document.querySelectorAll(".fade-in");

function revealOnScroll() {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - 80) {
            el.classList.add("show");
        } else {
            el.classList.remove("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
// PARALLAX EFFECT FOR HOME SECTION
const home = document.querySelector(".home");

window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    home.style.backgroundPositionY = offset * 0.5 + "px";
});
// SMOOTH SCROLL WITH OFFSET FIX
function scrollToSection(id) {
    const element = document.getElementById(id);
    const offset = 70;

    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}
// ===== TYPING EFFECT =====
const textArray = [
    "Sakthi R P",
    "HR Professional",
    "Web Developer",
    "Business Enthusiast"
];

let index = 0;
let charIndex = 0;
const speed = 100;

function typeEffect() {
    if (charIndex < textArray[index].length) {
        document.getElementById("typing").textContent += textArray[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, speed);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        document.getElementById("typing").textContent =
            textArray[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, speed / 2);
    } else {
        index = (index + 1) % textArray.length;
        setTimeout(typeEffect, 300);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);