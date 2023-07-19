import ApiService from "./apiService";

export async function getAllUsers() {
    const url = 'https://fakestoreapi.com/users';
    return await ApiService.get(url);
}

export async function deleteUser(userId) {
    const url = `https://fakestoreapi.com/users/${userId}`;
    const headers = {
        'Content-Type': 'application/json',
    };
    try {
        return  await ApiService.deleteUser(url,headers);
    } catch (error) {
        throw new Error('Error deleting product: ' + error.message);
    }
}
