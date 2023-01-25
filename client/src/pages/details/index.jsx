import React from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
const DetailsPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const getDataById = async () => {
    const response = await axios.get(`http://localhost:8080/courses/${id}`);
    setCourse(response.data);
  };
  useEffect(() => {
    getDataById();
  }, []);
  return (
    <div id="details">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{course.name}</title>
      </Helmet>
      <div className="container">
        <div className="details">
          <div className="img">
            <img src={course.image} alt="" />
          </div>
          <div className="info">
            <h2>{course.name}</h2>
            <p>{course.title}</p>
            <img src={course.authorImg} alt="" />
            <p>{course.author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
