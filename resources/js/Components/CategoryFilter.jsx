import { useEffect, useState } from "react";

function CategoryFilter({ selectedCategory, setSelectedCategory }) {
    const [categories, setCategory] = useState([]);

    const loadCategories = async () => {
        try {
            const response = await fetch("/api/categories");
            const data = await response.json();
            setCategory(data);
        } catch (error) {
            console.error("Error loading categories!", error);
            setCategory([]);
        }
    };

    useEffect(() => {
        loadCategories();
    }, []);
    return categories.map((category) => {
        return (
            <div
                className={
                    "status-filter__status" +
                    (selectedCategory === category.id
                        ? " category-filter__category_selected"
                        : "")
                }
                key={category.id}
            >
                <button
                    onClick={() => {
                        setSelectedCategory(category.id);
                    }}
                >
                    {category.name}
                </button>
            </div>
        );
    });
}

export default CategoryFilter;
