

async function deletePeticion(id) {
    try {
        const response = await fetch(`http://localhost:3000/peticiones/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error Eliminando peticion con id ${id}`);
        }

        return { message: `Peticion con id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting peticion:', error);
        throw error;
    }
}

export { deletePeticion };