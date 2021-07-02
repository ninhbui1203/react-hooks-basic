import "./App.css";
import { useEffect, useState } from "react";
import queryString from "query-string";
import TodoList from "./components/TodoList";
import Pagination from "./components/Pagination";
import Search from "./components/Search";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [pagination, setPagination] = useState({});
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
    // title_like: "",
  });
  useEffect(() => {
    async function getList() {
      const params = queryString.stringify(filters);
      console.log(params);
      const url = `https://js-post-api.herokuapp.com/api/posts?${params}`;
      const response = await fetch(url);
      return response.json();
    }

    getList().then((result) => {
      const { data, pagination } = result;
      setTodoList(data);
      setPagination(pagination);
    });
  }, [filters]);

  function handleChangePage(pageNumber) {
    const newFilters = { ...filters, _page: pageNumber };
    setFilters(newFilters);
  }

  function handleSearch(keywords) {
    const newFilters = { ...filters, _page: 1, title_like: keywords };
    setFilters(newFilters);
  }
  return (
    <div className="App">
      <Search onSearchPage={handleSearch} />
      <TodoList todos={todoList} />
      <Pagination pagination={pagination} onChangePage={handleChangePage} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
