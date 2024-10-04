import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState({
    name: "",
    surname: "",
  });
  const [display, setDisplay] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplay(data);
    setData({
      name: "",
      surname: "",
    });
  };
  useEffect(() => {}, []);
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
              setData((data) => {
                return { ...data, name: e.target.value };
              });
            }}
            value={data.name}
            placeholder="Enter your name"
          />
        </div>
        <div className="">
          <label htmlFor="">Last Name: </label>
          <input
            type="text"
            required
            onChange={(e) => {
              setData((data) => {
                return { ...data, surname: e.target.value };
              });
            }}
            value={data.surname}
            placeholder="Enter your name"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="display">
        {display && (
          <div className="">
            Full Name:{display.name} {display.surname}
            <button
              onClick={() => {
                setDisplay("");
              }}
              style={{
                border: "none",
                backgroundColor: "white",
                cursor: "pointer",
              }}
            >
              x
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
