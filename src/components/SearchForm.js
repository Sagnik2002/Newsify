import React, { useState } from "react";
import News from "./News";

const SearchForm = ({ searchText }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder=" "
          className="py-1 px-2 rounded-r-lg"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="--bs-success-900 py-50 px-90 rounded text-green"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
