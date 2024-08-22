//register form
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

if(registerForm){
    registerForm.addEventListener("submit",event => {
        event.preventDefault();
        const user = {}
    
        user.name = document.getElementById("firstName").value;
        user.lastName = document.getElementById("lastName").value;
        user.phoneNumber =document.getElementById("phoneNumber").value;
        user.password = document.getElementById("password").value;
        user.email = document.getElementById("email").value;
    
        validateFormFields(user)? saveUser(user) : console.log("You are missing some fields please check");

        clearForm(registerForm);
    }
    );
}

/*
function validateUser(userVal){

    getUsers().forEach(user => {
        user.email == userVal.email ? alert("Existing User on Database") : saveUser(user)
    });
}

*/

if(loginForm){
    loginForm.addEventListener("submit", event =>{
        event.preventDefault();
    
        const userLogin = {}
    
        userLogin.email = document.getElementById("email").value;
        userLogin.password = document.getElementById("password").value;
    
        if(validateFormFields(userLogin)){
            if(checkUser(userLogin)){
                alert("Welcome Back "+ userLogin.email)
                window.location.href = 'admin.html';
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

function saveUser(user){
    let users = getUsers() || [];

    users.push(user);

    localStorage.setItem('userList', JSON.stringify(users));
}

function getUsers(){
    return JSON.parse(localStorage.getItem('userList')) || [];
}

function clearForm(form){
    form.reset();
}

function checkUser(user){
    let found = false;
    const userResults = getUsers() || [];

    
    userResults.forEach(element => {
        user.email == element.email && user.password == element.password ? found = true : found = false;
    });

    return found;
}



