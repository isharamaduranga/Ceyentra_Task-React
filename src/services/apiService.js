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

    get: async (url, headers = {}) => {
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
            data,
            headers,
        };
        return await ApiService.callApi(apiObject);
    },


    getByCategory: async (category, headers = {}) => {
        const url = `https://fakestoreapi.com/products/category/${category}`;
        const apiObject = {
            url,
            method: 'GET',
            headers,
        };
        return await ApiService.callApi(apiObject);
    },

    getSingleProduct: async (productId, headers = {}) => {
        const url = `https://fakestoreapi.com/products/${productId}`;
        const apiObject = {
            url,
            method: 'GET',
            headers,
        };
        return await ApiService.callApi(apiObject);
    },

    updateProduct: async (productId, updateData, headers = {}) => {
        const url = `https://fakestoreapi.com/products/${productId}`;
        const apiObject = {
            url,
            method: 'PUT',
            data: updateData,
            headers,
        };
        return await ApiService.callApi(apiObject);
    },

    deleteProduct: async (productId, headers = {}) => {
        const url = `https://fakestoreapi.com/products/${productId}`;
        const apiObject = {
            url,
            method: 'DELETE',
            headers,
        };
        return await ApiService.callApi(apiObject);
    },


};

export default ApiService;
