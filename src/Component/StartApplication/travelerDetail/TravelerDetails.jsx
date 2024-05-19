import React, { useState } from "react";
import "./TravelerDetails.css";
import { Stepper, Step } from "react-form-stepper";
import { IoMdAddCircle } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import { RiInformation2Line } from "react-icons/ri";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { MdPadding } from "react-icons/md";

const TravelerDetails = () => {
  const navigate = useNavigate();
  const [travelers, setTravelers] = useState([
    {
      fName: "",
      lName: "",
      email: "",
      ContactNo: "",
      dob: "",
      passportNo: "",
      expectedDate: "",
    },
  ]);
  const [count, setCount] = useState(1);

  const [info, setInfo] = useState({
    fName: "",
    lName: "",
    email: "",
    ContactNo: "",
    dob: "",
    passportNo: "",
    expectedDate: "",
  });
  // console.log(info);

  // datepicker onchange
  const DobHandlechange = (date, index) => {
    const newTravelers = [...travelers];
    newTravelers[index].dob = date;
    setTravelers(newTravelers);

    setInfo((prevInfo) => ({
      ...prevInfo,
      dob: date,
    }));
  };
  // datepicker onchange
  const ExpectedDHandlechange = (date, index) => {
    const newTravelers = [...travelers];
    newTravelers[index].expectedDate = date;
    setTravelers(newTravelers);

    setInfo((prevInfo) => ({
      ...prevInfo,
      expectedDate: date,
    }));
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newTravelers = [...travelers];
    newTravelers[index][name] = value;
    setTravelers(newTravelers);

    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const addPerson = () => {
    setTravelers([...travelers, info]);
    setInfo({
      fName: "",
      lName: "",
      email: "",
      ContactNo: "",
      dob: "",
      passportNo: "",
      expectedDate: "",
    });
    setCount(count + 1);
  };

  const removePerson = (index) => {
    if (travelers.length > 1) {
      const newTravelers = [...travelers];
      newTravelers.splice(index, 1);
      setTravelers(newTravelers);
    }
  };

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
      padding: "19px",
    },
  }));

  const handleNavigateDocument = () => {
    navigate("/document");
  };

  return (
    <>
      <div className="container main_pageLogin">
        <Stepper activeStep={1}>
          <Step label=" Step 1" />
          <Step label=" Step 2" />
          <Step label=" Step 3" />
        </Stepper>
        <div className=" loginForm">
          <div className="row loginform_style">
            <div className="col-md-6 mb-4">
              <div className="card ripe-malinka-gradient form-white">
                <div className="card-body">
                  <form>
                    {travelers.map((traveler, index) => (
                      <div key={index}>
                        <h2 className="text-center font-up font-bold py-4 travelHead">
                          Traveler Details <span>{index + 1}</span>
                        </h2>
                        <div className="row ">
                          <div className="md-form mdForm_margin col-lg-6">
                            <input
                              type="text"
                              id={`orangeForm-name-${index}`}
                              className="form-control"
                              placeholder=" First Name"
                              value={traveler.fName}
                              name="fName"
                              onChange={(e) => handleChange(e, index)}
                            />
                          </div>
                          <div className="md-form mdForm_margin col-lg-6">
                            <input
                              type="text"
                              id={`orangeForm-name-${index}`}
                              className="form-control"
                              placeholder=" Last Name"
                              value={traveler.lName}
                              name="lName"
                              onChange={(e) => handleChange(e, index)}
                            />
                          </div>
                        </div>
                        <div className="row ">
                          <div className="md-form mdForm_margin col-lg-6">
                            <input
                              type="text"
                              id={`orangeForm-name-${index}`}
                              className="form-control"
                              placeholder=" Email"
                              value={traveler.email}
                              name="email"
                              onChange={(e) => handleChange(e, index)}
                            />
                          </div>
                          <div className="md-form mdForm_margin col-lg-6">
                            <input
                              type="text"
                              id={`orangeForm-name-${index}`}
                              className="form-control"
                              placeholder=" Contact No."
                              value={traveler.ContactNo}
                              name="ContactNo"
                              onChange={(e) => handleChange(e, index)}
                            />
                          </div>
                        </div>
                        <div className="row datePick0">
                          <div className="md-form mdForm_margin  col-lg-6">
                            <DatePicker
                              className="datetm4"
                              selected={traveler.dob}
                              onChange={(date) => DobHandlechange(date, index)}
                              placeholderText="Please Select DOB"
                            />
                          </div>
                          <div className="md-form mdForm_margin col-lg-6">
                            <DatePicker
                              className="datetm4"
                              selected={traveler.expectedDate}
                              onChange={(date) =>
                                ExpectedDHandlechange(date, index)
                              }
                              placeholderText="Select ExpectedDate"
                            />
                          </div>
                        </div>
                        <div className="md-form">
                          <input
                            type="text"
                            id={`orangeForm-name-${index}`}
                            className="form-control"
                            placeholder=" Passport No."
                            value={traveler.passportNo}
                            name="passportNo"
                            onChange={(e) => handleChange(e, index)}
                          />
                        </div>
                        {index === travelers.length - 1 && (
                          <div className=" addPerson01 ">
                            <button
                              type="button"
                              className="btn btn-outline-white waves-effect waves-light"
                              onClick={addPerson}
                            >
                              Add Person <IoMdAddCircle />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-white waves-effect waves-light"
                              onClick={() => removePerson(index)}
                            >
                              Remove
                            </button>
                            <button
                              className="btn btn-outline-white waves-effect waves-light"
                              onClick={handleNavigateDocument}
                            >
                              next
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card Amount_card">
                <div className="card-content">
                  <h4>Applicate Date:- </h4>
                  <h4>Destination:-</h4>
                  <div className="price-I">
                    <h4>
                      Price:- 19000{" "}
                      <span>
                        <HtmlTooltip
                          title={
                            <React.Fragment>
                              <Typography color="inherit" className="Breckage">
                                Price Breakage:-
                              </Typography>
                              <h5 className="BrackageCharge">
                                Goverment Fee:- 1200
                              </h5>
                              <h5 className="BrackageCharge">
                                Servise Fee:- 25000
                              </h5>
                              
                            </React.Fragment>
                          }
                        >
                          <Button>
                            <RiInformation2Line />
                          </Button>
                        </HtmlTooltip>
                      </span>
                    </h4>
                  </div>
                  <h4>Visa Response Date:-</h4>
                </div>
                <div className="h4text">
                  <h4>suggestion:-</h4>
                </div>
                <div className="Suggest_animate">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelerDetails;
