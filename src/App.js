import React from "react";
import "./App.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar } from "swiper";
let courses = [
  {
    id: 1,
    link: "https://www.udemy.com/course/pythonforbeginners/",
    title: "Learn Python: The Complete Python Programming Course",
    author: "Avinash Jain,The Codex",
    image: "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
    price: "679.99",
    rating: 4.4,
    people: "2,948",
  },
  {
    id: 2,
    link: "https://www.udemy.com/course/learning-python-for-data-analysis-and-visualization/",
    title: "Learning Python for Data Analysis and Visualization",
    author: "Jose Portilla",
    image: "https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg",
    price: "1,599.99",
    rating: 4.4,
    people: "17,999",
  },
  {
    id: 3,
    link: "https://www.udemy.com/course/python-for-beginners-learn-programming-from-scratch/",
    title: "Python for Beginners - Learn Programming from scratch",
    author: "Edwin Diaz, Coding FAcutly Solutaions",
    image: "https://img-c.udemycdn.com/course/240x135/405878_e5a0_3.jpg",
    price: "679.99",
    rating: 4.4,
    people: "1,781",
  },
  {
    id: 4,
    link: "https://www.udemy.com/course/learn-python/",
    title: "Learn Python: Python for Beginners",
    author: "Abrar Hussain",
    image: "https://img-c.udemycdn.com/course/240x135/426570_1b91_3.jpg",
    price: "319.99",
    rating: 4.3,
    people: "2,773",
  },
  {
    id: 5,
    link: "https://www.udemy.com/course/python-beyond-the-basics-object-oriented-programming/",
    title: "Python Beyond the Basics - Object-Oriented Programming",
    author: "Infinite Skills",
    image: "https://img-c.udemycdn.com/course/480x270/449532_2aa9_7.jpg",
    price: "519.99",
    rating: 4.4,
    people: "2,930",
  },
  {
    id: 6,
    link: "https://www.udemy.com/course/selenium-webdriver-and-python/",
    title: "Python From Scratch & Selenium WebDriver QA Automation 2022",
    author: "Admas Kinfu",
    image: "https://img-c.udemycdn.com/course/480x270/482754_7146_6.jpg",
    price: "1,299.99",
    rating: 4.7,
    people: "1,813",
  },
  {
    id: 7,
    link: "https://www.udemy.com/course/teach-your-kids-to-code/",
    title: "Teach Your Kids to Code: Learn to Program Python at Any Age!",
    author: "Bryson Payne",
    image: "https://img-c.udemycdn.com/course/480x270/519554_da68_6.jpg",
    price: "319.99",
    rating: 4.5,
    people: "8,809",
  },
  {
    id: 8,
    link: "https://www.udemy.com/course/python-for-data-structures-algorithms-and-interviews/",
    title: "Python for Data Structures, Algorithms, and Interviews!",
    author: "Jose Portilla",
    image: "https://img-c.udemycdn.com/course/480x270/535622_3bc0.jpg",
    price: "1,299.99",
    rating: 4.5,
    people: "10.701",
  },
  {
    id: 9,
    link: "https://www.udemy.com/course/automate/",
    title: "Automate the Boring Stuff with Python Programming",
    author: "Al Sweigart",
    image: "https://img-c.udemycdn.com/course/480x270/543600_64d1_4.jpg",
    price: "519.99",
    rating: 4.7,
    people: "101,703",
  },
  {
    id: 10,
    link: "https://www.udemy.com/course/complete-python-bootcamp/",
    title: "2022 Complete Python Bootcamp From Zero to Hero in Python",
    author: "Jose Portilla",
    image: "https://img-c.udemycdn.com/course/480x270/567828_67d0.jpg",
    price: "729.99",
    rating: 4.6,
    people: "427,994",
  },
  {
    id: 11,
    link: "https://www.udemy.com/course/learning-python-for-data-analysis-and-visualization/",
    title: "Learning web development",
    author: "Jose Portilla",
    image: "https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg",
    price: "1,599.99",
    rating: 4.4,
    people: "17,999",
  },
];

function Cards(props) {
  props = props.props;
  let cs = props.courses;

  let st = {
    fontSize: "large",
    fontWeight: "bolder",
  };
  let heading = <p style={st}>{props.title}</p>;
  let description = <p id="coursesP2">{props.desc}</p>;
  let explore = <button id="explore_course">Explore</button>;

  function Ss() {
    return courses.map((e) => {
      return(
        <SwiperSlide>
          <Card props={e}/>
        </SwiperSlide>
      );
    });
  }
  let coursesContainer = (
    <Swiper className="mySwiper" modules={[Navigation, Pagination]}  spaceBetween={10} slidesPerView={5} navigation       pagination={{ clickable: true }}>
      {Ss()}
    </Swiper>
  );
  let container = (
    <div id="main_courses">
      {heading}
      {description}
      {explore}
      {coursesContainer}
      </div>

  );
  return container;
}
function Card(props) {
  props = props.props;
  let image = <img src={props.image} />;

  let st = {
    fontSize: "small",
    fontWeight: "lighter",
  };
  let author = <p style={st}>{props.author}</p>;
  let title = <p>{props.title}</p>;
  let score = <span style={{ color: "gold" }}>{props.rating}</span>;
  let people = <span style={{ color: "grey" }}>( {props.people} )</span>;

  st = {
    fontWeight: "bolder",
    fontSize: "large",
  };
  let price = <p style={st}>${props.price}</p>;
  let card = (
    <a href={props.link} className="course_card">
      {image}
      {title}
      {author}
      {score}
      {people}
      {price}
    </a>
  );

  let c = <div className="card">{card}</div>;
  return c;
}
function App() {
  let cards = (
    <Cards
      props={{
        courses: courses,
        title: "Expand your career opportunities with Python",
        desc: "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to.",
      }}
    />
  );

  return cards;
}

export default App;
