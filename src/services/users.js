import ApiService from "./apiService";

export async function getAllUsers() {
    const url = 'https://fakestoreapi.com/users';
    return await ApiService.get(url);
}