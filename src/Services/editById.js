import axios from 'axios';

async function editById(id) {
    try {
        const response = await axios.put(`http://localhost:3000/laptops/${id}`);
        return response;
    } catch (error) {
        console.error('Error Adding laptop:', error);
        throw error;
    }
}

export default editById;
