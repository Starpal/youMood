
//selection of inputs
let userName = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let repeatPassword = document.getElementById("repeat-password");
//selection of other elements
let form = document.getElementsByClassName("signup-form")[0]; /*zero para seleccionar solo primer elemento de la clase*/
let formWrapper = document.getElementsByClassName("form-wrapper")[0];
let signUpButton = document.getElementsByClassName("button")[0];

let usersDB = JSON.parse(localStorage.getItem('users'))

signUpButton.addEventListener("click", function(event){
    event.preventDefault(); // evita que al presionar el boton se me recargue la pagina.SEMPRE PRIMA COSA DA FARE CON EVENTI IN BOTTONI
    deleteErrors();
    
    // si inputs son validos o no lo guarda en base de  dato o  muestra un error

    if (checkValidUser()){//comprueva que inputs sean validos
        console.log("user registered")
        createUser(name.value, email.value, password.value)
    };
})

function checkValidUser() {
    //CREA UNA INSTANCIA DE SignupVALIDATOR
    let signUpValidator = new SignUpValidator (userName.value, email.value, password.value, repeatPassword.value);

    let usersDB = JSON.parse(localStorage.getItem("users"));
    let validUser = true;

    //VALIDACIONES
    if(!signUpValidator.checkUserName()){//si pasa validation DI CHECKUSERNAME(che sta in validation.js) devuelve validUser=true sennò validUser=false
        signUpValidator.errorCreator("Please type a valid username", userName)
        validUser=false
    }
    if(!signUpValidator.checkEmail()){
        signUpValidator.errorCreator("Please enter a valid e-mail address", email)
        validUser=false
    }
    if(!signUpValidator.checkPassword()){
        signUpValidator.errorCreator("Please insert a valid password. Must be of minimum 6 characters length", password)
        validUser=false
    }
    if(!signUpValidator.checkRepeatPassword()){
        signUpValidator.errorCreator("Passwords don't match", repeatPassword)
        validUser=false
    }
    if (!signUpValidator.checkEmailInDB(usersDB)){
        signUpValidator.errorCreator("Your e-mail address already exists!", email)
        validUser=false
    }

    return validUser
}

function deleteErrors (){
    let errors = [...document.getElementsByClassName("error")]
    errors ? errors.forEach(error => error.remove()) : null;
}


function createUser (name, email, password) {
    const newUser = new User (name, email, password)

    if (usersDB){
        usersDB.push(newUser);
    } else {
        usersDB = [newUser]
    }
    localStorage.setItem('users', JSON.stringify(usersDB));
}

let validationMessage = () => {
    let div = document.createElement("div")
    let currentUser = JSON.parse(localStorage.getItem('users'));
    div.innerHTML = `<h1 class="login"> Hello, welcome to youMood!</h1>`;
    form.insertBefore(div, logInButton);
    signUpButton.remove()
}