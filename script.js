/* =========================
   NAVBAR: Mobile Menu Toggle
========================= */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

/* =========================
   DARK MODE TOGGLE
========================= */
const darkToggle = document.querySelector(".dark-toggle");
if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    // Change button text depending on mode
    if (document.body.classList.contains("dark-mode")) {
      darkToggle.textContent = "☀️ Light Mode";
    } else {
      darkToggle.textContent = "🌙 Dark Mode";
    }
  });
}

/* =========================
   HOME PAGE: Dynamic Greeting
========================= */
const greeting = document.getElementById("greeting");
if (greeting) {
  const hour = new Date().getHours();
  let message = "Hello!";
  if (hour < 12) message = "🌅 Good Morning!";
  else if (hour < 18) message = "☀️ Good Afternoon!";
  else message = "🌙 Good Evening!";
  greeting.textContent = message;
}

/* =========================
   CONTACT FORM: Character Counter
========================= */
const messageBox = document.getElementById("message");
const charCount = document.getElementById("charCount");

if (messageBox && charCount) {
  messageBox.addEventListener("input", () => {
    const currentLength = messageBox.value.length;
    const maxLength = messageBox.getAttribute("maxlength");
    charCount.textContent = `${currentLength} / ${maxLength} characters`;

    // Change color if limit is reached
    charCount.style.color = currentLength >= maxLength ? "red" : "#555";
  });
}

/* =========================
   CONTACT FORM: Email Validation
========================= */
const emailInput = document.querySelector("input[type='email']");
if (emailInput) {
  emailInput.addEventListener("input", () => {
    if (!emailInput.value.includes("@")) {
      emailInput.style.borderColor = "red";
      emailInput.setCustomValidity("Please enter a valid email.");
    } else {
      emailInput.style.borderColor = "green";
      emailInput.setCustomValidity("");
    }
  });
}

/* =========================
   CONTACT FORM: Thank You Popup
========================= */
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent actual submission
    alert("✅ Thank you! Your message has been sent.");
    contactForm.reset(); // clear form
    if (charCount) charCount.textContent = "0 / 300 characters"; // reset counter
  });
}

/* =========================
   CONTACT FORM: Input Highlight
========================= */
const inputs = document.querySelectorAll(".contact-form input, .contact-form textarea");
inputs.forEach(input => {
  input.addEventListener("focus", () => {
    input.style.borderColor = "#ff6600";
    input.style.boxShadow = "0 0 8px rgba(255, 102, 0, 0.3)";
  });
  input.addEventListener("blur", () => {
    input.style.borderColor = "#e9d7cd";
    input.style.boxShadow = "none";
  });
});

/* =========================
   CONTACT FORM: Dynamic Placeholder (Greeting)
========================= */
const nameInput = document.querySelector(".contact-form input[type='text']");
if (nameInput) {
  const hour = new Date().getHours();
  let greeting = "Your Name";
  if (hour < 12) greeting = "Good Morning! Enter your name";
  else if (hour < 18) greeting = "Good Afternoon! Enter your name";
  else greeting = "Good Evening! Enter your name";

  nameInput.setAttribute("placeholder", greeting);
}

/* =========================
   SKILLS PAGE: Highlight on Hover
========================= */
const skillCards = document.querySelectorAll(".skill-card");
if (skillCards) {
  skillCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)";
      card.style.boxShadow = "0 10px 20px rgba(255, 102, 0, 0.3)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "0 6px 15px rgba(0,0,0,0.1)";
    });
  });
}

/* =========================
   SKILLS PAGE: Search Bar Filter
========================= */
const searchBar = document.getElementById("skillSearch");
if (searchBar) {
  searchBar.addEventListener("input", () => {
    const searchTerm = searchBar.value.toLowerCase();
    skillCards.forEach(card => {
      const skillText = card.textContent.toLowerCase();
      card.style.display = skillText.includes(searchTerm) ? "block" : "none";
    });
  });
}

/* =========================
   PROJECTS PAGE: Filter Projects
========================= */
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

if (filterButtons) {
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove 'active' from all buttons
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      projects.forEach(project => {
        if (filter === "all" || project.getAttribute("data-category") === filter) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    });
  });
}

/* =========================
   SCROLL TO TOP BUTTON
========================= */
const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {
  // Show button when scrolling down
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  // Smooth scroll to top
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* =========================
   FOOTER YEAR AUTO UPDATE
========================= */
const yearSpan = document.getElementById("year");
if (yearSpan) {
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
}

/* =========================
   FADE-IN ON SCROLL
========================= */
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2 // 20% visible triggers animation
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target); // only animate once
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

/* =========================
   SEE MORE / SEE LESS TOGGLE
========================= */
document.querySelectorAll(".toggle-btn").forEach(button => {
  button.addEventListener("click", () => {
    const moreText = button.previousElementSibling; // <p class="more-text">
    if (moreText.classList.contains("hidden")) {
      moreText.classList.remove("hidden");
      button.textContent = "See Less";
    } else {
      moreText.classList.add("hidden");
      button.textContent = "See More";
    }
  });
});


// ==========================
// See More / See Less Toggle
// ==========================
const seeMoreBtn = document.getElementById("seeMoreBtn");
const extraContent = document.getElementById("extraContent");

if (seeMoreBtn && extraContent) {
  seeMoreBtn.addEventListener("click", () => {
    extraContent.classList.toggle("hidden");
    seeMoreBtn.textContent = extraContent.classList.contains("hidden")
      ? "See More"
      : "See Less";
  });
}

