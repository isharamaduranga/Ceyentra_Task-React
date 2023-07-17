import ApiService from "./apiService";

export async function getCategories() {
    const url = 'https://fakestoreapi.com/products/categories';
    return await ApiService.get(url);
}


export async function getByCategory(category) {
    const url = `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`;
    return await ApiService.getByCategory(category);
}
