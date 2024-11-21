import { useState, useEffect } from "react";

import axios from "axios";

import CategoryFilter from "../components/CategoryFilter";
import Searchbar from "../components/Searchbar";

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
            <Searchbar />
            <div className="catalog-container">
                <CategoryFilter
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />

                <div className="service-grid">
                    {listCategoryService?.length ? (
                        listCategoryService.map((service) => (
                            <div className="service-card" key={service.id}>
                                <h4> {service.title}</h4>
                                <p>{service.description}</p>
                                <p>
                                    Price: {service.price} {service.currency}
                                </p>
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
