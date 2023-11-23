import '@fontsource/roboto/400.css';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Button, Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import './App.css';
import style from "./style.module.css";
import axios from 'axios';
import { useState } from 'react';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function App() {
  const [name, setname] = useState("");
  const [data, setdata] = useState({});
  const [year, setyear] = useState("");



  const handleChange = (event) => {
    setyear(event.target.value);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <CameraAltIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Album layout
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Container style={{ width: "100%" }}>
        <div className={style.cont}>

          <Typography variant="h2" gutterBottom className={style.headingText}>
            Album Layout
          </Typography>
          <Typography variant="body1" gutterBottom className={style.headP}>

            Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
          </Typography>
          {/* btns */}
          <div className={style.btns}>
            <TextField id="outlined-basic" label="Enter name" variant="outlined" className={style.btnLeft} onChange={(e) => {
              setname(e.target.value)
            }} />
            {/* <TextField id="outlined-basic" label="Enter year" variant="outlined" className={style.btnLeft} onChange={(e) => {
              setyear(e.target.value)
            }} /> */}

            {/* select option */}
            <Box sx={{ minWidth: 120 }} className={style.btnLeft}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Year</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={year}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={""}>Year</MenuItem>
                  <MenuItem value={2000}>2000</MenuItem>
                  <MenuItem value={2010}>2010</MenuItem>
                  <MenuItem value={2020}>2020</MenuItem>
                </Select>
              </FormControl>
            </Box>


            <Button variant="outlined" onClick={() => {
              axios("https://www.omdbapi.com/?s=" + name + "&y=" + year + "&apikey=dc04dc8f").then(res => {
                console.log(res.data)
                setdata(res.data)
                console.log(name)
              })
            }}>Search</Button>

          </div>


        </div>

        <div style={{ display: "flex", flexWrap: "wrap", width: "100%", margin: "0 auto", gap: "10px", justifyContent: "center" }} >
          {
            data.Search?.map((elem, i) => {
              return <Card sx={{ maxWidth: 345 }} key={i}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={elem.Poster}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {elem.Title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {elem.Year}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            })



          }
        </div>

        {/* footer */}
        <div className={style.footer}>
          <Typography variant="h6" display="block" gutterBottom className={style.footer1}>
            <b>Footer</b>
          </Typography>
          <Typography variant="body1" display="block" gutterBottom className={style.footer2}>
            Something here to give the footer a purpose!
          </Typography>

          <Typography variant="body1" display="block" gutterBottom className={style.footer3}>
            Copyright © <a href="#">Your Website</a> 2023.
          </Typography>
        </div>

      </Container>

    </>
  )
}

export default App
