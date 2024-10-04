import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [display, setDisplay] = useState("");
  const handleSubmit = (e) => {
    console.log(firstName, lastName);
    e.preventDefault();
    setDisplay(`${firstName} ${lastName}`);
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="">First Name: </label>
          <input
            type="text"
            required
            onChange={(e) => {
              setDisplay("");
              setFirstName(e.target.value);
            }}
            value={firstName}
            placeholder="Enter your name"
          />
        </div>
        <div className="">
          <label htmlFor="">Last Name: </label>
          <input
            type="text"
            required
            onChange={(e) => {
              setDisplay("");
              setLastName(e.target.value);
            }}
            value={lastName}
            placeholder="Enter your name"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="display">
        {display  && (
          <div className="">Full Name: {display}</div>
        )}
      </div>
    </div>
  );
}
