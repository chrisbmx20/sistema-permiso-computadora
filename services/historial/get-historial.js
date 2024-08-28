async function getHistoral() {
    try {
        const respuesta = await fetch('http://localhost:3000/historial', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!respuesta.ok) {
            throw new Error('Error al obtener al historial');
        }

        const history = await respuesta.json();

        console.log(history);

        return history;

    } catch (error) {
        console.error('Error al obtener el historial:', error);
        throw error;
    }
}

export { getHistoral };