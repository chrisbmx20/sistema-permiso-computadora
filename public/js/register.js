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
    usuario.telefono=document.getElementById('NumeroTelefon').value
    

    if (usuario.id==='' && usuario.nombre==='' && usuario.apellido==='' && usuario.correo==='' && usuario.password==='') {
        return mostrarMensaje('llena los espacios')
        
    }
    const UsuarioExiste = await BuscarUsuario(usuario);
    if (UsuarioExiste) {
        mostrarMensaje('Ya estas Registrado')
    } else {
        await postUsers(usuario); // Añadimos await para asegurarnos de que se complete antes de mostrar el alert
        mostrarMensaje('Registro Existoso')
        window.location.href= "http://localhost:8080/login.html"
    }
});

async function BuscarUsuario(usuario) {
    const ResultadosUsuario = await getUsers(); // Asume que getUsers devuelve una lista de usuarios
    
    // Busca si ya existe un usuario con el mismo id o correo
    const usuarioExistente = ResultadosUsuario.find(u => u.id === usuario.id || u.correo === usuario.correo);

    return usuarioExistente;
}

function mostrarMensaje(titulo, mensaje) {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = '#f8f9fa';
    modal.style.padding = '25px';
    modal.style.borderRadius = '8px';
    modal.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    modal.style.zIndex = '1000';
    modal.style.maxWidth = '400px';
    modal.style.width = '100%';
    modal.style.textAlign = 'center';
    modal.style.fontFamily = 'Arial, sans-serif';

    const tituloElemento = document.createElement('h2');
    tituloElemento.innerText = titulo;
    tituloElemento.style.color = '#343a40';
    tituloElemento.style.marginBottom = '15px';
    modal.appendChild(tituloElemento);

    const mensajeElemento = document.createElement('p');
    mensajeElemento.innerText = mensaje;
    mensajeElemento.style.color = '#6c757d';
    mensajeElemento.style.marginBottom = '20px';
    modal.appendChild(mensajeElemento);

    const botonCerrar = document.createElement('button');
    botonCerrar.innerText = 'Cerrar';
    botonCerrar.style.backgroundColor = '#007bff';
    botonCerrar.style.color = '#fff';
    botonCerrar.style.border = 'none';
    botonCerrar.style.padding = '10px 20px';
    botonCerrar.style.borderRadius = '5px';
    botonCerrar.style.cursor = 'pointer';
    botonCerrar.style.fontSize = '16px';
    botonCerrar.style.transition = 'background-color 0.3s ease';
    botonCerrar.onmouseover = function () {
        botonCerrar.style.backgroundColor = '#0056b3';
    };
    botonCerrar.onmouseout = function () {
        botonCerrar.style.backgroundColor = '#007bff';
    };
    botonCerrar.onclick = function () {
        document.body.removeChild(modal);
    };
    modal.appendChild(botonCerrar);

    document.body.appendChild(modal);
}




