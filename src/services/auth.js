import ApiService from "./apiService";


export async function manualLoginUser(userCredentials) {
    const apiObject = {
        url: 'https://fakestoreapi.com/auth/login',
        method: 'POST',
        body: JSON.stringify(userCredentials),
    };

    return await ApiService.callApi(apiObject);
}
