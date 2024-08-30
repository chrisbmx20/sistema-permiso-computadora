const loginForm = document.getElementById("loginForm");

import { getUsers } from "../../services/usuario/get-usuario.js";


if(loginForm){
    loginForm.addEventListener("submit", async event =>{
        event.preventDefault();

        console.log("aqui estamos");

        const userLogin = {}
    
        userLogin.correo = document.getElementById("email").value;
        userLogin.password = document.getElementById("password").value;


    
        if(validateFormFields(userLogin)){


            if(await checkUser(userLogin)){

            alert("Usuario autorizado");

                
              let currentUser = getCurrentUser();

              alert("Welcome back: " + currentUser.nombre +" "+ currentUser.apellido);

             window.location.href = 'http://localhost:8080/solicitud.html';

                
            }
            else{
                alert("Email or Password not correct");
            }
        }

        else{
            alert("No funca")
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
    let bandera;

    const userResults = await getUsers();
    const found = userResults.find(user => 
        user.correo === userLogin.correo && 
        user.password === userLogin.password
    );
    

    if(found !== undefined){
        bandera = true
        localStorage.clear();
        localStorage.setItem('usuario', JSON.stringify(found));
    }

    else{
        bandera = false;
    }

    console.log(bandera);
    
    return bandera;
}

function getCurrentUser(){
    const user = JSON.parse(localStorage.getItem('usuario'));

    return user
}

export {getCurrentUser}
 