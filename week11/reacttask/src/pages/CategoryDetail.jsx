import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



function CategoryDetail() {
    const [elem, setelem] = useState([]);
    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        axios("https://6565f015eb8bb4b70ef29ee3.mockapi.io/categories/" + id).then(res => {
            // axios("../assets/db.json").then(res => {
            console.log(res.data)
            setelem(res.data)
        })
    }, []);
    return (
        <>
            <Card className="card" sx={{ minWidth: 275 }}>
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
            </Card>

        </>
    )
}

export default CategoryDetail