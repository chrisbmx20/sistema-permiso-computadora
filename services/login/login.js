//register form
const loginForm = document.getElementById("loginForm");

import { getUsers } from "../usuario/get-usuario.js";

/*
async function init() {
    const users = await getUsers();
    console.log("USERSSSS", users);
}

init();
*/

if(loginForm){
    loginForm.addEventListener("submit", event =>{
        event.preventDefault();
        console.log("aqui estamos")

        const userLogin = {}
    
        userLogin.correo = document.getElementById("email").value;
        userLogin.password = document.getElementById("password").value;
    
        if(validateFormFields(userLogin)){
            if(checkUser(userLogin)){
                alert("Welcome Back "+ userLogin.correo)


                window.location.href = './public/solicitud.html';
            }
            else{
                alert("Email or Password not correct");
            }
        }
    
    });
}


function validateFormFields(obj) {
    return Object.values(obj).every(value => value !== "");
}

function clearForm(form){
    form.reset();
}

function checkUser(user){
    let found = false;
    let userResults;

    async function init() {
        userResults = await getUsers();
        console.log("USERSSSS", userResults);
    }
    
    init();

    console.log(userResults);

    debugger
    
    userResults.forEach(element => {
        user.correo == element.correo && user.correo == element.correo ? found = true : found = false;
    });

    return found;
}

