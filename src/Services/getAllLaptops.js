import axios from 'axios';
async function fetchAllLaptops() {
  try {
    const response = await axios.get("http://localhost:3000/laptops")
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error fetching data at Investments:', error);
  }
}

export default fetchAllLaptops;