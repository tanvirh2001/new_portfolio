
AOS.init({
  duration: 1000,
  once: true
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "orange";
    return;
  }

  formMessage.textContent = "Thank you, " + name + "! Your message has been sent.";
  formMessage.style.color = "lightgreen";

  document.getElementById("contactForm").reset();
});
