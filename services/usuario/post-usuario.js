



async function postUsers(usuario) {
    try {
     
        const userData = { 
    "id": usuario.id,
    "nombre": usuario.nombre,
    "apellido": usuario.apellido,
    "correo": usuario.correo,
    "telefono": usuario.telefono,
    "role": usuario.role,
    "password": usuario.password
        
        };

        const response = await fetch("http://localhost:3000/usuarios", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export{postUsers}

