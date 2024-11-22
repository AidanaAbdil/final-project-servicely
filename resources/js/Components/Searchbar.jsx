import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

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
                <button
                    onClick={() => {
                        setQuery("");
                        setResults("");
                    }}
                    className="reset_button"
                >
                    X
                </button>
                <button onClick={handleSearch} className="search_button">
                    Search
                </button>
            </div>
            <div>
                {query && results.length > 0 ? (
                    <ul>
                        {results.map((result) => (
                            <li key={result.id}>{result.title}</li>
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
