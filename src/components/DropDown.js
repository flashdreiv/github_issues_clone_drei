import React from "react";
import { useHistory } from "react-router";

const DropDown = ({ filter, setFilter, currentPage }) => {
  const history = useHistory();
  const onChange = (e) => {
    setFilter(e.target.value);
    //why is the query parameter need to be e.target.value not filter
    history.push({
      pathname: "issues",
      search: `page=${currentPage}&state=${e.target.value}`,
    });
  };
  return (
    <select
      className="ui dropdown"
      onChange={onChange}
      value={filter}
      style={{ marginBottom: "20px" }}
    >
      <option value="all">All</option>
      <option value="open">Open</option>
      <option value="closed">Close</option>
    </select>
  );
};

export default DropDown;
