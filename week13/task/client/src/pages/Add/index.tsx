import React, { useState } from "react";
import "./style.scss";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
type Props = {};
function Add({}: Props) {
  const [name, setname] = useState("");
  const [age, setage] = useState(0);
  const [link, setlink] = useState("");
  const [genre, setgenre] = useState("");

  return (
    <div className="adder">
      <form action="">
        <input
          type="text"
          name=""
          id=""
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => {
            setage(e.target.value);
          }}
        />
        <input
          type="url"
          placeholder="image link"
          value={link}
          onChange={(e) => {
            setlink(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="genre"
          value={genre}
          onChange={(e) => {
            setgenre(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            const obj = {
              name: name,
              age: age,
              image: link,
              genre: genre,
            };
            axios.post("http://localhost:4000/datas/", obj);
            setage(0);
            setgenre("");
            setlink("");
            setname("");
            console.log("sent");
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Add;
