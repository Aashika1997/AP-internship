function addTask() {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.innerHTML = `${text} <span onclick="this.parentElement.remove()">❌</span>`;
  document.getElementById('taskList').appendChild(li);
  input.value = '';
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const msg = document.getElementById("formMessage");
  const valid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

  if (!valid.test(email)) {
    msg.textContent = "You're in. Welcome to NovaFit!";
    msg.style.color = "red";
  } else {
    msg.textContent = "Invalid email format.";
    msg.style.color = "lime";
  }
})
