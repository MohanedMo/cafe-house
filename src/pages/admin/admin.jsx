import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { hideNav } from "../../rtk/slices/navStatus";

import "./admin.css";
const Admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const adminData = { username: "mohaned25100@gmail.com", password: "mo2001" };
  const [inpuData, setInputData] = useState({ username: "", password: "" });
  const customersData = useSelector((state) => state.customers);
  useEffect(() => {
    if (customersData.getApi === false) {
      toast.warn("please setup json server");
    }
  }, []);
  // get data from input
  function getData(e) {
    let newData = {};
    newData[e.currentTarget.name] = e.currentTarget.value;
    setInputData((prevdata) => {
      return { ...prevdata, ...newData };
    });
  }
  // check data valid or not
  function validate(e) {
    e.preventDefault();
    if (customersData.getApi === false) {
      toast.warn("please setup json server");
    } else {
      if (
        inpuData.username === adminData.username &&
        inpuData.password === adminData.password
      ) {
        toast.success("Log Successfully");
        navigate("/tables", { replace: true });
      }
    }
  }
  return (
    <>
      <Navbar />
      <div onClick={() => dispatch(hideNav())} className="admin">
        <div className="container position-relative d-flex flex-column justify-content-center align-items-center">
          <h1>Hello Admin</h1>
          <form onSubmit={validate}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                name="username"
                required
                onChange={getData}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              {inpuData.username !== adminData.username &&
                inpuData.username !== "" && (
                  <div className="wrong">
                    <i className="fa-solid fa-circle-xmark text-danger me-2"></i>
                    <span className="text-danger">Wrong email address</span>
                  </div>
                )}
              {inpuData.username === adminData.username && (
                <div className="succes">
                  <i className="fa-solid fa-check text-success me-2"></i>
                  <span className="text-success">Correct email address</span>
                </div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                name="password"
                required
                onChange={getData}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
              {inpuData.password !== adminData.password &&
                inpuData.password !== "" && (
                  <div className="wrong">
                    <i className="fa-solid fa-circle-xmark text-danger me-2"></i>
                    <span className="text-danger">Wrong Password</span>
                  </div>
                )}
              {inpuData.password === adminData.password && (
                <div className="succes">
                  <i className="fa-solid fa-check text-success me-2"></i>
                  <span className="text-success">Correct Password</span>
                </div>
              )}
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />

      <ToastContainer />
    </>
  );
};

export default Admin;
