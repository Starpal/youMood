"use strict";

class Validator {
    constructor(userName, email, password){
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    checkUserName () {
        return this.userName ? true : false
    }

    checkEmail () {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(this.email) ? true : false
    }

    checkPassword () {
        if (!this.password){
            return false
        } else if (this.password.length < 6){
            return false
        } else {
            return true
        }
    }
    
    errorCreator (message, location) {
        let div = document.createElement("div")
        div.setAttribute("class", "error")
        div.innerHTML = message
        form.insertBefore(div, location)
    }

    deleteErrors (){
        let errors = [...document.getElementsByClassName("error")]
        errors ? errors.forEach(error => error.remove()) : null;
    }
}

class SignUpValidator extends Validator {
    constructor (userName, email, password, repeatPassword){
        super(userName, email, password);
        this.repeatPassword = repeatPassword
    }

    checkEmailInDB (usersDB){
        let userExists = false;

        if (!usersDB){
            return true;
        }
        else{
            usersDB.forEach(user => {
                if (user.email === this.email){
                    userExists=false
                } else{
                    userExists=true
                }
            })
        }
        return userExists;
    }

    checkRepeatPassword () {
        if(this.password === this.repeatPassword) {
            return true;
        } else {
            return false;
        } 
    }
}

class LogInValidator extends Validator {
    constructor (){
        super();
    }

    checkEmailInDB (string){
        if (!userDB){
            return false
        }
        else{
            userDB.forEach(user => {
                if (user.email === string){
                    return true}
            })
        }
        return false
    }

}
