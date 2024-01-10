"use client";
import React, { useState } from "react";
import "./style.scss";
import { Button, TextField } from "@mui/material";
import axios from "axios";
export default function Add() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState(false);
  const [dead, setDead] = useState(false);
  const [date, setDate] = useState("");
  const [genre, setGenre] = useState("");
  const [img, setImg] = useState("");
  return (
    <div className="adder">
      <h1>Add an Author</h1>
      <form action="">
        <div className="formInput">
          <TextField
            id="standard-basic"
            label="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="formInput">
          <TextField
            id="standard-basic"
            label="Surname"
            value={surname}
            onChange={(e) => {
              setSurname(e.target.value);
            }}
          />
        </div>
        {/* <div className="formInput">
          <TextField
            id="standard-basic"
            label="Gender"
            value={gender}
            onChange={(e) => {
              // setGender(e.target.value)
            }}
          />
        </div>
        <div className="formInput">
          <TextField
            id="standard-basic"
            label="Alive?"  
            value={}
            onChange={(e) => {
              setDead(e.target.value);
            }}
          />
        </div> */}
        <div className="formInput">
          <TextField
            id="standard-basic"
            label="Born date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div className="formInput">
          <TextField
            id="standard-basic"
            label="Genre"
            value={genre}
            onChange={(e) => {
              setGenre(e.target.value);
            }}
          />
        </div>
        <div className="formInput">
          <TextField
            id="standard-basic"
            label="Image link"
            value={img}
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
        </div>
        <Button
          variant="contained"
          className="sendBtn"
          onClick={() => {
            let authorCreated = {
              name: name,
              surname: surname,
              gender: gender,
              date: date,
              dead: dead,
              img: img,
              genre: genre,
            };
            axios.post("http://localhost:5000/api", authorCreated);
          }}
        >
          Send
        </Button>
      </form>
    </div>
  );
}
