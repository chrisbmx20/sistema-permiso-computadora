async function postHistorial(idSolicitud) {
    try {
        const historialData = {
            "idSolicitud": idSolicitud,
            "fecha": new Date().toISOString()
        };
        
        const response = await fetch('http://localhost:3000/historial', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(historialData)
        });

        return await response.json();
        
    } catch (error) {
        console.error('Error posting history:', error);
        throw error;
    }
}


export{postHistorial}

