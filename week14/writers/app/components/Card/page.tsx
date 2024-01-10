import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./style.scss";
export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardMedia
        className="cardImg"
        sx={{ height: 140 }}
        image="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSpj56ZHu--rSzpHSGEUbJUCshy14wtFw3Tn-UcpsKCcx1w4cboDRAWB2diZb3fVJTTDYObrpzqi5qWe8Y"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          J K Rowling
        </Typography>
        <Typography variant="body2" color="text.secondary">
          50 years old
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Genre: Fantasy
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gender: Female
        </Typography>
      </CardContent>
      <CardActions className="actions">
        <Button size="small" color="error" className="deleteBtn">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
