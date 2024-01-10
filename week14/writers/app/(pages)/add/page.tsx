import React from "react";
import "./style.scss";
import { Button, TextField } from "@mui/material";
export default function Add() {
  return (
    <div className="adder">
      <h1>Add an Author</h1>
      <form action="">
        <div className="formInput">
          <TextField id="standard-basic" label="Name" />
        </div>
        <div className="formInput">
          <TextField id="standard-basic" label="Surname" />
        </div>
        <div className="formInput">
          <TextField id="standard-basic" label="Gender" />
        </div>
        <div className="formInput">
          <TextField id="standard-basic" label="Born date" />
        </div>
        <div className="formInput">
          <TextField id="standard-basic" label="Genre" />
        </div>
        <Button variant="contained" className="sendBtn">
          Send
        </Button>
      </form>
    </div>
  );
}
