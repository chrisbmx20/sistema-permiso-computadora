const loginForm = document.getElementById("loginForm");

import { getUsers } from "../../services/usuario/get-usuario.js";


if(loginForm){
    loginForm.addEventListener("submit", event =>{
        event.preventDefault();
        console.log("aqui estamos")

        const userLogin = {}
    
        userLogin.correo = document.getElementById("email").value;
        userLogin.password = document.getElementById("password").value;
    
        if(validateFormFields(userLogin)){

            // checkUser(userLogin) ? alert("Welcome Back "+ userLogin.correo) : alert("Email or Password not correct");
             
            if(checkUser(userLogin)){
                let currentUser = getCurrentUser();

                alert("Welcome back: " + currentUser.nombre +" "+ currentUser.apellido);

                window.location.href = 'http://localhost:8080/solicitud.html';

                
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

async function checkUser(userLogin){
    
    const userResults = await getUsers();
    const found = userResults.find(user => 
        user.correo === userLogin.correo && 
        user.password === userLogin.password
    );

    if(found !== undefined){
        localStorage.clear();
        localStorage.setItem('usuario', JSON.stringify(found));
    }
    return found !== undefined;

       
}

function getCurrentUser(){
    const user = JSON.parse(localStorage.getItem('usuario'));
    
    return user
}

export {getCurrentUser}
 