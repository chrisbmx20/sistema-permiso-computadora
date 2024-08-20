async function updateUsers(nombre, apellido,id) {
    try {
     
        const userData = { 
            nombre, 
            apellido 
        
        };
        const response = await fetch("http://localhost:300/usuarios/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export{updateUsers}

