async function updateSolicitud(solicitud) {
    try {
     

        const response = await fetch("http://localhost:3000/peticiones/"+solicitud.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(solicitud)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export{updateSolicitud}