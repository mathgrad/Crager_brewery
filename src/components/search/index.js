import { useEffect, useState } from "react";

const Search = () => {
  const [phrase, setPhrase] = useState("");
  useEffect(() => {}, [phrase]);
  const search = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="breweries">
      <div className="search">
        <label htmlFor="si">Search For Your Brewery</label>
        <input type="text" id="si" name="si" onChange={search}></input>
      </div>
    </div>
  );
};

export default Search;
