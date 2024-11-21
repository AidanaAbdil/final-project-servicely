import axios from "axios";
import { useState, useEffect } from "react";
import CategoryFilter from "../components/CategoryFilter";

function Catalog() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [listCategoryService, setListCategoryService] = useState(null);
    const catalogList = async () => {
        try {
            const response = await axios.get(
                `/api/services?category_id=${encodeURIComponent(
                    selectedCategory
                )}`
            );
            setListCategoryService(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching catalog!", error);
        }
    };
    useEffect(() => {
        catalogList();
    }, [selectedCategory]);

    return (
        <>
            <div className="catalog-container">
                <CategoryFilter
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />

                <div className="catalog_display">
                    {listCategoryService?.length ? (
                        listCategoryService.map((service) => (
                            <div key={service.id}>
                                <ul>Name: {service.title}</ul>
                            </div>
                        ))
                    ) : (
                        <p>No services available for the selected category.</p>
                    )}
                </div>
            </div>
        </>
    );
}
export default Catalog;
