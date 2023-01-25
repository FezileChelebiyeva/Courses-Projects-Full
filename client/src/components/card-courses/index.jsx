import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, getData } from "../../redux/slice/courseDataSlice";
import "./index.scss";
import { addCourse, removeCourse } from "../../redux/slice/wishlistSlice";
const CoursesCard = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);
  const course = useSelector((state) => state.course);
  const [sort, setSort] = useState(true);
  useEffect(() => {
    dispatch(getData(""));
  }, []);

  const handleSort = () => {
    setSort(!sort);

    sort ? dispatch(getData(1)) : dispatch(getData(""));
  };
  return (
    <div id="course-card">
      <div className="container">
        <div className="course-card">
          <div className="div">
            <div className="line"></div>
          </div>
          <h1>Popular Courses</h1>
          <div className="search-sort">
            <input
              type="text"
              placeholder="Search course..."
              onChange={(e) => dispatch(getData(e.target.value))}
            />
            <button onClick={() => handleSort()}>Sort By Price</button>
          </div>
          <div className="cards">
            {courses.data?.map((element) => {
              return (
                <div key={element._id} className="card">
                  <Link to={`/${element._id}`}>
                    <div className="img">
                      <img src={element.image} alt="" />
                    </div>
                  </Link>
                  <div className="about">
                    <h3>{element.name}</h3>
                    <p>{element.title}</p>
                  </div>
                  {course.data.find((el) => el._id === element._id) ? (
                    <div
                      onClick={() => dispatch(removeCourse(element._id))}
                      className="icon"
                    >
                      <i class="fa-solid fa-heart"></i>
                    </div>
                  ) : (
                    <div
                      onClick={() => dispatch(addCourse(element))}
                      className="icon"
                    >
                      <i className="fa-regular fa-heart"></i>
                    </div>
                  )}

                  <div className="btn">
                    <button
                      onClick={() =>
                        dispatch(deleteData(element._id)).then(() =>
                          dispatch(getData())
                        )
                      }
                    >
                      Delete Course
                    </button>
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
