import { useEffect, useState } from "react";

import axios from "axios";

function CategoryFilter({ selectedCategory, setSelectedCategory }) {
    const [categories, setCategory] = useState([]);

    const loadCategories = async () => {
        try {
            const response = await axios.get("/api/categories");
            setCategory(response.data);
        } catch (error) {
            console.error("Error loading categories!", error);
            setCategory([]);
        }
    };

    useEffect(() => {
        loadCategories();
    }, []);


    return (
        <div className="category-buttons-container">
            <button
                className={
                    "category_button" +
                    (selectedCategory === null
                        ? " category-filter__category_selected"
                        : "")
                }
                onClick={() => setSelectedCategory(null)} // Reset category to show all
            >
                Show All
            </button>
            
            {categories.map((category) => {
                return (
                    <button
                        className={
                            "category_button" +
                            (selectedCategory === category.id
                                ? " category-filter__category_selected"
                                : "")
                        }
                        key={category.id}
                        onClick={() => {
                            setSelectedCategory(category.id);
                        }}
                    >
                        {category.name}
                    </button>
                );
            })}
        </div>
    );
}

export default CategoryFilter;
