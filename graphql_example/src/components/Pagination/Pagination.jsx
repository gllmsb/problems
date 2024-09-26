import React from 'react'
import styles from './Pagination.module.scss';

export const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
    const maxVisibleButtons = 5;
    const startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);
  
    return (
      <div className={styles.pagination}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={currentPage === pageNumber ? styles.activePage : ""}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    );
  };