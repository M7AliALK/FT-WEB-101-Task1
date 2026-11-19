// the light / dark button
var btn = document.getElementById("themeBtn");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// the contact form
var form = document.getElementById("contactForm");
var message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  if (email.trim() === "") {
    message.textContent = "Please write your email.";
  } else {
    message.textContent = "Hello " + name + ", thanks for visiting!";
  }
});