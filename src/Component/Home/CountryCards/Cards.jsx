import React from "react";
import "./card.css";
import CardMedia from "@mui/material/CardMedia";
// import Argentina from "../../img/argentina.jpg";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { Link } from "react-router-dom";
import { countries } from "../../countries";

const Cards = () => {
  return (
<div className="card_container">
  <div className="row">
    {countries.map((country) => (
      <div className="col-lg-4 col-md-12" key={country.id}>
        <Link to={`/visatour/${country.id}`}>
          <div className="card">
            <div className="card-img">
              <h3 className="img-content">Visa Response by {country.date.toString()}</h3>
              {/* <img src={country.pic} alt="cardimg" /> */}
              <CardMedia
                    image={country.pic}
                    component="img"
                    loading="lazy"
                  />
            </div>
            <div className="card_content">
              <div className="country">{country.name}</div>
              <div className="price">
                <p>Price</p>
                <MdOutlineCurrencyRupee /> {country.price}
              </div>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </div>
</div>
  );
};

export default Cards;
