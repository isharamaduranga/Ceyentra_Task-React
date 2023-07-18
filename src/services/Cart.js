import ApiService from "./apiService";

export async function addNewCart(cartData) {
    const url = 'https://fakestoreapi.com/carts';
    const headers = {
        'Content-Type': 'application/json',
    };
    try {
        const response = await ApiService.post(url, cartData, headers);
        return response;
    } catch (error) {
        throw new Error('Error creating cart: ' + error.message);
    }
}