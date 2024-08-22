import { postUsers } from "../../services/usuario/post-usuario.js";
import { getUsers } from "../../services/usuario/get-usuario.js";

const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', async function(event) { 
    event.preventDefault();
    const usuario = {};
     
    usuario.id = document.getElementById('NumeroCedula').value;
    usuario.nombre = document.getElementById('Nombre').value;
    usuario.apellido = document.getElementById('Apellidos').value;
    usuario.correo = document.getElementById('CorreoElectronico').value;
    usuario.password = document.getElementById('Contraseña').value;
    
    const UsuarioExiste = await BuscarUsuario(usuario);
    if (UsuarioExiste) {
        alert('Usuario ya existente');
    } else {
        await postUsers(usuario); // Añadimos await para asegurarnos de que se complete antes de mostrar el alert
        alert('Registrado');
    }
});

async function BuscarUsuario(usuario) {
    const ResultadosUsuario = await getUsers(); // Asume que getUsers devuelve una lista de usuarios
    
    // Busca si ya existe un usuario con el mismo id o correo
    const usuarioExistente = ResultadosUsuario.find(u => u.id === usuario.id || u.correo === usuario.correo);
    
    // Retorna true si el usuario ya existe, false si no existe
    return usuarioExistente !== undefined;
}

