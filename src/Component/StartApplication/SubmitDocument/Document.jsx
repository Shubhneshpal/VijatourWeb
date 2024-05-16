import React, { useState } from "react";
import "./document.css";
import { Stepper, Step } from "react-form-stepper";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { FaPlus } from "react-icons/fa6";

const Document = () => {
  const [travelers, setTravelers] = useState([
    {
      fName: "",
      lName: "",
      file: "",
      dob: "",
      passportNo: "",
    },
  ]);

  // const [count, setCount] = useState(1);

  const [info, setInfo] = useState({
    fName: "",
    lName: "",
    file: "",
    passportNo: "",
  });

  const handleChange = (e, index) => {
    if (e.target.name === "file") {
      const file = e.target.files[0];
      console.log("file", file);
      const newTravelers = [...travelers];
      newTravelers[index][e.target.name] = file.name; // Setting the file name
      setTravelers(newTravelers);
    } else {
      const { name, value } = e.target;
      const newTravelers = [...travelers];
      newTravelers[index][name] = value;
      setTravelers(newTravelers);

      setInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
    }
  };

  const addDocument = () => {
    setTravelers((prevTravelers) => [
      ...prevTravelers,
      {
        fName: "",
        lName: "",
        file: "",
        dob: "",
        passportNo: "",
      },
    ]);
  };

  const removePerson = (index) => {
    if (travelers.length > 1) {
      const newTravelers = [...travelers];
      newTravelers.splice(index, 1);
      setTravelers(newTravelers);
    }
  };

  return (
    <>
      <div className="container main_pageLogin">
        <Stepper activeStep={2}>
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
                        <h2 className="text-center font-up font-bold py-2 travelHead">
                          Upload Documents   
                        </h2>
                        <div className="travellarppp">
                        <p>Traveller <span>{index + 1}</span></p>
                        </div>
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
                              value={traveler.dob}
                              name="dob"
                              onChange={(e) => handleChange(e, index)}
                            />
                          </div>
                          <div className="md-form mdForm_margin col-lg-6">
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
                        </div>

                        <div className="md-form"></div>

                        <div className="uplodFile">
                          <Form.Group
                            as={Col}
                            controlId={`formFile-${index}`}
                            className="mb-3"
                          >
                            <Form.Label>Choose Passport</Form.Label>
                            <Form.Control
                              onChange={(e) => handleChange(e, index)}
                              name="file"
                              type="file"
                              size="lg"
                              accept="application/pdf"
                              className="uplodFileINput"
                              required
                            />
                          </Form.Group>
                          <button
                            type="button"
                            className="btn btn-outline-white waves-effect waves-light"
                          >
                            Upload
                          </button>
                        </div>
                        <div className="uplodFile">
                          <Form.Group
                            as={Col}
                            controlId={`formFile-${index}`}
                            className="mb-3"
                          >
                            <Form.Label>Choose Photo</Form.Label>
                            <Form.Control
                              onChange={(e) => handleChange(e, index)}
                              name="file"
                              type="file"
                              size="lg"
                              accept="application/pdf"
                              required
                            />
                          </Form.Group>
                          <button
                            type="button"
                            className="btn btn-outline-white waves-effect waves-light"
                          >
                            Upload
                          </button>
                        </div>
                        <div className="uplodFile">
                          <Form.Group
                            as={Col}
                            controlId={`formFile-${index}`}
                            className="mb-3"
                          >
                            <Form.Label>Other Document</Form.Label>
                            <Form.Control
                              name="file"
                              type="file"
                              size="lg"
                              accept="application/pdf"
                              required
                            />
                          </Form.Group>
                          <button
                            type="button"
                            className="btn btn-outline-white waves-effect waves-light"
                          >
                            Upload
                          </button>
                        </div>
                      </div>
                    ))}
                  </form>
                </div>
               <div className="fullSubmit">
               <button
                  type="button"
                  className="btn btn-outline-white waves-effect waves-light"
                  onClick={addDocument}
                >
                  Add Document <FaPlus />
                </button>
               <button
                  type="button"
                  className="btn btn-outline-white waves-effect waves-light"
                  onClick={removePerson}
                >
                  Remove
                </button>
               <button
                  type="button"
                  className="btn btn-outline-white waves-effect waves-light"
                >
                  Submit
                </button>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Document;