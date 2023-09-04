import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import Main from "../../components/main/main";
import Sectitle from "../../components/section-title/section-title";
import { bookTable } from "../../rtk/slices/get-customers";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { hideNav } from "../../rtk/slices/navStatus";

import "./book.css";
import "react-toastify/dist/ReactToastify.css";

const Book = () => {
  const dispatch = useDispatch();
  let customersData = useSelector((state) => state.customers);
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    geustNumbers: "1",
  });

  useEffect(() => {
    if (customersData.getApi === false) {
      toast.warn("please setup json server");
    }
  }, []);

  const data = {
    main: {
      title: "Book Table",
      describtion:
        "Cafe House is free responsive Bootstrap v3.3.5 layout by templatemo. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusnec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      btn: "Book Table",
    },
    book: "book A Table",
  };
  // get data from form inputs
  function changeHndle(e) {
    const newData = {};
    newData[e.currentTarget.name] = e.currentTarget.value;
    setCustomerData((prevData) => {
      return { ...prevData, ...newData };
    });
  }

  async function sendData(e) {
    e.preventDefault();
    // Check get api is sucess or not
    if (customersData.getApi === false) {
      toast.warn("please setup json server");
    } else {
      // Check the cafe is completed or not
      if (customersData.customers.length === 10) {
        toast.error("Sorry cafe is completed");
      } else {
        // generate table number
        let tableNumber;
        let arr = [];
        for (let i = 1; i <= 10; i++) {
          arr.push(i);
        }

        let i = 1;
        // if cafe is empty set table number = 1 and id =1
        if (customersData.customers.length === 0) {
          tableNumber = 1;
          i = 1;
        } else {
          // generate id number
          let idArray = customersData.customers.map((el) => el.id);
          for (i; ; i++) {
            if (!idArray.includes(i)) {
              console.log(i);
              break;
            }
          }
          // get table numbers aren't booked
          tableNumber = arr.filter(
            (el) => !customersData.customers.map((el) => el.table).includes(el)
          )[0];
        }
        try {
          const newObj = { ...customerData, table: tableNumber, id: i };
          await axios.post("http://localhost:3000/customers", newObj);
          // make inputs empty after booking
          const newData = {
            name: "",
            email: "",
            phone: "",
            date: "",
            time: "",
            geustNumbers: "1",
          };
          // set state to update every change
          setCustomerData((prevData) => {
            return { ...prevData, ...newData };
          });
          toast.success(`Your table number is :- ${tableNumber}`);
          dispatch(bookTable(newObj));
        } catch {
          toast.error("book is Faild");
        }
      }
    }
  }

  return (
    <>
      <Navbar />
      <div onClick={() => dispatch(hideNav())} className="book">
        <Main data={data.main} />
        <div className="booking" id="details">
          <Sectitle data={data.book} />
          <div className="container">
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="text col-12 col-md-8">
                <p className="lh-lg">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Vitae placeat itaque in molestias suscipit unde ad quasi
                  officiis libero vel. Incidunt voluptate sapiente pariatur a
                  ratione, ut nemo obcaecati vitae!
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Vitae placeat itaque in molestias suscipit unde ad quasi
                  officiis libero vel. Incidunt voluptate sapiente pariatur a
                  ratione, ut nemo obcaecati vitae! Curabitur non nisl nec nisi
                  scelerisque maximus. Aenean consectetur convallis porttitor.
                  Aliquam interdum at lacus non blandit
                </p>
              </div>
              <form onSubmit={sendData} className="col-12 col-md-4">
                <div className="name d-flex justify-content-center align-items-center w-100  border border-white rounded px-2">
                  <input
                    autoComplete="off"
                    value={customerData.name}
                    name="name"
                    onChange={changeHndle}
                    className="h-100 start-0 bg-transparent "
                    type="text"
                    required
                    placeholder="Name"
                  />
                  <i className="far fa-user"></i>
                </div>
                <div className="mail d-flex justify-content-center align-items-center w-100  border border-white rounded px-2">
                  <input
                    autoComplete="off"
                    value={customerData.email}
                    name="email"
                    onChange={changeHndle}
                    className="h-100 start-0 bg-transparent"
                    type="email"
                    required
                    placeholder="Email"
                  />
                  <i className="far fa-envelope"></i>
                </div>
                <div className="phone d-flex justify-content-center align-items-center w-100  border border-white rounded px-2">
                  <input
                    autoComplete="off"
                    value={customerData.phone}
                    name="phone"
                    onChange={changeHndle}
                    className="h-100 start-0 bg-transparent"
                    type="tel"
                    required
                    placeholder="Phone"
                  />
                  <i className="fa fa-mobile-alt"></i>
                </div>
                <div className="date">
                  <input
                    value={customerData.date}
                    name="date"
                    onChange={changeHndle}
                    className="w-100 h-100 bg-transparent border border-white rounded px-2"
                    type="date"
                    required
                  />
                </div>
                <div className="time">
                  <input
                    value={customerData.time}
                    name="time"
                    onChange={changeHndle}
                    className="w-100 h-100 bg-transparent border border-white rounded px-2"
                    type="time"
                    required
                  />
                </div>
                <div className="geast border border-white rounded px-2">
                  <select
                    value={customerData.geustNumbers}
                    onChange={changeHndle}
                    className="bg-transparent w-100 h-100 text-capitalize"
                    name="geustNumbers"
                    id="geustNumbers"
                  >
                    <option value="1" style={{ color: "black" }}>
                      1 geust
                    </option>
                    <option value="2" style={{ color: "black" }}>
                      2 geusts
                    </option>
                    <option value="3" style={{ color: "black" }}>
                      3 geusts
                    </option>
                    <option value="4" style={{ color: "black" }}>
                      4 geusts
                    </option>
                    <option value="5" style={{ color: "black" }}>
                      5 geusts
                    </option>
                    <option value="6" style={{ color: "black" }}>
                      6 geusts
                    </option>
                    <option value="7" style={{ color: "black" }}>
                      7 geusts
                    </option>
                    <option value="8" style={{ color: "black" }}>
                      8 geusts
                    </option>
                    <option value="9" style={{ color: "black" }}>
                      9 geusts
                    </option>
                    <option value="10" style={{ color: "black" }}>
                      10 geusts
                    </option>
                  </select>
                </div>
                <button className="w-100 mt-4 fw-bold  border border-white rounded text-capitalize">
                  book now
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
};
export default Book;
