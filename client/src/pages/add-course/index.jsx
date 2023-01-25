import React from "react";
import "./index.scss";
import { useFormik } from "formik";
import { courseSchema } from "./schema";
import { useDispatch } from "react-redux";
import { postData } from "../../redux/slice/courseDataSlice";
import { Helmet } from "react-helmet";

const AddCourse = () => {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, errors, values, touched, resetForm } =
    useFormik({
      initialValues: {
        image: "",
        name: "",
        title: "",
        author: "",
        authorImg: "",
        price: "",
      },
      validationSchema: courseSchema,
      onSubmit: (values) => {
        dispatch(postData(values));
        resetForm();
      },
    });

  return (
    <div id="add-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add Course</title>
      </Helmet>
      <div className="container">
        <div className="add-page">
          <div className="div">
            <div className="line"></div>
          </div>
          <h1>Add Course</h1>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="input">
                <input
                  id="image"
                  name="image"
                  type="text"
                  onChange={handleChange}
                  value={values.image}
                  placeholder="Image"
                />
                {errors.image && touched.image && (
                  <p className="error">{errors.image}</p>
                )}
              </div>
              <div className="input">
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={values.name}
                  placeholder="Course Name"
                />
                {errors.name && touched.name && (
                  <p className="error">{errors.name}</p>
                )}
              </div>

              <div className="input">
                <input
                  id="title"
                  name="title"
                  type="text"
                  onChange={handleChange}
                  value={values.title}
                  placeholder="Course Title"
                />
                {errors.title && touched.title && (
                  <p className="error">{errors.title}</p>
                )}
              </div>

              <div className="input">
                <input
                  id="author"
                  name="author"
                  type="text"
                  onChange={handleChange}
                  value={values.author}
                  placeholder="Course Author"
                />
                {errors.author && touched.author && (
                  <p className="error">{errors.author}</p>
                )}
              </div>

              <div className="input">
                <input
                  id="authorImg"
                  name="authorImg"
                  type="text"
                  onChange={handleChange}
                  value={values.authorImg}
                  placeholder="Course Author Image"
                />
                {errors.authorImg && touched.authorImg && (
                  <p className="error">{errors.authorImg}</p>
                )}
              </div>

              <div className="input">
                <input
                  id="price"
                  name="price"
                  type="number"
                  onChange={handleChange}
                  value={values.price}
                  placeholder="Course Price"
                />
                {errors.price && touched.price && (
                  <p className="error">{errors.price}</p>
                )}
              </div>

              <div className="btn">
                <button type="submit">Add Course</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
