import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  // What to do with the response
  function handleResponse(response) {
    console.log(response);
    setResults(response.data[0]);
  }
  // when search button is pressed
  function search(event) {
    event.preventDefault();

    let apiurl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiurl).then(handleResponse);
  }

  // set keyword to search with
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  // render the search bar
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
