import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./visaApply.css";
import Header from "../Home/Header";
import DatePicker from "react-datepicker";
import Accordion from "react-bootstrap/Accordion";
// import {validateFormRegister} from "../../util/validation.js"
import "react-datepicker/dist/react-datepicker.css";
import { countries } from "../countries";
import CardMedia from "@mui/material/CardMedia";
// import { Link } from "react-router-dom";
import { FaHandPointRight } from "react-icons/fa";
// import Modal from "react-bootstrap/Modal";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
import Form from "react-bootstrap/Form";
import Regiter from "../StartApplication/Register/Regiter.jsx";
import LoginForm from "../StartApplication/Login/LoginForm.jsx";

const VisaApplyPage = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(19000);
  const [futureDate, setFutureDate] = useState(null);
  const [country, setCountry] = useState(null);
  const [show, setShow] = useState(false);
  const [logShow, setLogShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleCloseLog = () => {
    setLogShow(false);
  };
  const handleShow = () => {
    setShow(true);
    setLogShow(false);
  };
  const handleLogShow = () => {
    setShow(false); // Close register modal when opening login modal
    setLogShow(true);
  };

  useEffect(() => {
    const selectedCountry = countries.find(
      (country) => country.id === parseFloat(id)
    );
    setCountry(selectedCountry);
  }, [id]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const futureDate = new Date(date);
    futureDate.setDate(futureDate.getDate() + 30);
    setFutureDate(futureDate);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="ViaApply_Header">
        <Header />
      </div>
      {country && (
        <div className="main-wrapper-visaPage">
          <div className="CountryName">{country.name}</div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 ">
                <div className="collumPadding">
                  <div className="card visaCard1">
                    <div className="card-img">
                      <h3 className="img-content">{country.tag}</h3>
                      <CardMedia
                        image={process.env.PUBLIC_URL + country.pic}
                        component="img"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="Accordian_Box">
                    <div className=" visaCard_content">
                      <p>
                        <span>Notice:</span> {country.notice}
                      </p>
                      <h4>Documents required</h4>
                    </div>
                    <div className="accordian11">
                      <Accordion defaultActiveKey={["0"]}>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                            Passport Information
                          </Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                    <div className="accordian22">
                      <Accordion defaultActiveKey={["0"]}>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>Photo Info</Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="collumPadding">
                  <div className="heading55">
                    <h5>Please Select a Date</h5>
                    <hr className="border_bottom" />
                  </div>
                  <div className="datePIcker">
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      inline
                    />
                  </div>

                  <div className="slectDate001">
                    <hr className="border_top" />
                    <h4>Your Selected Date</h4>
                    <h6>
                      {selectedDate ? (
                        <span className="placeholder-text">
                          Date:-
                          {new Intl.DateTimeFormat("en-GB", {
                            year: "numeric",
                            month: "short",
                            day: "2-digit",
                          }).format(selectedDate)}
                        </span>
                      ) : (
                        <span className="placeholder-text">
                          {new Intl.DateTimeFormat("en-GB", {
                            year: "numeric",
                            month: "short",
                            day: "2-digit",
                          }).format(new Date())}
                        </span>
                      )}{" "}
                    </h6>
                    <hr className="border_bottom" />
                  </div>

                  <div className="">
                    {/* <hr className="border_top" /> */}
                    <div className="incree-decreeButton ">
                      <h4 className="quantity_text mr-5">
                        Choose your capacity:
                      </h4>
                      <span className="quantity-picker">
                        <button onClick={handleDecrement}>-</button>
                        <span>{quantity}</span>
                        <button onClick={handleIncrement}>+</button>
                      </span>
                    </div>
                    <hr className="border_top" />
                  </div>

                  <div className="visa_colorBox">
                    <div className="cost122">
                      <h5>Your Visa in just </h5>
                      <h5>
                        <FaRupeeSign /> {country.price * quantity}
                      </h5>
                    </div>
                    <hr className="border_bottom01" />
                    <div>
                      <p>
                        Minimum cost from $1,848.96 plus your chosen plan costs
                        over 36 months. Price may increase annually in July by
                        CPI.
                      </p>
                    </div>
                  </div>

                  <hr className="border_top" />
                  <div className="slectDate25">
                    <h4>Visa Response Date:-</h4>
                    <h6>
                      <span className="placeholder-text">
                        Date:-
                        {futureDate
                          ? new Intl.DateTimeFormat("en-GB", {
                              year: "numeric",
                              month: "short",
                              day: "2-digit",
                            }).format(futureDate)
                          : ""}
                      </span>
                    </h6>
                  </div>
                  <hr className="border_bottom" />

                  <div className="slectDate25">
                    <h4>
                      <MdOutlineVerifiedUser /> Upgrade & Protect{" "}
                    </h4>
                    <div className="checkTotalAmount">
                      <Form.Check aria-label="option 1" />
                      <label htmlFor="#" className="labeCheck">
                        Check Minimum Amount
                      </label>
                    </div>
                  </div>
                  <hr className="border_bottom" />

                  <div className="btn55">
                    <button variant="primary" onClick={handleShow}>
                      Start Application <FaHandPointRight className="hand" />{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Register_Modal">
            <Regiter
              show={show}
              handleClose={handleClose}
              handleLogShow={handleLogShow}
            />
          </div>

          {/* LoginForm Modal */}
          <div className="Login_Modal">
            <LoginForm
              logShow={logShow}
              handleShow={handleShow}
              handleCloseLog={handleCloseLog}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VisaApplyPage;
