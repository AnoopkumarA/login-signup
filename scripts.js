document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup-form");
  const message = document.getElementById("message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = form.username.value;
    const password = form.password.value;

    if (username && password) {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      storedUsers.push({ username, password });
      localStorage.setItem("users", JSON.stringify(storedUsers));
      
      message.textContent = "Signup successful!";
      message.style.color = "#00a000";
      
      window.location.href = "login.html";
    } else {
      message.textContent = "Please fill out all fields.";
      message.style.color = "#ff0000";
    }

  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");
  const message = document.getElementById("message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = form.username.value;
    const password = form.password.value;

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = storedUsers.find(user => user.username === username && user.password === password);

    if (user) {
      message.textContent = "Login successful!";
      message.style.color = "#00a000";
      window.location.href = "https://bento.me/anoop-kumar";
    } else {
      message.textContent = "Invalid username or password.";
      message.style.color = "#ff0000";
    }
  });
});

