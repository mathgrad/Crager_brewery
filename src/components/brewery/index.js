import Row from "./row";
import { breweryList } from "../../redux/sliceBrewery";
import { useSelector } from "react-redux";

const BreweryBase = () => {
  const breweries = useSelector(breweryList);
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
        breweries.map((brewery, index) => (
          <Row key={index.toString()} props={brewery} />
        ))}
    </div>
  );
};

export default BreweryBase;
