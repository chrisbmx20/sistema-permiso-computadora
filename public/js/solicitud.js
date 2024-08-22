import { postPeticiones } from '../../services/solicitud/post-solicitud.js'
import { getCurrentUser } from './login.js'

const peticionesForm = document.getElementById("peticionesForm");



if(peticionesForm){
    peticionesForm.addEventListener("submit", event =>{
        event.preventDefault();

        const solicitud = {}

        solicitud.serieEquipo = document.getElementById('serie').value;
        solicitud.marcaEquipo = document.getElementById('marca').value;
        solicitud.fechaSalida = document.getElementById('fechaSalida').value;
        solicitud.fechaRegreso = document.getElementById('fechaRegreso').value;
        solicitud.idUsuario = getCurrentUser().id;

        guardarPeticion(solicitud);
})}


async function guardarPeticion(solicitud){
        try {
        const peticion = await postPeticiones(solicitud);
        console.log('Peticion saved successfully:', peticion);
        } catch (error) {
        console.error('Error saving peticion:', error);
        }
}

