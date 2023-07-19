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

//insert a code for get single product this place

export async function getSingleProduct(productId) {
    const url = `https://fakestoreapi.com/products/${productId}`;
    return await ApiService.getSingleProduct(url,productId);
}

export async function updateProduct(productId, updateData) {
    const url = `https://fakestoreapi.com/products/${productId}`;
    const headers = {
        'Content-Type': 'application/json',
    };
    try {
        return await ApiService.updateProduct(url, updateData, headers);
    } catch (error) {
        throw new Error('Error updating product: ' + error.message);
    }
}

export async function deleteProduct(productId) {
    const url = `https://fakestoreapi.com/products/${productId}`;
    const headers = {
        'Content-Type': 'application/json',
    };
    try {
        return  await ApiService.deleteProduct(url,headers);
    } catch (error) {
        throw new Error('Error deleting product: ' + error.message);
    }
}




