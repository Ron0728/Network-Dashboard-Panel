import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notify = (msg) => {
  const notify = (msg) => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 2000,
      newestOnTop: true,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
    <ToastContainer />;
  };

  return <div>{/* <ToastContainer /> */}</div>;
};

export default Notify;
