import React from "react";

const Pagination = ({ page, goAhead, goBack, maxMoviesPerPage }) => {
  return (
    <>
      <div
        className="w-full 
    flex justify-center
    mb-8
    "
      >
        
        { page > 1 &&
            <button
            className="
                p-2
                border-2
                border-gray-200
                text-gray-500
                border-r-0
                rounded-l-xl
            "
            onClick={goBack}
            >
            Previous
            </button>
        }
        <button
          className="
            p-2
            border-2
            border-gray-200
            text-gray-500
            bg-gray-200
            "
        >
          {page}
        </button>
        
        { 
            page < maxMoviesPerPage && 
            <button
            className="
                p-2
                border-2
                border-gray-200
                text-gray-500
                border-l-0
                rounded-r-xl
                "
                onClick={goAhead}
            >
                Next
            </button>
        }
      </div>
    </>
  );
};

export default Pagination;
