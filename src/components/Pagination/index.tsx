import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="flex justify-center my-4">
      <ul className="flex">
        {pages.map((page) => (
          <li key={page}>
            <button
              className={`px-3 py-1 mx-1 rounded-full ${
                currentPage === page
                  ? "bg-blue-900 dark:bg-gray-100 text-white dark:text-gray-900"
                  : "bg-gray-200 text-gray-800 dark:bg-gray-400 dark:text-gray-900"
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
