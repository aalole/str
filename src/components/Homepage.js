import React from "react";
import BrandImage from "../images/brand.png";
import '../App.css'

const Homepage = () => {
  return (
    <div className="home-wrapper">
      <div className="landing-image">
        <img src={BrandImage} alt="brand" />{" "}
      </div>
      <div className="landing-text">
          <h1 className="landing-strategex">trategex</h1>
        <h4>Strategex</h4>
        <div className="landing-coming-soon"> 
          <h3>Strategy Management</h3>
          <h3>Software Coming Soon!</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          facilisis viverra magna quis congue. Nam posuere et massa sed
          scelerisque. Nam eget imperdiet est. Quisque feugiat et nibh eu
          consectetur.
        </p>
        <form>
          <input type="email" placeholder="Enter your mail" required />
          <button type="submit" id='notify-me'>
              Get Notified
            <i className="fas fa-arrow-right"></i>{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Homepage;
