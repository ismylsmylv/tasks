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
import { updateBlog, blogs, getBlogs, sortBlog, searchBlog } from '../redux/blogSlice';
import { deleteBlog, editBlog, editNameR, editTextR, search } from '../redux/adderSlice';

import { useDispatch, useSelector } from 'react-redux';
function Blogs() {
    let blogs = useSelector((state) => state.blog.blogs)
    let sortBlogs = []
    const dispatch = useDispatch()
    const [edit, setedit] = useState(false);
    const [datas, setdatas] = useState([]);
    const [editName, seteditName] = useState("");
    const [editText, seteditText] = useState("");
    const [editId, seteditId] = useState(0);
    const [searchInp, setsearchInp] = useState("");
    const [searchData, setsearchData] = useState([]);
    const [editElem, seteditElem] = useState([]);
    useEffect(() => {
        dispatch(getBlogs());
        setdatas(blogs);
        console.log("datas", datas)
        console.log("blogs", blogs)
    }, []);
    // console.log(blogs)
    blogs && (blogs.map(elem => {
        sortBlogs.push(elem)
        searchData.push(elem)

    }))
    return (
        <>
            <Navbar />
            <div className="blogs">
                {/* search */}
                <div className="searchBar">
                    <input type="text" placeholder='Search by name' onChange={(e) => {
                        setsearchInp(e.target.value)
                    }} />
                    <button onClick={() => {
                        // setdatas(datas.filter(elem => elem.name.includes(searchInp)))
                        dispatch(searchBlog(searchInp))
                    }}>Search</button>
                </div>
                {/* sorting */}
                <button onClick={() => {
                    // console.log("sort")
                    dispatch(sortBlog())
                    // sortBlogs = sortBlogs.sort(function (a, b) {
                    //     if (a.name < b.name) {
                    //         return -1;
                    //     }
                    //     if (a.name > b.name) {
                    //         return 1;
                    //     }
                    //     return 0;
                    // });
                    // setdatas(sortBlogs)

                    // console.log(sortBlogs)

                }}>Sort by name</button>
                <h3>Blogs</h3>
                {
                    edit && (
                        <div className='editor'>
                            <form action="">
                                <h1>Edit a blog</h1>
                                <input type="text" placeholder='Blog name' value={editName} onChange={(e) => {
                                    seteditName(e.target.value)
                                    dispatch(editNameR(e.target.value))
                                }} />
                                <input type="text" placeholder='Text' value={editText} onChange={(e) => {
                                    seteditText(e.target.value)
                                    dispatch(editTextR(e.target.value))
                                }} />
                                <button type='submit' onClick={(e) => {
                                    e.preventDefault()
                                    let editObj = {
                                        name: editName,
                                        text: editText,
                                        id: editId
                                    }
                                    dispatch(editBlog(editObj))
                                    seteditName("")
                                    seteditText("")
                                    setedit(false)
                                    axios("https://6576df5f197926adf62ca419.mockapi.io/bloglist").then(
                                        res => {
                                            setdatas(res.data)
                                        }
                                    )
                                    // dispatch(getBlogs())
                                    // setdatas(blogs)
                                }}>Edit</button>



                            </form>
                        </div>
                    )
                }

                <div className="blogList">
                    {
                        blogs && (
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
                                            sortBlogs = datas.filter(element => {
                                                element.id != elem.id
                                            })
                                            setdatas(datas.filter(element => element.id !== editId))

                                        }}>Delete</Button>
                                        <Button data-id={elem.id} size="small" onClick={(e) => {
                                            seteditId(e.target.getAttribute("data-id"))
                                            setedit(true)
                                            console.log(editId)
                                            seteditName(elem.name)
                                            seteditText(elem.text)

                                        }}>Edit</Button>
                                    </CardActions>
                                </Card>
                            })
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Blogs