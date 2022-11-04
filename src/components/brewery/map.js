import { Map, Marker } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";

const MyMap = (props) => {
  props = props.props;
  const coordinate = {
    lat: parseInt(props.latitude) || 0,
    long: parseInt(props.longitude) || 0,
  };
  return (
    <Map
      provider={osm}
      height={300}
      defaultCenter={[coordinate.lat, coordinate.long]}
      defaultZoom={11}
    >
      <Marker width={25} anchor={[coordinate.lat, coordinate.long]} />
    </Map>
  );
};

export default MyMap;
