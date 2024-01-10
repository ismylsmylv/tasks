"use client";
import React from "react";
import "./style.scss";
import Card from "../../components/Card/page";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
export default function Authors() {
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
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
