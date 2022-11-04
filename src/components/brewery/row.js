import Map from "./map";

const BreweryRow = (props) => {
  props = props.props;

  return (
    <>
      <div className="row">
        <div>{props.name}</div>
        <div>{props.brewery_type}</div>
        <div>
          {props.street} {props.address_1 && props.address_1 + " "}
          {props.address_1 && props.address_2 + " "}
          {props.city} {props.state} {props.postal_code}
        </div>
        {props.website_url !== null ? (
          <div>
            <a href={props.website_url} target={"_blank"} rel={"noreferrer"}>
              {props.name}'s website
            </a>
          </div>
        ) : (
          <div>No Website Available</div>
        )}
      </div>
      <Map props={props} />
    </>
  );
};

export default BreweryRow;
