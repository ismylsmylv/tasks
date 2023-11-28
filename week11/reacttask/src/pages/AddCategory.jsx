import Button from '@mui/material/Button';
import axios from 'axios';
import { Formik } from 'formik';
import React from 'react';
import { useNavigate } from "react-router-dom";
function AddCategory() {
    const navigate = useNavigate();
    return (
        <>
            <Formik
                initialValues={{ name: '', desc: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Required';
                    } else if (
                        // !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.name)
                        values.name.length < 3 || values.name.length > 10
                    ) {
                        errors.name = 'Max 10, min 3 characters only';
                    }
                    if (!values.desc) {
                        errors.desc = 'Required';
                    } else if (
                        !/^[a-zA-Z]+$/.test(values.desc)
                    ) {
                        errors.desc = 'Only alphabetical symbols';
                    }
                    else if (
                        values.desc.length < 6
                    ) {
                        errors.desc = 'At least 5 symbols';
                    }
                    return errors;

                }}
                onSubmit={(values, { setSubmitting }) => {
                    // setTimeout(() => {
                    // alert(JSON.stringify(values, null, 2));
                    alert(`${values.name} and ${values.desc} added to categories`);
                    setSubmitting(false);
                    // }, 400);
                    console.log(values)
                    axios.post("https://6565f015eb8bb4b70ef29ee3.mockapi.io/categories/", {
                        name: values.name,
                        description: values.desc
                    }).then(() => {
                        navigate("/Categories")
                    })



                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <h2>Add Category</h2>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        {errors.name && touched.name && errors.name}
                        <input
                            type="text"
                            name="desc"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.desc}
                        />
                        {errors.desc && touched.desc && errors.desc}
                        <Button variant="contained" size="medium" type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>

                    </form>
                )}
            </Formik>

        </>
    )
}

export default AddCategory