import axios from "axios";
import { useState, useEffect } from "react";

function Catalog() {
    const [catalogService, setCatalogService] = useState([]);

    const catalogList = async () => {
        try {
            const response = await axios.get(`/api/services`);
            setCatalogService(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching catalog!", error);
        }
    };
    useEffect(() => {
        catalogList();
    }, []);

    return (
        <div className="catalog-container">
            <h2>Find what you need!</h2>

            {catalogService.map((service) => {
                return (
                    service.category_id === 1 && (
                        <div
                            className="category_cleaning_grid"
                            key={service.category_id}
                        >
                            <h1>{service.title}</h1>
                            <p>{service.price}</p>
                            <p>{service.currency}</p>
                        </div>
                    )
                );
            })}

            <div className="category_beauty_grid"></div>
            <div className="category_pet_grid"></div>
            <div className="category_creative_grid"></div>
            <div className="category_financial_grid"></div>
            <div className="category_translation_grid"></div>
        </div>
    );
}
export default Catalog;
