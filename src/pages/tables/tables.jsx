import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { hideNav } from "../../rtk/slices/navStatus";
import { removeTable } from "../../rtk/slices/get-customers";

import "./tables.css";

const Tables = () => {
  const dispatch = useDispatch();
  const customersData = useSelector((state) => state.customers);

  async function deleteHandle(customer) {
    try {
      console.log(customer);
      await axios.delete("http://localhost:3000/customers/" + customer.id);
      dispatch(removeTable(customer));
      toast.success("successful delete");
    } catch {
      toast.error("error in delete ");
    }
  }

  return (
    <>
      <Navbar />
      <div
        onClick={() => dispatch(hideNav())}
        className="tables position-relative"
      >
        <h1 className="my-5">
          Current Booked Table:- {customersData.customers.length}
        </h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Table Number</th>
              <th scope="col">Guests Numbers</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {customersData.customers.map((el) => (
              <tr key={el.id}>
                <td className="fw-bold">{el.id}</td>
                <td>{el.name}</td>
                <td>{el.table}</td>
                <td>{el.geustNumbers}</td>
                <td>
                  <i
                    onClick={() => deleteHandle(el)}
                    className="fa-solid fa-trash"
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Tables;
