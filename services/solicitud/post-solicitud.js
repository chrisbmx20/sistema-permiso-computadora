
async function postPeticiones(solicitud) {
    try {
        const solicitudData = { 
                "serie": solicitud.serieEquipo,
                "marca": solicitud.marcaEquipo,
                "fechaSalida": solicitud.fechaSalida,
                "fechaRegreso" :solicitud.fechaRegreso,
                "estado":"0",
                "sede":solicitud.sede,
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
