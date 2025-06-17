document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("formMsg").textContent = "Thanks! We'll be in touch soon.";
  document.getElementById("contactForm").reset();
});
