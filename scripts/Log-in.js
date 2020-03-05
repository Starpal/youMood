//1)selection of inputs y guardar en variable
let email = document.getElementById("email");
let password = document.getElementById("password");
//2)selection of other elements y guardar en variable
let logInButton = document.getElementById("log-in-button");
let form = document.getElementsByClassName("signup-form")[0];
let formWrapper = document.getElementsByClassName("form-wrapper")[0];

//3) add event onclick button
logInButton.addEventListener("click", function(event){
    event.preventDefault();
    deleteErrors();
//4)tiene que validar los inputs y comprobarlos con los de la base de datos.
if(checkValidUser()){
    console.log("Valid User")
} else{
    console.log("Not a valid user!")
}
});

    function checkValidUser() {
    let LogInValidator = new LogInValidator (email.value, password.value);

    let usersDB = JSON.parse(localStorage.getItem("users"));
    
    if(LogInValidator.checkEmailAndPasswordInDB(userDB)){
       // console.log("You're in!")
        return true
    }else{
        LogInValidator.errorCreator("Please enter a valid e-mail & password", email)
        return false
    }
}