import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "ZTX4ZaTS8ojVFrXqfMJcuvkBOlD6jP2bsPVdD8RqWsg",
});

const SearchPhotos = () => {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);
  //console.log(query);
  const searchPhotos = async (e) => {
    e.preventDefault();
    //console.log("submitting request")
    unsplash.search
      .photos(query)
      .then(toJson)
      .then((json) => {
        setPics(json.results);
      });
  };

  return (
    <div>
      <form className="form" onSubmit={searchPhotos}>
        <label htmlFor="query" className="label">
          {" "}
        </label>

        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "landscape" or "Tokyo"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {pics.map((pic) => (
          <div className="card" key={pic.id}>
            <img
              src={pic.urls.full}
              alt={pic.alt_description}
              className="card-image"
              width="50%"
              height="50%">
              </img>


          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPhotos;
