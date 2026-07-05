const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

async function insertData(data) {
    try {
        const response = await axios.post(`${process.env.DB_INSERTER_ENDPOINT}`, data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = insertData;