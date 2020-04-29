let userName = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let logInButton = document.getElementById("login-button");
let form = document.getElementById("login-form");
let formWrapper = document.getElementsByClassName("form-wrapper");

let checkUser = () => {
  let usersDB = JSON.parse(localStorage.getItem("users"));
  counter = 0;

  if (!usersDB) {
    return false;
  } else
    usersDB.forEach((user) => {
      if (userName.value == user.name && password.value == user.password) {
        counter++;
      }
    });
  return counter === 1 ? true : false;
};

let errorUser = () => {
  let div = document.createElement("div");
  div.innerHTML = " Incorrect username or password ";
  div.setAttribute("class", "error info-text text-center");
  form.appendChild(div);
};

let deleteErrors = () => {
  errors = [...document.getElementsByClassName("error")];
  for (i = 0; i < errors.length; i++) {
    errors[i].remove();
  }
};

let validationMessage = () => {
  console.log("user logged in!")
  let div = document.createElement("div");
  div.innerHTML = `<p class="info-text"> Welcome back ${userName.value}!<br> <a class="info-text" href="HowsGoing.html"> Let's find a song for your Mood-day!</a></p>`;
  form.appendChild(div, logInButton);
};

let mainLogIn = () => {
  event.preventDefault();
  if (!checkUser()) {
    errorUser();
  } else {
    validationMessage();
  }
};

logInButton.addEventListener("click", function (event) {
  event.preventDefault();
  deleteErrors();
  mainLogIn();
});