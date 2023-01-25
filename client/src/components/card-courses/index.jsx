import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/slice/courseDataSlice";
import "./index.scss";
const CoursesCard = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div id="course-card">
      <div className="container">
        <div className="course-card">
          <div className="div">
            <div className="line"></div>
          </div>
          <h1>Popular Courses</h1>
          <div className="cards">
            {courses.data?.map((element) => {
              return (
                <div className="card">
                  <div className="img">
                    <img src={element.image} alt="" />
                  </div>
                  <div className="about">
                    <h3>{element.name}</h3>
                    <p>{element.title}</p>
                  </div>
                  <div className="author">
                    <div className="authorName">
                      <div className="img">
                        <img src={element.authorImg} alt="" />
                      </div>
                      <h4>
                        {element.author}, <span>Author</span>
                      </h4>
                    </div>
                    <div className="price">
                      <p>${element.price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
