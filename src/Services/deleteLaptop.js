import axios from 'axios';
async function deleteLaptopById(id) {
  try {
    const response = await axios.delete(`http://localhost:3000/laptops/${id}`);
    return response;
  } catch (error) {
    console.error('Error deleting laptop:', error);
    throw error; // Re-throw the error to handle it in the calling component
  }
}

export default deleteLaptopById;
