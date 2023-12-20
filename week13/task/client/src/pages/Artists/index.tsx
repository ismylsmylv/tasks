import React from "react";
import Button from "@mui/material/Button";
import "./style.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";
type Props = {};

function Artists({}: Props) {
  const navigate = useNavigate();
  const [datas, setdatas] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/datas/").then((res) => {
      console.log(res.data);
      setdatas(res.data);
    });
  }, []);

  return (
    <div className="artists">
      <div className="searchBar">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search artist"
          className="search"
        />
        <Button variant="contained">Sort by age</Button>
      </div>

      <div className="singers">
        {datas &&
          datas.map((elem) => {
            return (
              <Card
                className="card"
                sx={{ width: 345 }}
                key={uuidv4()}
                onClick={(e) => {
                  console.log(elem.name);
                  navigate(`/artists/${elem.id}`);
                  // <Link to={`/artists/:${elem.id}`}></Link>;
                }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={elem.image}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {elem.name}
                  </Typography>
                </CardContent>
                <CardActions className="cardActions">
                  <div className="age">{elem.age}</div>
                  <Button
                    size="small"
                    className="deleteBtn"
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log(elem.id);
                      axios.delete("http://localhost:4000/datas/" + elem.id);
                      setdatas(
                        datas.filter((element) => element.id != elem.id)
                      );
                    }}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            );
          })}
      </div>
    </div>
  );
}

export default Artists;
