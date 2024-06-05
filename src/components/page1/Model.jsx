/* eslint-disable no-undef */
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import pdffile from "../../assets/COZMEK.pdf";

const Modal = ({ showModal, setShowModal }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      place: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string().required("Required"),
      place: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      downloadPDF();
      formik.handleReset();
      setShowModal(false);
      setShowModal(false);

      fetch(
        "https://script.google.com/macros/s/AKfycbx1Mp3TpVsXSEiDzOBGLFdk-a68jauOvo52XkbM1lkLkslaB07bGzyXor2Gkc-XwbMztQ/exec",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(values).toString(),
        }
      )
        .then(() => {
          alert("Registeration Completed");
        })
        .catch((err) => {
          alert(err);
        });
    },
  });

  const downloadPDF = () => {
    const pdfUrl = pdffile;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "brochure.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {showModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-gray-800 bg-opacity-75">
          <div className="relative w-auto max-w-3xl mx-auto my-6">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t">
                <h3 className="text-3xl font-semibold">Download Brochure</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              <div className="relative p-6 flex-auto">
                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      {...formik.getFieldProps("name")}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div className="text-red-500 text-xs">
                        {formik.errors.name}
                      </div>
                    ) : null}
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-500 text-xs">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="phone"
                      type="text"
                      placeholder="Your Phone Number"
                      {...formik.getFieldProps("phone")}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                      <div className="text-red-500 text-xs">
                        {formik.errors.phone}
                      </div>
                    ) : null}
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="place"
                    >
                      Place
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="place"
                      type="text"
                      placeholder="Your Place"
                      {...formik.getFieldProps("place")}
                    />
                    {formik.touched.place && formik.errors.place ? (
                      <div className="text-red-500 text-xs">
                        {formik.errors.place}
                      </div>
                    ) : null}
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Download
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
