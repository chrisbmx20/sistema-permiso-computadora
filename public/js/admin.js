import {getSolicitudes } from '../../services/solicitud/get-solicitudes.js'

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
        const botonVerUsuario = document.createElement('button');
        botonVerUsuario.classList.add('btn', 'btn-primary');
        botonVerUsuario.textContent = 'Ver Usuario';
        botonVerUsuario.onclick = () => verUsuario(solicitud["id-user"]);
        tdAccion.appendChild(botonVerUsuario);
        fila.appendChild(tdAccion);

        tbody.appendChild(fila);
    });

    tabla.appendChild(tbody);
    tablaContenedor.appendChild(tabla);
}