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
    return (
        <div className="category-buttons-container">
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
