import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import "./login.css"
import { Link } from 'react-router-dom';
import {validateFormLogin} from "../../../util/validation.js"

const LoginForm = ({logShow,handleShow,handleCloseLog}) => {

    const [loginData, setloginData] = useState({
        email: "",
        password: "",
      });
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setloginData({ ...loginData, [name]: value });
      };


      
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const newErrors = validateFormLogin(loginData);
    setErrors(newErrors);

    const isValid = Object.keys(newErrors).length === 0;

    const { email, password } = loginData;
    if (isValid) {
      console.log("logForm validation success");
      try {
        const response = await fetch(
          "http://localhost:4000/api/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Login successful");
          localStorage.setItem("token", data.token);
         // Set login state to true
        //  setisLogin(true);
        // window.location.replace('/');
        } else {
          const errorData = await response.json();
          console.error("Failed to login:", errorData.message);
        }
      } catch (error) {
        console.error("Error during login:", error);
      }

      setloginData({
        email: "",
        password: "",
      });     
    } else {
      console.log("loginForm validation failed");
    }

    return isValid;
  };
  return (
    <>
      {/* <div className="Login_Modal"> */}
            <Modal
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={logShow}
              onHide={handleCloseLog}
              animation={false}
            >
              <div className="googleLogin11">
                <Modal.Header closeButton className="crossButton">
                  <div className="loginHead">
                    <h2>Login</h2>
                  </div>
                </Modal.Header>
              </div>
              <Modal.Body>
                <div className="googleLogin">
                  <p>Login to Your Account</p>
                  <form method="POST">
                    <div className="input_group mb-4">
                      <input
                      className="inputPass"
                        onChange={handleChange}
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={loginData.email}
                      />
                      {errors.email && <p className="style01">{errors.email}</p>}
                    </div>
                    <div className="input_group mb-4">
                      <input
                      className="inputPass"
                        onChange={handleChange}
                        type="password"
                        name="password"
                        placeholder="password"
                        value={loginData.password}
                      />
                      {errors.password && <p className="style01">{errors.password}</p>}
                    </div>
                    <button onClick={handleSubmitLogin} className="btn56" type="submit">
                      Login
                    </button>
                  </form>
                  <div className="bottomLi">
                    <div className="bottomLine">
                      <span>OR</span>
                    </div>
                  </div>
                  <div className="signupButtons">
                    <Link className="btn" onClick={handleShow}>
                      Don't Have An Account? Sign Up
                    </Link>
                  </div>
                  <div className="provacyPage">
                    <p>
                      By Signing In, You Agree To Our
                      <Link>{"  "} Terms And Conditions</Link> And Acknowledge
                      That You Have Read Our <Link>{"  "} Privacy Policy.</Link>
                    </p>
                  </div>
                </div>
              </Modal.Body>
             
            </Modal>
          {/* </div> */}
    </>
  )
}

export default LoginForm
