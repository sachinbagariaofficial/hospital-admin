import React from "react";
import { PaginationProps } from "./Types";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="flex justify-between items-center p-4 border-t rounded-b-[10px]  bg-white dark:bg-boxdark ">
      <div className="text-gray-500">Showing 1 to 10 of 26 entries</div>

      <nav className="inline-flex items-center space-x-2">
        {/* Previous button */}
        <button
          className={`px-3 py-1 rounded ${
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-600"
          }`}
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ‹
        </button>

        {/* Page numbers */}
        {pages.map((page) => (
          <button
            key={page}
            className={`px-4 py-2 rounded ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}

        {/* Next button */}
        <button
          className={`px-3 py-1 rounded ${
            currentPage === totalPages
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-600"
          }`}
          onClick={() =>
            currentPage < totalPages && onPageChange(currentPage + 1)
          }
          disabled={currentPage === totalPages}
        >
          ›
        </button>
      </nav>
    </div>
  );
};
export default Pagination;
