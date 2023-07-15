const ApiService = {
    callApi: async (apiObject) => {
        try {
            const response = await fetch(apiObject.url, {
                method: apiObject.method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: apiObject.body,
            });

            if (!response.ok) {
                throw new Error('Request failed');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('API call error: ' + error.message);
        }
    },
};

export default ApiService;
