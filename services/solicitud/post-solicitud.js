



async function postPeticiones(solicitud) {
    try {
     
        const solicitudData = { 
                "serie": solicitud.serie,
                "marca": solicitud.marca,
                "fechaSalida": solicitud.fechaSalida,
                "estado":"0",
                "id-user": solicitud.idUsuario
        
        };

        const response = await fetch("http://localhost:3000/peticiones", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(solicitudData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export{postPeticiones}
