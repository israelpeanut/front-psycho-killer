import React from "react";

export const ItemList = ({ description }) => {
  return (
    <div className="d-flex flex-row mb-1">
      <div className="d-inline-flex p-2 textRed">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="4"
            fill="currentColor"
            className="bi bi-circle-fill"
            viewBox="0 0 16 16"
          >
            <circle cx="8" cy="8" r="8" />
          </svg>
        </div>
      </div>
      <div className="d-inline-flex p-2">
        <span>{description}</span>
      </div>
    </div>
  );
};
