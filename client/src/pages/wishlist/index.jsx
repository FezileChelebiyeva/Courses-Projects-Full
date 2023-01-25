import React from "react";
import { useSelector } from "react-redux";
import "./index.scss";
const WishlistPage = () => {
  const course = useSelector((state) => state.course);
  return (
    <div id="wishlist">
      <div className="container">
        <div className="cards">
          {course.data?.map((element) => {
            return (
              <div className="card">
                <img src={element.image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
