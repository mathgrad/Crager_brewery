import { Map, Marker } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";

const MyMap = (props) => {
  props = props.props;
  console.log(
    "props coordinates:",
    props.latitude,
    props.longitude,
    "\nconverted: ",
    parseFloat(props.latitude),
    parseFloat(props.longitude)
  );
  const coordinate = {
    lat: parseFloat(props.latitude) || 0,
    long: parseFloat(props.longitude) || 0,
  };
  return (
    <Map
      provider={osm}
      height={300}
      defaultCenter={[coordinate.lat, coordinate.long]}
      defaultZoom={11}
    >
      <Marker width={50} anchor={[coordinate.lat, coordinate.long]} />
    </Map>
  );
};

export default MyMap;
