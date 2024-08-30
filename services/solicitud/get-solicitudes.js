async function getSolicitudes() {
    try {
        const response = await fetch('http://localhost:3000/peticiones', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const users = await response.json();

        console.log(users);

        return users;

    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

async function getSolicitudById(id) {

    let solicitud;


    try {
        const response = await fetch(`http://localhost:3000/peticiones/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            solicitud = await response.json();
            console.log(solicitud);
            
        }
        else if(response.status  === 404){
            solicitud = undefined

        }
        else{
            //throw new Error('Error fetching Solicitud');
            solicitud = undefined
        }
      
       
        return solicitud;

    } catch (error) {
        console.error('Error deleting peticion:', error);
        throw error;
    }
}

export { getSolicitudes, getSolicitudById};