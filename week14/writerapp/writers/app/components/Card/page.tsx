"use client";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./style.scss";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "@/app/redux/hooks";
import { testLog, deleteAuth } from "@/app/redux/counterSlice";
import { useRouter } from "next/navigation";
export default function MediaCard({ elem }) {
  const router = useRouter();
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  let male;
  if (elem.gender) {
    male = "male";
  } else {
    male = "female";
  }
  // console.log(elem);
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardMedia
        className="cardImg"
        sx={{ height: 140 }}
        image={elem.img}
        title="green iguana"
      />
      <CardContent>
        <Typography
          className="authName"
          gutterBottom
          variant="h5"
          component="div"
          onClick={() => {
            router.push("/details");
          }}
        >
          {elem.name} {elem.surname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {elem.born}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Genre: {elem.genre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gender: {male}
        </Typography>
      </CardContent>
      <CardActions className="actions">
        <Button
          size="small"
          color="error"
          className="deleteBtn"
          onClick={() => {
            // axios.delete(`http://localhost:5000/api/${elem._id}`);
            console.log(elem._id);
            dispatch(deleteAuth(elem._id));
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
