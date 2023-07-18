import React, { useState, useEffect } from 'react';
import {getAllProducts} from "../services/product";

export default function useProduct() {
    const [products, setProducts] = useState([]);

    // Fetch categories
    const fetchProducts = async () => {
        try {
            const data = await getAllProducts();
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return products;
}
