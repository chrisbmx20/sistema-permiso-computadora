import { postPeticiones } from '../../services/solicitud/post-solicitud.js'
import { getCurrentUser } from './login.js'
import { postHistorial } from '../../services/historial/post-historial.js';
import { mostrarMensaje } from './modals.js';
const peticionesForm = document.getElementById("peticionesForm");

if(peticionesForm){
peticionesForm.addEventListener("submit", event =>{
        event.preventDefault();

        const solicitud = {}

        solicitud.sede = document.getElementById('sede').value;
        solicitud.serieEquipo = document.getElementById('serie').value;
        solicitud.marcaEquipo = document.getElementById('marca').value;
        solicitud.fechaSalida = document.getElementById('fechaSalida').value;
        solicitud.fechaRegreso = document.getElementById('fechaRegreso').value;
        solicitud.idUsuario = getCurrentUser().id;

        const checkTerminos = document.getElementById("terminos");

        validateFormFields(solicitud) && checkTerminos.checked  ? guardarPeticion(solicitud): alert("Debes completar todos los datos del formulario");       
})}

async function subirHistorial(idSolicitud) {
try{
const subida = await postHistorial(idSolicitud);
mostrarMensaje('',"Historial subido");

}catch (error) {
        console.error('error al subir el historial')
}
}

async function guardarPeticion(solicitud){
        try {
        const peticion = await postPeticiones(solicitud);

        console.log(peticion);
        

        clearForm(peticionesForm);
        

        mostrarMensaje('',"Peticion almacenada con exito");

        subirHistorial(peticion.id);
        setTimeout(() => {
                window.location.href = 'http://localhost:8080/index.html' ;
            }, 2000);
       

        } catch (error) {
        console.error('Error saving peticion:', error);
        }
}


function validateFormFields(obj) {
        return Object.values(obj).every(value => value !== "");
}

function clearForm(form){
        form.reset();
}    

