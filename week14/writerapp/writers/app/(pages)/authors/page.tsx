"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import Card from "../../components/Card/page";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { getAuth, searchAuth } from "@/app/redux/counterSlice";
export default function Authors() {
  const dispatch = useAppDispatch();
  // const [datas, setdatas] = useState([]);
  useEffect(() => {
    dispatch(getAuth());
    console.log(datas);
  }, []);

  const datas = useAppSelector((state) => state.counter.datas);
  const [Gender, setGender] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };
  return (
    <div className="authorsPage">
      <div className="filters">
        <div className="searchBar">
          <TextField
            className="search"
            id="outlined-basic"
            label="Search author"
            variant="outlined"
            onChange={(e) => {
              dispatch(searchAuth(e.target.value.trim()));
            }}
          />
        </div>
        <div className="dropDown">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Gender}
                label="Gender"
                onChange={handleChange}
              >
                <MenuItem value={0}>Gender</MenuItem>
                <MenuItem value={1}>Male</MenuItem>
                <MenuItem value={2}>Female</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div className="cards">
        {datas &&
          datas.map((elem) => {
            console.log(datas);
            return <Card key={uuidv4()} elem={elem} />;
          })}
      </div>
    </div>
  );
}
