//register form
const loginForm = document.getElementById("loginForm");

import { getUsers } from "../usuario/get-usuario.js";


if(loginForm){
    loginForm.addEventListener("submit", event =>{
        event.preventDefault();
        console.log("aqui estamos")

        const userLogin = {}
    
        userLogin.correo = document.getElementById("email").value;
        userLogin.password = document.getElementById("password").value;
    
        if(validateFormFields(userLogin)){

            // checkUser(userLogin) ? alert("Welcome Back "+ userLogin.correo) : alert("Email or Password not correct");
             
            if(!checkUser(userLogin)){

                window.location.href = './solicitud.html';

                
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
   
    
    async function findUser() {

        let found;
        const userResults = await getUsers();
        userResults.forEach(element => {
            user.correo == element.correo && user.password == element.password ? found = element : found = false;
        });

        if(found){
            localStorage.setItem('usuario', found);
            return found;
        } 

    }
    
    findUser();
       
}