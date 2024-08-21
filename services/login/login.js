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

function checkUser(user){
   
    
    async function findUser() {

        let found;
        const userResults = await getUsers();
        userResults.forEach(element => {
            user.correo == element.correo && user.password == element.password ? found = element : found = false;
        });

        if(found){
            localStorage.setItem('usuario', JSON.stringify(found));
            return found;
        } 
        else{
            localStorage.setItem('usuario', JSON.stringify({
                id:23,
                nombre: "test user"
            }));
        }

    }
    
    findUser();
       
}

function getCurrentUser(){
    const user = JSON.parse(localStorage.getItem('usuario'));

    console.log(user.nombre);
    
    return user
}