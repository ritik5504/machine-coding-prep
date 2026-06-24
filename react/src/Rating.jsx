import React, { useState } from "react";

const App = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div>
            {[1,2,3,4,5].map(i => (
                <span
                    key={i}
                    onClick={() => setRating(i)}
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(0)}
                    style={{
                        fontSize: "2rem",
                        cursor: "pointer",
                        color: i <= (hover || rating) ? "gold" : "gray"
                    }}
                >
                    ★
                </span>
            ))}
        </div>
    )
}

export default App;