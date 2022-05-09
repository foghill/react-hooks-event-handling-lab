// Code EyesOnMe Component Here
import React from "react";

function Keypad() {
  function handleChange(event) {
    event.preventDefault();
    console.log(`Entering password...`);
  }

  return (
    <>
      <h1>Keypad</h1>
      <input
        type="password"
        name="search"
        onChange={handleChange}
        placeholder="Enter password..."
      />
    </>
  );
}

export default Keypad;
