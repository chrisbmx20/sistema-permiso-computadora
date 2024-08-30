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



export {mostrarMensaje}/*function createAndOpenModal(title, content) {
    // Crear el contenedor del modal
    const modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.id = 'infoModal';
    modal.tabIndex = -1;
    modal.setAttribute('aria-labelledby', 'infoModalLabel');
    modal.setAttribute('aria-hidden', 'true');

    // Crear el diálogo del modal
    const modalDialog = document.createElement('div');
    modalDialog.classList.add('modal-dialog', 'modal-dialog-scrollable');
    modal.appendChild(modalDialog);

    // Crear el contenido del modal
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalDialog.appendChild(modalContent);

    // Crear la cabecera del modal
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    modalContent.appendChild(modalHeader);

    // Crear el título del modal
    const modalTitle = document.createElement('h5');
    modalTitle.classList.add('modal-title');
    modalTitle.id = 'infoModalLabel';
    modalTitle.innerText = title;
    modalHeader.appendChild(modalTitle);

    // Crear el botón de cerrar
    const closeButton = document.createElement('button');
    closeButton.classList.add('btn-close');
    closeButton.setAttribute('data-bs-dismiss', 'modal');
    closeButton.setAttribute('aria-label', 'Close');
    modalHeader.appendChild(closeButton);

    // Crear el cuerpo del modal
    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');
    modalBody.id = 'modalContent';
    modalBody.innerHTML = content;
    modalContent.appendChild(modalBody);

    // Crear el pie del modal
    const modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');
    modalContent.appendChild(modalFooter);

    // Crear el botón de cerrar en el pie del modal
    const closeFooterButton = document.createElement('button');
    closeFooterButton.classList.add('btn', 'btn-secondary');
    closeFooterButton.setAttribute('data-bs-dismiss', 'modal');
    closeFooterButton.innerText = 'Cerrar';
    modalFooter.appendChild(closeFooterButton);

    // Añadir el modal al cuerpo del documento
    document.body.appendChild(modal);

    // Mostrar el modal usando Bootstrap
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();

    // Remover el modal del DOM después de cerrarse
    modal.addEventListener('hidden.bs.modal', () => {
        modal.remove();
    });
}

// Ejemplo de uso
document.getElementById('openModalButton').addEventListener('click', function() {
    createAndOpenModal('Título del Modal', '<p>Este es el contenido del modal creado dinámicamente.</p>');
});*/