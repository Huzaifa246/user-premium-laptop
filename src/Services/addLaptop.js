import axios from 'axios';

async function addLaptopApi(formData) {
    try {
        const response = await axios.post(`http://localhost:3000/add-laptop`, formData);
        return response;
    } catch (error) {
        console.error('Error Adding laptop:', error);
        throw error;
    }
}

export default addLaptopApi;
