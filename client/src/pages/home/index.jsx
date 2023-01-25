import React from "react";
import "./index.scss";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CoursesCard from "../../components/card-courses";
import icon1 from "../../assets/image/icon6.svg";
import icon2 from "../../assets/image/icon5.svg";
import icon3 from "../../assets/image/icon4.svg";
import icon4 from "../../assets/image/icon3.svg";
import icon5 from "../../assets/image/icon2.svg";
import icon6 from "../../assets/image/icon1.svg";
import image1 from "../../assets/image/event_1.jpg.webp";
import image2 from "../../assets/image/event_2.jpg.webp";
import image3 from "../../assets/image/event_3.jpg.webp";
const HomePage = () => {
  return (
    <div id="home">
      <section id="section-first">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={0}
          navigation
        >
          <SwiperSlide>
            <div className="slider">
              <h1>
                Get Your <span>Education</span> today!
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider">
              <h1>
                Get Your <span>Education</span> today!
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <CoursesCard />
      <section id="register">
        <div className="left">
          <div className="container">
            <div className="text">
              <h1>
                Register now and get a discount <span>50%</span> discount until
                1 January
              </h1>
              <p>
                In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante
                nisl fermentum nulla, vitae tempo.
              </p>
              <button>REGISTER NOW</button>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="container">
            <div className="form">
              <h1>Search for your course</h1>
              <form action="">
                <div className="input">
                  <input placeholder="Course Name" type="text" />
                </div>
                <div className="input">
                  <input placeholder="Category" type="text" />
                </div>
                <div className="input">
                  <input placeholder="Degree" type="text" />
                </div>
                <div className="btn">
                  <button>SEARCH COURSE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section id="services">
        <div className="container">
          <div className="services">
            <div className="div">
              <div className="line"></div>
            </div>
            <h1>Our Services</h1>
            <div className="cards">
              <div className="top">
                <div className="card">
                  <img src={icon1} alt="" />
                  <h2>Online Courses</h2>
                  <p>
                    In aliquam, augue a gravida rutrum, ante nisl fermentum
                    nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                    malesuada, finibus tortor fermentum.
                  </p>
                </div>
                <div className="card">
                  {" "}
                  <img src={icon2} alt="" />
                  <h2>Indoor Courses</h2>
                  <p>
                    In aliquam, augue a gravida rutrum, ante nisl fermentum
                    nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                    malesuada, finibus tortor fermentum.
                  </p>
                </div>
                <div className="card">
                  {" "}
                  <img src={icon3} alt="" />
                  <h2>Amazing Library</h2>
                  <p>
                    In aliquam, augue a gravida rutrum, ante nisl fermentum
                    nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                    malesuada, finibus tortor fermentum.
                  </p>
                </div>
              </div>
              <div className="bottom">
                <div className="card">
                  {" "}
                  <img src={icon4} alt="" />
                  <h2>Exceptional Professors</h2>
                  <p>
                    In aliquam, augue a gravida rutrum, ante nisl fermentum
                    nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                    malesuada, finibus tortor fermentum.
                  </p>
                </div>
                <div className="card">
                  {" "}
                  <img src={icon5} alt="" />
                  <h2>Top Programs</h2>
                  <p>
                    In aliquam, augue a gravida rutrum, ante nisl fermentum
                    nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                    malesuada, finibus tortor fermentum.
                  </p>
                </div>
                <div className="card">
                  {" "}
                  <img src={icon6} alt="" />
                  <h2>Graduate Diploma</h2>
                  <p>
                    In aliquam, augue a gravida rutrum, ante nisl fermentum
                    nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                    malesuada, finibus tortor fermentum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="events">
        <div className="container">
          <div className="events">
            <div className="div">
              <div className="line"></div>
            </div>
            <h1>Upcoming Events</h1>
            <div className="cards">
              <div className="card">
                <div className="date">
                  <h1>07</h1>
                  <h1>January</h1>
                </div>
                <div className="text">
                  <h1>Student Festival</h1>
                  <p>Grand Central Park</p>
                  <p>
                    In aliquam, augue a gravida rutrum, ante nisl fermentum
                    nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                    malesuada, finibus tortor.
                  </p>
                </div>
                <div className="img">
                  <img src={image1} alt="" />
                </div>
              </div>
              <div className="card"></div>
              <div className="card"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
