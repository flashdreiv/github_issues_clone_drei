import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ currentPage, filter, setCurrentPage }) => {
  function nextPage() {
    setCurrentPage((page) => page + 1);
  }
  function prevPage() {
    if (currentPage <= 1) {
      return;
    }
    setCurrentPage((page) => page - 1);
  }

  return (
    <div>
      <br />
      <Link
        onClick={prevPage}
        className="ui left labeled icon button"
        to={{
          pathname: "issues",
          search: `page=${currentPage - 1}&state=${filter}`,
        }}
      >
        <i className="left arrow icon"></i>
        Previous
      </Link>
      <b>Page {currentPage}</b>
      <Link
        onClick={nextPage}
        to={{
          pathname: "issues",
          search: `page=${currentPage + 1}&state=${filter}`,
        }}
        className="ui right labeled icon button"
      >
        <i className="right arrow icon"></i>
        Next
      </Link>
    </div>
  );
};

export default Pagination;
