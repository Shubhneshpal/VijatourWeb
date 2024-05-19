
import React, { useEffect, useState } from "react";
import "./Header.css"
import Select from "react-select";
import BackgroundImage from "../img/background-CXhjqumm.jpg"
import { useNavigate } from 'react-router-dom';
import { countries } from "../countries";

const Header = () => {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  // const [defaultLabel, setDefaultLabel] = useState("Please select a country");
  const navigate = useNavigate();

  useEffect(() => { 
    const countryOptions = countries.map(country => ({ label: country.name, value: country.id }));
    setCountryList(countryOptions);
  }, []);

  const handleCountrySelect = (selectedOption) => {    
    setSelectedCountry(selectedOption);
    navigate(`/visatour/${selectedOption.value}`);
  };

  return (
    <div className="Header">
      <div className="nav">
        <h1 style={{ color: "white", marginTop: "7px" }}>Visatour</h1>
      </div>
      <div className="main-content">
        <h2
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "2.85rem",
            margin: "8px 0px",
          }}
        >
          Get Your Visas Easily with Us
        </h2>
        <div className="buttons">
          <div className="dropdown-btn">
            <Select
              options={countryList}
              value={selectedCountry}
              onChange={handleCountrySelect}
              placeholder={'Please select a country'}
            />
          </div>
        </div>
      </div>
      <div className="image-section">
        <h2
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "1.5rem",
            margin: "30px 0px 8px 0px",
          }}
        >
          Get your tourist visa processed faster and easier by exploring our
          online store
        </h2>
        <div className="header_Img">
          <img src={BackgroundImage} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Header;

