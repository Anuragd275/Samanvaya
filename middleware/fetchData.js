const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();


async function getItemDetails(asin) {
    try {
        const response = await axios.get(`${process.env.AMAZON_API_ENDPOINT}/${asin}`);
        const data = response.data;
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = getItemDetails;