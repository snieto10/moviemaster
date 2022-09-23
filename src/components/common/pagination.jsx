import React from "react";
import _ from "lodash";

const Pagination = ({ onPageChange, itemsCount, pageSize }) => {
  const pagesCount = itemsCount / pageSize;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav aria-label="...">
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className="page-item">
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
