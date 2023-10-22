import "../stylesheets/auth.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
let backend_url = "http://localhost:3000/api/v1";
// import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [successMessage, setSucessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  // const handleError = (msg) => setErrorMessage(msg);

  // // toast.error(err, {
  // //   position: "bottom-left",
  // // });
  // const handleSuccess = (msg) => setSucessMessage(msg);
  // // toast.success(msg, {
  // //   position: "bottom-left",
  // // });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${backend_url}/login`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      // console.log(data);
      const { status, data } = response;
      console.log('data',data)
      if (status==200) {
        // handleSuccess(message);
        localStorage.setItem("userId",response.data.user._id)
        localStorage.setItem("role",response.data.user.role)
        // setSucessMessage(message)
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        console.log();
        // setErrorMessage(message);


      }
    } catch (error) {
      console.log(error);
      // setErrorMessage(error.message);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="form_container" >
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          {errorMessage} {successMessage}
        </span>
        <span>
          Already have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
