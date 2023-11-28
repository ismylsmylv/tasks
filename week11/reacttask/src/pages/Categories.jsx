import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

function Categories() {
    const [datas, setdatas] = useState([]);
    useEffect(() => {
        axios("https://6565f015eb8bb4b70ef29ee3.mockapi.io/categories").then(res => {
            // axios("../assets/db.json").then(res => {
            console.log(res.data)
            setdatas(res.data)
        })
    }, []);


    return (
        <>
            <div className="row">

                {
                    datas.map(elem => {
                        return <Card className="card" sx={{ minWidth: 275 }} key={uuidv4()}>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {elem.id}
                                </Typography>
                                <Typography variant="h4" component="div">
                                    {elem.name}
                                </Typography>
                                <Typography variant="h6" component="div">
                                    {elem.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" size="medium" type="submit"><Link to={`/CategoryDetail/${elem.id}`}>Details</Link></Button>
                            </CardActions>
                        </Card>
                    })
                }


            </div>

        </>
    )
}

export default Categories