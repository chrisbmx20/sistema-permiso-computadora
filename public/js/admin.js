import {getSolicitudes } from '../../services/solicitud/get-solicitudes.js'

import { deletePeticion } from "../../services/solicitud/delete-solicitud.js"

import { getUserById } from "../../services/usuario/get-usuario.js"

import { updateSolicitud } from  "../../services/solicitud/put-solicitud.js"

const usuariosBtn = document.getElementById("usuarios");
const peticionesBtn = document.getElementById("peticiones");

usuariosBtn.addEventListener("click",()=>{
    let usuario = document.getElementById("usuario");
    let peticion = document.getElementById("peticion");

    usuario.style.display = "block"
    peticion.style.display = "none";
})

peticionesBtn.addEventListener("click",()=>{
    let usuario = document.getElementById("usuario");
    let peticion = document.getElementById("peticion");

    usuario.style.display = "none"
    peticion.style.display = "block";
})

function showElement(index){
    let event = document.getElementById("events");
    let task = document.getElementById("tasks");

    event.style.display = index === 0 ? "block" : "none";
    task.style.display = index === 1 ? "block" : "none";
}


mostrarPeticiones();

async function mostrarPeticiones() {
    const solicitudes = await getSolicitudes();

    const tablaContenedor = document.getElementById('tabla-contenedor');

   
    const tabla = document.createElement('table');
    tabla.classList.add('table', 'table-striped', 'table-bordered');


    const thead = document.createElement('thead');
    thead.classList.add('table-dark');
    const encabezadoFila = document.createElement('tr');

    const encabezados = ['Número de Serie', 'Marca', 'Fecha de Slida', 'Fecha de Regreso', 'Estado', 'Acción'];
    encabezados.forEach(encabezadoTexto => {
        const th = document.createElement('th');
        th.scope = 'col';
        th.textContent = encabezadoTexto;
        encabezadoFila.appendChild(th);
    });

    thead.appendChild(encabezadoFila);
    tabla.appendChild(thead);

    const tbody = document.createElement('tbody');

    solicitudes.forEach(solicitud => {
        const fila = document.createElement('tr');

        const tdSerie = document.createElement('td');
        tdSerie.textContent = solicitud.serie;
        fila.appendChild(tdSerie);

        const tdMarca = document.createElement('td');
        tdMarca.textContent = solicitud.marca;
        fila.appendChild(tdMarca);

        const tdFechaSalida = document.createElement('td');
        tdFechaSalida.textContent = solicitud.fechaSalida;
        fila.appendChild(tdFechaSalida);

        const tdFechaRegreso = document.createElement('td');
        tdFechaRegreso.textContent = solicitud.fechaRegreso;
        fila.appendChild(tdFechaRegreso);

        const tdEstado = document.createElement('td');
        const selectEstado = document.createElement('select');

        selectEstado.classList.add('form-select');
        const estados = [
            { value: '0', text: 'Pendiente' },
            { value: '1', text: 'Aceptada' },
            { value: '2', text: 'Rechazada'}
        ];



        selectEstado.addEventListener("change",async function updatePeticion(){
           

            try {
                solicitud.estado = String(selectEstado.value) ;
                const update = await updateSolicitud(solicitud);
                
                alert('Peticion Actualizada:');
        
    
                } catch (error) {
                console.error('Error Actualizando peticion:', error);
                }
        })

        estados.forEach(estado => {
            const option = document.createElement('option');
            option.value = estado.value;
            option.textContent = estado.text;
            if (solicitud.estado === estado.value) {
                option.selected = true;
            }
            selectEstado.appendChild(option);
        });

        tdEstado.appendChild(selectEstado);
        fila.appendChild(tdEstado);

        const tdAccion = document.createElement('td');

        const btnContainer = createButtons();
        let userBtn = btnContainer.firstChild;
        let deleteBtn = btnContainer.childNodes[1];

        /*Find User*/ 
        userBtn.addEventListener("click",async function userHandler(){ 

            
        const user = await mostrarUsuario(solicitud["id-user"]);

        const modalContent = document.getElementById("modalContent");
        modalContent.innerHTML = "";
        
        const modalHeader = document.getElementById("infoModalLabel")
        modalHeader.innerHTML = user.nombre + " " + user.apellido

        
        const correo = document.createElement("p");
        correo.innerHTML = "Correo: "+user.correo;

        const telefono = document.createElement("p");
        telefono.innerHTML = "Telefono: "+user.telefono;

        modalContent.appendChild(correo);
        modalContent.appendChild(telefono);


        const myModal = new bootstrap.Modal(document.getElementById('infoModal'));
        myModal.show();



        })

        /*Delete Request*/ 
        deleteBtn.addEventListener("click",function delHandler(){
            eliminarPeticion(solicitud.id);
        })

        async function eliminarPeticion(id){
              try {
                const eliminarSolicitud = await deletePeticion(id);4
                tablaContenedor.innerHTML = "";
                mostrarPeticiones();
                } catch (error) {
                console.error('Error al eliminar peticion:', error);
                }
        }

        async function mostrarUsuario(id){
            return await getUserById(id);
        }

        tdAccion.appendChild(btnContainer);
        fila.appendChild(tdAccion);

        tbody.appendChild(fila);
    });

    tabla.appendChild(tbody);
    tablaContenedor.appendChild(tabla);
}

function createButtons(){

    let btnContainer = document.createElement("div");
        btnContainer.classList.add("btn-container");

    let userIcon = document.createElement("i");
        userIcon.classList.add("fa-regular");
        userIcon.classList.add("fa-user");

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid");
    deleteIcon.classList.add("fa-trash-can");

    let deleteBtn = document.createElement("button");
    deleteBtn.appendChild(deleteIcon);
    deleteBtn.className ="delete-button";

    let userBtn = document.createElement("button");
        userBtn.className = "user-button";
        userBtn.appendChild(userIcon);

    btnContainer.appendChild(userBtn);
    btnContainer.appendChild(deleteBtn);

    return btnContainer;
}


