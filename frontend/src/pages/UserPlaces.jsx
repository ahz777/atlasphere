import { useParams } from "react-router-dom";
import PlaceList from "../components/UserPlaces/PlaceList";
import { DUMMY_PLACES } from "../data.js";

const UserPlaces = () => {
  const userID = useParams().userID;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creatorID === userID);

  return <PlaceList items={loadedPlaces} />;
};
export default UserPlaces;
