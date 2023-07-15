import ApiService from "./apiService";

export async function manualLoginUser(userCredentials) {
    const apiObject = {
        url: 'https://fakestoreapi.com/auth/login',
        method: 'POST',
        data: userCredentials,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    return await ApiService.callApi(apiObject);
}