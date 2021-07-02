import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {};

function Pagination(props) {
  const { onChangePage } = props;
  const { _page, _limit, _totalRows } = props.pagination;
  const _maxPage = Math.ceil(_totalRows / _limit);

  function handleChangePage(pageNumber) {
    onChangePage(pageNumber);
  }

  return (
    <div>
      <button disabled={_page <= 1} onClick={() => handleChangePage(_page - 1)}>
        Prev
      </button>
      <span>{_page}</span>
      <button
        disabled={_page >= _maxPage}
        onClick={() => handleChangePage(_page + 1)}
      >
        Prev
      </button>
    </div>
  );
}

export default Pagination;
