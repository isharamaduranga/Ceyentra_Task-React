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

    get: async (url, headers = {}, limit = null) => {
        // Append the `limit` query parameter to the URL if provided
        if (limit !== null) {
            url += `&limit=${limit}`;
        }

        const apiObject = {
            url,
            method: 'GET',
            headers,
        };
        return await ApiService.callApi(apiObject);
    },

    post: async (url, data, headers = {}) => {
        const apiObject = {
            url,
            method: 'POST',
            data, headers,
        };
        return await ApiService.callApi(apiObject);
    },


    getByCategory: async (url, category, headers = {}) => {
        const apiObject = {
            url,
            method: 'GET',
            headers,
        };
        return await ApiService.callApi(apiObject);
    },

    getSingleProduct: async (url, productId, headers = {}) => {
        const apiObject = {
            url,
            method: 'GET',
            headers,
        };
        return await ApiService.callApi(apiObject);
    },

    updateProduct: async (url, updateData, headers = {}) => {
        const apiObject = {
            url,
            method: 'PUT',
            data: updateData,
            headers,
        };
        return await ApiService.callApi(apiObject);
    },

    deleteProduct: async (url, headers = {}) => {
        const apiObject = {
            url,
            method: 'DELETE',
            headers,
        };
        return await ApiService.callApi(apiObject);
    },
    deleteUser: async (url, headers = {}) => {
        const apiObject = {
            url,
            method: 'DELETE',
            headers,
        };
        return await ApiService.callApi(apiObject);
    },
};

export default ApiService;
