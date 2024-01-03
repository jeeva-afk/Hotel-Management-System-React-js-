import React from "react";
import '../Assetts/LandingPage.css';
import { SlCalender } from "react-icons/sl";
import { FaHome, FaUser, FaPhone,FaMapMarkerAlt,} from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineDiscount } from "react-icons/md";
import { MdBedroomParent } from "react-icons/md";
import { IoBed } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import { IoIosPin } from "react-icons/io";
import Footer from "./Footer";
import hotel1 from "../Assetts/hotel1.jpeg";
import hotel2 from "../Assetts/hotel2.jpeg";
import hotel3 from "../Assetts/hotel3.jpg";
import hotel4 from "../Assetts/hotel4.jpeg";
import hotel5 from "../Assetts/hotel5.jpg";
import hotel6 from "../Assetts/hotel6.jpg";

const hotels = [
  { name: "Four Seasons Resort", description: " Nestled on the turquoise waters of the Pacific.", location: "French Polynesia", imageUrl: hotel1, rating: "Rating 9.7" },
  { name: "Aman Tokyo ", description: "Aman Tokyo offers unparalleled views of Tokyo's skyline..", location: " Tokyo, Japan", imageUrl: hotel2, rating: "Rating 9.5" },
  { name: "The Ritz-Carlton", description: " An opulent palace-style hotel with grand architecture.", location: "Riyadh, Saudi Arabia", imageUrl: hotel3, rating: "Rating 8.5" },
  { name: "The Peninsula ", description: "The Peninsula combines old-world charm with modern luxury.", location: " Hong Kong, China", imageUrl: hotel4, rating: "Rating 8.5" },
  { name: "La Mamounia", description: " Surrounded by lush gardens, it features intricate Moorish architecture.", location: " Marrakech, Morocco", imageUrl: hotel5, rating: "Rating 8.5" },
  { name: "The Plaza Hotel ", description: "he Plaza is an iconic symbol of luxury in NYC.", location: "New York City, USA", imageUrl: hotel6, rating: "Rating 8.5" },

];

const LandingPage = () => {
  return (
    <div className="landingbody">
      <nav className="navbar">
        <a href="#" className="logo">HOTELS<IoBed /></a>
        <div className="nav-links">
          <ul className="nav-list">
            <li className="home"><FaHome />Home</li>
        <Link to='/Aboutus'> <li className="about"><FaUser />About Us</li></Link>   
        <Link to='/Contact'>   <li className="contact"><FaPhone />Contact</li></Link>
            <li className="cart"><MdBedroomParent />Rooms</li>
          </ul>
        </div>
        <div className="auth-links">
          <Link to='/Login'>
            <button className="btn">Login</button>
          </Link>
          <Link to='/Signup'>
            <button className="btn">Sign Up</button>
          </Link>
        </div>
      </nav>
      <div class="flexContainer">
  <div class="flexItem">
    <p className="pa"><h3>Find and book your <br></br>perfect stay</h3> </p>
  </div>
  <div class="flexItem">
    <p className="hi"><IoMoonOutline />Earn rewards on every night you stay</p>
  </div>
  <div class="flexItem">
    <p className="hi1"><MdOutlineDiscount/>Save more with <br/>Member Prices</p>
  </div>
  <div class="flexItem">
    <p className="hi"><SlCalender />Free cancellation options <br/>if plans change</p>
  </div>
</div>


<div class="button-container">
    <button class="butt"><FaMapMarkerAlt />Where are you going?</button>
    <input type="date" class="date-input" placeholder="Date of Booking" />
    <input type="number" class="count-input" placeholder="Members" />
    <button class="butt1">Search</button>
  </div>



<header className="showcase">
          <h1>Hotels</h1>
          <p>
          <h2>Live the good life at this luxurious hotel!</h2>
          </p>
        </header>
      <div className="homepage">
        <header className="header">
          <h1>Welcome</h1>
          <h3>Discover the best hotels for your next stay.</h3>
        </header>

        <section className="featured-hotels">
          {hotels.map((hotel, index) => (
            <div key={index} className="hotel-container">
              <img src={hotel.imageUrl} alt={hotel.name} />
              <h2 className="names">{hotel.name}</h2>
              <h4 className="names">{hotel.description}</h4>
              <h3 className="names"><IoIosPin />{hotel.location}</h3>
              <h3 className="names"><FcRating />{hotel.rating} </h3>
              <button>Book Now</button>
              <br></br><br></br>
            </div>
          ))}
        </section>
       
       <Footer/>
       

      </div>
    </div>
  );
}

export default LandingPage;
