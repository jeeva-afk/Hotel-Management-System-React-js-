import { Link } from "react-router-dom";
import "../Assetts/Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <br></br>
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districts</li>
          <li className="fListItem">Airports</li>
          <li className="fListItem">Hotels</li>
        </ul>
        <ul className="fList">
          <br></br>
          <li className="fListItem">Homes </li>
          <li className="fListItem">Apartments </li>
          <li className="fListItem">Resorts </li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Hostels</li>
          <li className="fListItem">Guest houses</li>
        </ul>
        <ul className="fList">
          <br></br>
          <h1>Contact us</h1><br></br>
          <li className="fListItem">+91 9345689346</li>
          <li className="fListItem">HotelManage@gmail.com</li>
          <li className="fListItem">For more information<b></b>Vist our app</li>
        </ul>
       
        <ul className="fList">
          <br></br>
          
          <h2>FAQs</h2>
      
         <Link to='/Privacy'> <li className="fListItem">Privacy Policy</li></Link>
         
          <li className="fListItem">Contact Information</li>
        
          <li className="fListItem">Terms & Conditions</li>
     
        </ul>
      
        <ul className="fList socialIcons">
          <br></br>
        <h2>Social Media</h2>
          <li className="fListItem">
            <a href="link-to-facebook">
              <FaFacebook /> 
            </a>
          </li>
          <li className="fListItem">
            <a href="https://twitter.com/hotelsdotcom">
              <FaTwitter />
            </a>
          </li>
          <li className="fListItem">
            <a href="link-to-instagram">
              <FaInstagram />
            </a>
          </li>
         
        </ul>
      </div>
      <div className="fText">Copyright © 2022 Lamabooking.</div>
    </div>
  );
};

export default Footer;