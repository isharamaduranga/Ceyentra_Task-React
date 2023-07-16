import ApiService from "./apiService";

export async function addNewProduct(newProductData) {
    const url = 'https://fakestoreapi.com/products';
    const headers = {
        'Content-Type': 'application/json',
    };
    try {
        const response = await ApiService.post(url, newProductData, headers);
        return response;
    } catch (error) {
        throw new Error('Error adding product: ' + error.message);
    }
}

export async function getAllProducts() {
    const url = 'https://fakestoreapi.com/products';
    return await ApiService.get(url);
}