import { Map, Marker } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";

const MyMap = (props) => {
  props = props.props;

  const coordinate = {
    lat: parseFloat(props.latitude),
    long: parseFloat(props.longitude),
  };

  return (
    <>
      {coordinate.lat !== null || coordinate.lat !== NaN ? (
        <Map
          provider={osm}
          height={300}
          defaultCenter={[coordinate.lat, coordinate.long]}
          defaultZoom={11}
        >
          <Marker width={50} anchor={[coordinate.lat, coordinate.long]} />
        </Map>
      ) : (
        <div>Bad location</div>
      )}
    </>
  );
};

export default MyMap;
