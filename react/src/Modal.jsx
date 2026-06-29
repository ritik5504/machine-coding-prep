import React, { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>
        {`
          .container {
            padding: 20px;
          }

          .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .modal {
            background: white;
            padding: 20px;
            border-radius: 8px;
            min-width: 300px;
            position: relative;
          }

          .close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            border: none;
            background: none;
            font-size: 16px;
          }
        `}
      </style>

      <div className="container">
        <button onClick={() => setIsOpen(true)}>
          Open Modal
        </button>

        {isOpen && (
          <div
            className="overlay"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-btn"
                onClick={() => setIsOpen(false)}
              >
                X
              </button>

              <h2>Modal Title</h2>
              <p>This is the modal content.</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}