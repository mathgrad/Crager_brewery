const Search = () => {
  const search = (event) => {
    let phrase = event.target.value;
    if (phrase.length <= 2) return;
    fetch("https://api.openbrewerydb.org/breweries?by_city=" + phrase)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
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
