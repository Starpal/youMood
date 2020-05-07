let userName = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let logInButton = document.getElementById("login-button");
let form = document.getElementById("login-form");
let formWrapper = document.getElementsByClassName("form-wrapper");
let section = document.getElementById("section")


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
  div.innerHTML = " Incorrect username or password";
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
  //let div = document.createElement("div");
  section.innerHTML="";
  console.log("sectio",section)

  section.innerHTML = `<div style="width: 73%;height:0;padding-bottom:100%;padding-right:30em;position:relative;display:inline-block;text-align:center;"><iframe src="https://giphy.com/embed/1zRf0yYAM5f93RzPPc" width="50%" height="50%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/applemusic-music-video-fashion-1zRf0yYAM5f93RzPPc">via GIPHY</a></p>`
  // section.innerHTML = `<p class="info-text"> Welcome back, ${userName.value}!<br> <a class="info-text" href="HowsGoing.html">Let's find a song for your Mood-day!<a href="https://www.animatedimages.org/cat-click-here-signs-and-buttons-1096.htm"><img src="https://www.animatedimages.org/data/media/1096/animated-click-here-sign-and-button-image-0043.gif" border="0" alt="animated-click-here-sign-and-button-image-0043" /></a></a></p>`;
  // form.appendChild(div, logInButton);

  setTimeout(function () {
    window.location.href = "HowsGoing.html"; //redirect to main page 'HowsGoing'
 }, 2000); 
 }

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