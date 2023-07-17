import React, { useState, useEffect } from 'react';
import { getCategories } from '../services/category';

export default function useCategory() {
    const [categories, setCategories] = useState([]);

    // Fetch categories
    const fetchCategories = async () => {
        try {
            const data = await getCategories();
            setCategories(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return categories;
}
