

import React, { useEffect, useState } from "react";
import "./Header.css"
import { MdSearch } from "react-icons/md";
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

  //    // useEffect(() => {
//   //   // fetch(
//   //   //   "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
//   //   // )
//   //   //   .then((response) => response.json())
//   //   //   .then((data) => {
//   //   //     setCountries(data.countries);
//   //   //     setSelectedCountry(data.userSelectValue);
//   //   //   });

//   // }, []); 

  const handleCountrySelect = (selectedOption) => {
    setSelectedCountry(selectedOption);
    // setDefaultLabel(selectedOption.label);
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



// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router";
// import "./visaApply.css";
// import Header from "../Home/Header";
// import DatePicker from "react-datepicker";
// import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
// import dayjs from "dayjs";
// import "react-datepicker/dist/react-datepicker.css";
// import { countries } from "../countries";
// import CardMedia from "@mui/material/CardMedia";
// import { Link } from "react-router-dom";
// import { FaHandPointRight } from "react-icons/fa";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";


// const VisaApplyPage = () => {
//   const { id } = useParams();
//   const [date, setDate] = useState(new Date());
//   const [change, setChange] = useState(false);
//   const [newDate, setNewDate] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [country, setCountry] = useState(null);
//   const [show, setShow] = useState(false);
//   const [logShow, setLogShow] = useState(false);
//   const navigate = useNavigate();
//   const [RegformData, setRegformData] = useState({
//     name: "",
//     lname: "",
//     email: "",
//     Cname: "",
//     password: "",
//   });
// // console.log(countries.id)
//   const handleClose = () => {
//     setShow(false);
//     navigate('/TravelDetails'); // Directly navigate to the TravelDetails route
//   };
//   const handleCloseLog = () => {
//     setLogShow(false);
    
//   };
//   const handleShow = () => {
//     setShow(true)
//     setLogShow(false);
//   };
//   const handleLogShow = () => {
//     setShow(false); // Close register modal when opening login modal
//     setLogShow(true)
//   };

//   useEffect(() => {
    
//     const selectedCountry = countries.find(
//       (country) => country.id === parseFloat(id)
//     );
//     setCountry(selectedCountry);
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setRegformData({ ...RegformData, [name]: value });
//   };

//   const calculatePrice = () => {
//     return countries[id] ? price * quantity : 0;
//   };
  
//   const handleIncrement = () => {
//     setQuantity(quantity + 1);
//   };
  
//   const handleDecrement = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   return (
//     <>
//       <div className="ViaApply_Header">
//         <Header />
//       </div>
//       {country && (
//         <div className="main-wrapper-visaPage">
//           <div className="CountryName">{country.name}</div>
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-6 col-md-12 ">
//                 <div className="card visaCard1">
//                   <div className="card-img">
//                     <h3 className="img-content">{country.tag}</h3>
//                     <CardMedia
//                       image={process.env.PUBLIC_URL + country.pic}
//                       component="img"
//                       loading="lazy"
//                     />
//                   </div>
//                 </div>
//                 <div className="visaCard_content">
//                   <p>
//                     <span>Notice:</span> {country.notice}
//                   </p>
//                   <h4>Documents required</h4>
//                   <ul>
//                     <li>Photo</li>
//                     <li>Passport</li>
//                   </ul>
//                   <h5>Flat ₹200 discount !!!!!</h5>
//                 </div>
//               </div>
//               <div className="col-lg-4">
//                 <DatePicker
//                   selected={selectedDate}
//                   onChange={handleDateChange}
//                   inline
//                 />
//                 {/* <StaticDatePicker
//                       orientation="portrait"
//                       defaultValue={dayjs(new Date())}
//                       minDate={dayjs(new Date())}
//                       className="calender"
//                       value={dayjs(date)}
//                       onChange={(e) => {
//                         setDate(e.$d);
//                         const ddate = new Date(e.$d);
//                         ddate.setDate(ddate.getDate() + countries[id].days);
//                         setNewDate(ddate);
//                         setChange(true);
//                       }}
//                     /> */}
//                 <div className="selected-date">
//                   Apply on{" "}
//                   {selectedDate ? (
//                     <span className="placeholder-text">
//                       {new Intl.DateTimeFormat("en-GB", {
//                         year: "numeric",
//                         month: "short",
//                         day: "2-digit",
//                       }).format(selectedDate)}
//                     </span>
//                   ) : (
//                     <span className="placeholder-text">
//                       Please select a date
//                     </span>
//                   )}{" "}
                 
//                   and get Your Visa in just{" "}
//                   <span className="placeholder-text">₹{calculatePrice()}</span>{" "}
//                   for <span className="placeholder-text">{quantity}</span>{" "}
//                   person by{" "}
//                   <span className="placeholder-text">
//                     {futureDate
//                       ? new Intl.DateTimeFormat("en-GB", {
//                           year: "numeric",
//                           month: "short",
//                           day: "2-digit",
//                         }).format(futureDate)
//                       : ""}
//                   </span>
//                 </div>
//                 <div className="incree-decreeButton">
//                   <span className="quantity_text">Quantity:-</span>
//                   <span className="quantity-picker">
//                     <button   onClick={() => {
//                           if (quantity < 2) return;
//                           setQuantity(quantity - 1);
//                         }}>-</button>
//                     <span>{quantity}</span>
//                     <button   onClick={() => {
//                           setQuantity(quantity + 1);
//                         }}>+</button>
//                   </span>
//                 </div>

//                 <div className="btn55">
//                   <button variant="primary" onClick={handleShow}>
//                     Start Application <FaHandPointRight className="hand" />{" "}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="Register_Modal">
//             <Modal
//               aria-labelledby="contained-modal-title-vcenter"
//               centered
//               show={show}
//               onHide={handleClose}
//               animation={false}
//             >
//               <div className="googleLogin11">
//                 <Modal.Header closeButton className="crossButton">
//                   <div className="loginHead">
//                     <h2>Register</h2>
//                   </div>
//                 </Modal.Header>
//               </div>
//               <Modal.Body>
//                 <div className="googleLogin">
//                   <p>Create Your Account</p>
//                   <form method="POST">
//                     <div className="input_group mb-4">
//                       <div className="row">
//                         <div className="col-lg-6 fName">
//                           <input
//                             onChange={handleChange}
//                             type="text"
//                             placeholder="First Name"
//                             name="name"
//                             value={RegformData.name}
//                           />
//                         </div>
//                         <div className="col-lg-6 lName">
//                           <input
//                             onChange={handleChange}
//                             type="text"
//                             placeholder="Last Name"
//                             name="lname"
//                             value={RegformData.lname}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="input_group mb-4">
//                       <input
//                         onChange={handleChange}
//                         type="text"
//                         placeholder="Company Name (Optional)"
//                         name="Cname"
//                         value={RegformData.Cname}
//                       />
//                     </div>
//                     <div className="input_group mb-4">
//                       <input
//                         onChange={handleChange}
//                         type="text"
//                         placeholder="Email"
//                         name="email"
//                         value={RegformData.email}
//                       />
//                     </div>
//                     <div className="input_group mb-4">
//                       <input
//                         onChange={handleChange}
//                         type="password"
//                         name="password"
//                         placeholder="password"
//                         value={RegformData.password}
//                       />
//                     </div>

//                     <button className="btn56" type="submit">
//                       Register
//                     </button>
//                   </form>
//                   <div className="bottomLi">
//                     <div className="bottomLine">
//                       <span>OR</span>
//                     </div>
//                   </div>
//                   <div className="signupButtons">
//                     <Link className="btn" onClick={handleLogShow}>
//                       Already Have An Account? Sign In
//                     </Link>
//                   </div>
//                   <div className="provacyPage">
//                     <p>
//                       By Signing In, You Agree To Our
//                       <Link>{"  "} Terms And Conditions</Link> And Acknowledge
//                       That You Have Read Our <Link>{"  "} Privacy Policy.</Link>
//                     </p>
//                   </div>
//                 </div>
//               </Modal.Body>
//               <div className="googleLogin11">
//                 <Modal.Footer>
//                   <Button variant="red" onClick={handleClose}>
//                     Close
//                   </Button>
//                   <Button variant="primary" onClick={handleClose}>
//                     Submit
//                   </Button>
//                 </Modal.Footer>
//               </div>
//             </Modal>
//           </div>

//           {/* LoginForm Modal */}
//           <div className="Login_Modal">
//             <Modal
//               aria-labelledby="contained-modal-title-vcenter"
//               centered
//               show={logShow}
//               onHide={handleCloseLog}
//               animation={false}
//             >
//               <div className="googleLogin11">
//                 <Modal.Header closeButton className="crossButton">
//                   <div className="loginHead">
//                     <h2>Login</h2>
//                   </div>
//                 </Modal.Header>
//               </div>
//               <Modal.Body>
//                 <div className="googleLogin">
//                   <p>Login to Your Account</p>
//                   <form method="POST">
//                     <div className="input_group mb-4">
//                       <input
//                         onChange={handleChange}
//                         type="text"
//                         placeholder="Email"
//                         name="email"
//                         value={RegformData.email}
//                       />
//                     </div>
//                     <div className="input_group mb-4">
//                       <input
//                         onChange={handleChange}
//                         type="password"
//                         name="password"
//                         placeholder="password"
//                         value={RegformData.password}
//                       />
//                     </div>
//                     <button className="btn56" type="submit">
//                       Login
//                     </button>
//                   </form>
//                   <div className="bottomLi">
//                     <div className="bottomLine">
//                       <span>OR</span>
//                     </div>
//                   </div>
//                   <div className="signupButtons">
//                     <Link className="btn" onClick={handleShow}>
//                       Don't Have An Account? Sign Up
//                     </Link>
//                   </div>
//                   <div className="provacyPage">
//                     <p>
//                       By Signing In, You Agree To Our
//                       <Link>{"  "} Terms And Conditions</Link> And Acknowledge
//                       That You Have Read Our <Link>{"  "} Privacy Policy.</Link>
//                     </p>
//                   </div>
//                 </div>
//               </Modal.Body>
//               <div className="googleLogin11">
//                 <Modal.Footer>
//                   <Button variant="red" onClick={handleCloseLog}>
//                     Close
//                   </Button>
//                   <Button variant="primary" onClick={handleCloseLog}>
//                     Submit
//                   </Button>
//                 </Modal.Footer>
//               </div>
//             </Modal>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default VisaApplyPage;