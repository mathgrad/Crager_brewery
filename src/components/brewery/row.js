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
        <div>{props.website_url}</div>
      </div>
    </>
  );
};

export default BreweryRow;
