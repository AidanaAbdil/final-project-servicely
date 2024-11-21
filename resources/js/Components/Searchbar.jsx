import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Searchbar() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState("");

    const loadSearch = async () => {
        try {
            const response = await axios.get(`/api/search?${query}`);
            setResults(response.data);
        } catch (error) {
            console.error("Error loading!", error);
        }
    };
    useEffect(() => {
        loadSearch();
    }, []);

    const handleSearch = () => {
        loadSearch();
    };

    return (
        <div className="search_section">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search.."
            />
            <button onClick={handleSearch} className="search_button">
                Search
            </button>
            <div>
                {results.length > 0 ? (
                    <ul>
                        {results.map((result) => (
                            <li key={result.id}>{result.title}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </div>
    );
}

export default Searchbar;
