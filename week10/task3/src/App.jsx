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
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import './App.css';
import style from "./style.module.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function App() {

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
          <Typography variant="body1" gutterBottom >

            Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
          </Typography>
          {/* btns */}
          <div className={style.btns}>
            <Button variant="contained" className={style.btnLeft}>MAIN CALL TO ACTION</Button>
            <Button variant="outlined">SECONDARY ACTION</Button>

          </div>


        </div>


        {/* cards */}
        {/* <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item sm={12} xl={3} lg={6}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZL4e2JTU_z5YgSah6_2HS91AEh1gOoSeLbcXZFcnUskAbgM3h"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item sm={12} xl={3} lg={6}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZL4e2JTU_z5YgSah6_2HS91AEh1gOoSeLbcXZFcnUskAbgM3h"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item sm={12} xl={3} lg={6}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZL4e2JTU_z5YgSah6_2HS91AEh1gOoSeLbcXZFcnUskAbgM3h"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item sm={12} xl={3} lg={6}>
             
            </Grid>
            <Grid item sm={12} xl={3} lg={6}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZL4e2JTU_z5YgSah6_2HS91AEh1gOoSeLbcXZFcnUskAbgM3h"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item sm={12} xl={3} lg={6}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZL4e2JTU_z5YgSah6_2HS91AEh1gOoSeLbcXZFcnUskAbgM3h"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box> */}

        <div style={{ display: "flex", flexWrap: "wrap", width: "100%", margin: "0 auto", gap: "10px", justifyContent: "center" }} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZL4e2JTU_z5YgSah6_2HS91AEh1gOoSeLbcXZFcnUskAbgM3h"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZL4e2JTU_z5YgSah6_2HS91AEh1gOoSeLbcXZFcnUskAbgM3h"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZL4e2JTU_z5YgSah6_2HS91AEh1gOoSeLbcXZFcnUskAbgM3h"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZL4e2JTU_z5YgSah6_2HS91AEh1gOoSeLbcXZFcnUskAbgM3h"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZL4e2JTU_z5YgSah6_2HS91AEh1gOoSeLbcXZFcnUskAbgM3h"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZL4e2JTU_z5YgSah6_2HS91AEh1gOoSeLbcXZFcnUskAbgM3h"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
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
