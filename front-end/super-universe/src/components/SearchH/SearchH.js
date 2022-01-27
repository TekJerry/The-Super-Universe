import React from "react";

export default function SearchH(props) {
  return (
    <div>
      <form onSubmit={(e) => props.onSubmit(e)}>
        <input
          className="displayedcharacters_searchbar"
          onChange={(e) => props.handleSearch(e.target.value)}
          placeholder="Search"
          type="text"
        />
      </form>
    </div>
  );
}
