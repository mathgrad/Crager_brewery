import { searchCity } from "../../redux/sliceBrewery";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const search = (event) => {
    let phrase = event.target.value;
    if (phrase.length <= 2) return;
    dispatch(searchCity(phrase));
  };

  return (
    <div className="breweries top">
      <div className="search">
        <label htmlFor="si">Search For Your Brewery</label>
        <input type="text" id="si" name="si" onChange={search}></input>
      </div>
    </div>
  );
};

export default Search;
