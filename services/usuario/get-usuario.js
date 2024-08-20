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

export { getUsers };