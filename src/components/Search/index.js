import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

Search.propTypes = {};

function Search(props) {
  const { onSearchPage } = props;
  const [value, setValue] = useState("");
  const searchInput = useRef("");
  // debound method
  function onChange(e) {
    const keyword = e.target.value;
    setValue(keyword);

    if (searchInput.current) {
      clearTimeout(searchInput.current);
    }
    searchInput.current = setTimeout(() => {
      onSearchPage(keyword);
    }, 500);
  }
  return (
    <div>
      <input name="keyword" value={value} onChange={onChange} />
    </div>
  );
}

export default Search;
