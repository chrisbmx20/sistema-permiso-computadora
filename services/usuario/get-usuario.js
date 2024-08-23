async function getUsers() {
    try {
        const response = await fetch('http://localhost:3000/usuarios', {
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

async function getUserById(id) {
    try {
        const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching Usuario');
        }
      
        const user = await response.json();
        console.log(user);
        
        return user;

    } catch (error) {
        console.error('Error deleting peticion:', error);
        throw error;
    }
}

export { getUsers, getUserById };