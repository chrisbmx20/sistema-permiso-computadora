import { postUsers } from "../../services/usuario/post-usuario.js";
import { getUsers } from "../../services/usuario/get-usuario.js";
import { validateFormFields} from "../js/login.js"
import { mostrarMensaje } from "./modals.js";
const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', async function(event) { 
    event.preventDefault();
    const usuario = {};
    
    usuario.id = document.getElementById('NumeroCedula').value;
    usuario.nombre = document.getElementById('Nombre').value;
    usuario.apellido = document.getElementById('Apellidos').value;
    usuario.correo = document.getElementById('CorreoElectronico').value;
    usuario.password = document.getElementById('Contraseña').value;
    usuario.telefono=document.getElementById('NumeroTelefon').value;
    

    /*
   if( validateFormFields(usuario)){
    const UsuarioExiste = await BuscarUsuario(usuario);
    
    if (UsuarioExiste) {
        mostrarMensaje('Ya estas Registrado', 'Verifique sus datos')
    } else {
        await postUsers(usuario);

        mostrarMensaje('Registro Existoso', 'Inicie sesión')

        window.location.href= "http://localhost:8080/login.html"
    }
   }

   else{
    mostrarMensaje('Llena los espacios', 'Sus campos están vacios')
        
   }
    */
    

    if (usuario.id==='' || usuario.nombre==='' || usuario.apellido==='' || usuario.correo==='' || usuario.password==='' || usuario.telefono===' ') {
        return mostrarMensaje('Llena los espacios', 'Sus campos están vacios')
        
    }

        //!validateFormFields(usuario) ? mostrarMensaje('rellene los espacios'): console.log('todo bien');
        

        
    const UsuarioExiste = await BuscarUsuario(usuario);
    if (UsuarioExiste) {
        mostrarMensaje('Ya estas Registrado', 'Verifique sus datos')
    } else {
        await postUsers(usuario);

        mostrarMensaje('Registro Existoso', 'Inicie sesión')

        window.location.href= "http://localhost:8080/login.html"
    }
});

async function BuscarUsuario(usuario) {
    const ResultadosUsuario = await getUsers(); 
    
    const usuarioExistente = ResultadosUsuario.find(u => u.id === usuario.id || u.correo === usuario.correo);

    return usuarioExistente;
}




