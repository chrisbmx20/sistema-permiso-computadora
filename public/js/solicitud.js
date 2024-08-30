



if (peticionesForm) {
        peticionesForm.addEventListener("submit", event => {
          event.preventDefault();
          localStorage.clear();
          const solicitud = {
            serieEquipo: document.getElementById('serie').value,
            marcaEquipo: document.getElementById('marca').value,
            fechaSalida: document.getElementById('fechaSalida').value,
            fechaRegreso: document.getElementById('fechaRegreso').value,
            idUsuario: "604440444"
          };
      
          // Validación de campos antes de guardar la petición
          if (validateFormFields(solicitud)) {
            guardarPeticion(solicitud);
            localStorage.clear();
          } else {
            alert("No se puede subir. Todos los campos son obligatorios.");
          }
        });
      }
      
      async function guardarPeticion(solicitud) {
        try {
          const peticion = await postPeticiones(solicitud);
      
          console.log(peticion);
      
          clearForm(peticionesForm);
      
          alert('Petición guardada exitosamente.');
      
          await subirHistorial(peticion.id);
      
          window.location.href = 'http://localhost:8080/index.html';
      
        } catch (error) {
          console.error('Error al guardar la petición:', error);
        }
      }
      
      function validateFormFields(obj) {
        return Object.values(obj).every(value => value !== "");
      }
      
      function clearForm(form) {
        form.reset();
      }
      