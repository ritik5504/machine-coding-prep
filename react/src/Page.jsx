import React, { useState } from "react";

const items = Array.from({length: 50}, (_, i) => `Item ${i + 1}`);
const itemsPerPage = 10;

const App = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div>
            {currentItems.map((item, i) => (
                <div key={i}>{item}</div>
            ))}
            <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
            >Previous</button>

            <span> Page {currentPage} of {totalPages} </span>

            <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
            >Next</button>
        </div>
    )
}

export default App;