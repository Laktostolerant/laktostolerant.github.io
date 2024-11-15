const axios = require('axios');

exports.handler = async (event) => {

    // Use the API URL from the environment variable
    const apiUrl = process.env.GAMES_API_URL;

    try {
        const response = await axios.get(apiUrl);
        // Assuming the data structure you want is in response.data.items
        return {
            statusCode: 200,
            body: JSON.stringify(response.data.items)
        };
    } catch (error) {
        console.error('Error fetching games:', error);
        // Handle error response appropriately
        return {
            statusCode: error.response ? error.response.status : 500,
            body: JSON.stringify({ message: "Failed to fetch games" })
        };
    }
};