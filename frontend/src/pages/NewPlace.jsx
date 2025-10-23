import Input from "../components/UI/Input";
import { VALIDATOR_REQUIRE } from "../utils/validators";
import "./NewPlace.css";

const NewPlaces = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
      />
    </form>
  );
};

export default NewPlaces;
