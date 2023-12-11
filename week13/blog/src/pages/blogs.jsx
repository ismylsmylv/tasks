import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from '../components/Navbar';
import "../style/blogs.scss"
// import { getBlogs } from '../redux/adderSlice';
import { updateBlog, blogs, getBlogs } from '../redux/blogSlice';
import { deleteBlog } from '../redux/adderSlice';

import { useDispatch, useSelector } from 'react-redux';
function Blogs() {
    const blogs = useSelector((state) => state.blog.blogs)
    const dispatch = useDispatch()

    const [datas, setdatas] = useState([]);
    useEffect(() => {
        // axios("https://6576df5f197926adf62ca419.mockapi.io/bloglist").then(res => {

        //     setdatas(res.data)
        // })
        dispatch(getBlogs())
        // setdatas(blogs)
        // setdatas(updateBlog)
    }, []);
    console.log(blogs)
    return (
        <>
            <Navbar />
            <div className="blogs">
                <h3>Blogs</h3>
                <div className="blogList">

                    {

                        blogs.map((elem) => {
                            return <Card sx={{ width: 275 }} key={elem.id} className='card'>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {elem.id}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {elem.name}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        {elem.text}
                                    </Typography>

                                </CardContent>
                                <CardActions>
                                    <Button data-id={elem.id} size="small" onClick={(e) => {
                                        dispatch(deleteBlog(e.target.getAttribute("data-id")))
                                    }}>Delete</Button>
                                </CardActions>
                            </Card>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Blogs