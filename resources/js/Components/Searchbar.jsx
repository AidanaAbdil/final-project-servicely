import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Searchbar({ query, setQuery, setSearching }) {
    const [results, setResults] = useState("");

    const loadSearch = async () => {
        if (!query) return;

        try {
            const response = await axios.get(`/api/search?query=${query}`);
            setResults(response.data);
            setSearching(true);
        } catch (error) {
            console.error("Error loading!", error);
        }
    };

    const handleSearch = () => {
        loadSearch();
    };

    return (
        <>
            <div className="search_section">
                <input
                    className="search_input"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search.."
                />
                <button onClick={handleSearch} className="search_button">
                    Search
                </button>
                <button
                    onClick={() => {
                        setQuery("");
                        setResults("");
                    }}
                    className="reset_button"
                >
                    Clear
                </button>
            </div>
            <div className="service-grid">
                {query && results.length > 0 ? (
                    <ul>
                        {results.map((result) => (
                            <div className="service-card">
                                <h4 key={result.id}>{result.title}</h4>
                                <p>{result.description}</p>
                                <p>
                                    {result.price} {result.currency}
                                </p>
                                <Link
                                    className="service-card-link"
                                    to={"/service/" + result.id}>
                                    <button className="btn-see-details">
                                        See details
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </ul>
                ) : (
                    ""
                )}
            </div>
        </>
    );
}

export default Searchbar;
