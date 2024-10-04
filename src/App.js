import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [display, setDisplay] = useState("");
  const submit = (e) => {
    e.preventDefault();
    setDisplay(firstName + " " + lastName);
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form action="" onSubmit={submit}>
        <div className="">
          <label htmlFor="">First Name: </label>
          <input
            name="fname"
            required
            type="text"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            value={firstName}
            placeholder="Enter your name"
          />
        </div>
        <div className="">
          <label htmlFor="">Last Name: </label>
          <input
            name="lname"
            required
            type="text"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            value={lastName}
            placeholder="Enter your name"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    
        {display ? <p>Full Name: {display}</p> : ""}
     
    </div>
  );
}
