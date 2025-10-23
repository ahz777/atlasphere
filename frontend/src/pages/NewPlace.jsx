import Input from "../components/UI/Input";

import "./NewPlace.css";

const NewPlaces = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[]}
        errorText="Please enter a valid title."
      />
    </form>
  );
};

export default NewPlaces;
