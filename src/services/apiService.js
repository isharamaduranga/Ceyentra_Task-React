import axios from 'axios';

const ApiService = {
    callApi: async (apiObject) => {
        try {
            const response = await axios(apiObject);
            return response.data;

        } catch (error) {
            throw new Error('API call error: ' + error.message);
        }
    },
};

export default ApiService;