import React from "react";
import "./SearchBooking.css";
import googlePlayIcon from "../../assets/SearchBooking/googleplay.png"; 
import appStoreIcon from "../../assets/SearchBooking/appstore.png"; 

const SearchBooking = () => {
  return (
    <div className="searchBooking">
      <div className="herocontainer">
        <div className="hero-subcontainer">
          <div className="filter"></div>
        </div>
      </div>
      <div className="leftSection">
        <h1>
          INDIA'S <span className="highlight">LEADING <br />ONE-WAY INTER-CITY <br /> </span> 
          CAB SERVICE PROVIDER
        </h1>
      </div>

      {/* Right Section */}
      <div className="rightSection">
        <div className="tripType">
          <button className="tripButton">Outstation</button>
          <button className="tripButton inactive">Local</button>
          <button className="tripButton inactive">Airport</button>
        </div>
        <div className="form">
          <button className="optionButton">One Way</button>
          <button className="optionButton inactive">Round Trip</button>
          <div className="inputGroup">
            <input type="text" placeholder="FROM" />
            <input type="text" placeholder="TO" />
          </div>
          <div className="inputGroup">
            <input type="text" placeholder="PICK UP DATE" />
            <input type="text" placeholder="PICK UP AT" />
          </div>
          <button className="exploreButton">EXPLORE CABS</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBooking;