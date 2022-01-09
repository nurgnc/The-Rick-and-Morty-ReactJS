import React, { useState } from "react";
import { Link } from "react-router-dom";

const Pagination = ({ pageNumbers, totalPage, paginate, currentPage }) => {
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const renderPageNumbers = pageNumbers.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          className={
            "page-item rounded " + (currentPage === number ? "active" : "")
          }
        >
          <Link
            onClick={() => {
              paginate(number);
            }}
            to={`?page=${number}`}
            className="page-link "
          >
            {number}
          </Link>
        </li>
      );
    }
    return null;
  });

  const handleNextBtn = () => {
    paginate(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handlePrevBtn = () => {
    paginate(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li
          class={
            "page-item " + (currentPage == pageNumbers[0] ? "disabled" : "")
          }
        >
          <Link
            onClick={handlePrevBtn}
            class="page-link"
            to={`?page=${currentPage - 1}`}
          >
            Prev
          </Link>
        </li>
        {renderPageNumbers}
        <li
          class={
            "page-item " +
            (currentPage == pageNumbers[totalPage] ? "disabled" : "")
          }
        >
          <Link
            onClick={handleNextBtn}
            class="page-link"
            to={`?page=${currentPage + 1}`}
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
