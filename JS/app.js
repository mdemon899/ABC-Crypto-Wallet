let navMenu = document.getElementById("navMenu");

function openMenu() {
  navMenu.style.right = "0px";
}
function closeMenu() {
  navMenu.style.right = "-200px";
}

window.transitionToPage = function (href) {
  document.querySelector("body").style.opacity = 0;
  setTimeout(function () {
    window.location.href = href;
  }, 500);
};

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("body").style.opacity = 1;

  // Select the login and signup buttons
  const loginButton = document.querySelector("#loginBtn");
  const signUpButton = document.querySelector("#signUpBtn");

  // Add event listeners to the login and signup buttons
  loginButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.transitionToPage(this.href);
  });

  signUpButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.transitionToPage(this.href);
  });
});
