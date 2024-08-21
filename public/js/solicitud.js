import { postPeticiones } from '../../services/solicitud/post-solicitud.js'
import { getCurrentUser } from './login.js'

const peticionesForm = document.getElementById("peticionesForm");



if(peticionesForm){
    loginForm.addEventListener("submit", event =>{
        event.preventDefault();

        const solicitud = {}
        solicitud.serieEquipo = document.getElementById('serie');
        solicitud.marcaEquipo = document.getElementById('marca');
        solicitud.fechaSalida = document.getElementById('fechaSalida');
        solicitud.fechaRegreso = document.getElementById('fechaRegreso');
        solicitud.idUsuario = getCurrentUser().id;

        guardarPeticion();
})}


async function guardarPeticion(solicitud){
        const peticion = await postPeticiones(solicitud);
}
