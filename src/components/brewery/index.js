import Row from "./row";
import { useEffect, useState } from "react";

const BreweryBase = () => {
  // const breweries = useSelector((state) => state.breweries);
  // const [active, setActive] = useState(false);
  const [breweries, setBreweries] = useState([]);
  useEffect(() => {}, [breweries]);
  if (breweries.length == 0) {
    fetch("https://api.openbrewerydb.org/breweries")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBreweries(data);
      });
  }
  return (
    <div className="breweries">
      {breweries.length > 0 && (
        <div className="header">
          <div>Name</div>
          <div>Type</div>
          <div>Address</div>
          <div>Website</div>
        </div>
      )}
      {breweries.length > 0 &&
        breweries.map((brewery, index) => <Row props={brewery} />)}
    </div>
  );
};
/* {Object.values(breweries).length > 0 &&
        Object.values(breweries).forEach((brewery) =>
          (<Row props={brewery} />)(active && <Map props={brewery} />)
        )} */
export default BreweryBase;
