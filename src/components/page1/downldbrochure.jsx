/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Exam from "../../assets/exam.jpg";
import Modal from "./Model";
const examResults = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="h-auto xl:flex custom-gradient font-medium text-[#192335CC] flex-row justify-center">
        {/* Left taglines */}
        <div className="xl:w-1/2 w-full p-10 px-10 flex justify-center flex-col items-center">
          <div className="xl:ml-14">
            <h1 className="pt-4 text-xl xs:text-2xl md:text-4xl font-extrabold uppercase text-epilogue">
              DOWNLOAD OUR LATEST BROCHURE
            </h1>
            <span
              className="text-lg xs:text-xl md:text-3xl font-normal uppercase text-epilogue"
              style={{
                fontFamily: "Epilogue, sans-serif",
              }}
            >
              EXPLORE OUR OFFERINGS AND PROGRAMS
            </span>
            <p className="py-4 text-[#6B7385] text-base md:text-md font-normal tracking-widest capitalize">
              Discover all that we have to offer with our latest brochure. It
              provides comprehensive details about our programs, services, and
              the benefits of joining our community. Stay informed and make
              well-informed decisions for your future.
              <span className="py-2 text-[#6B7385] block text-outfit font-bold tracking-wide capitalize">
                Don't miss out! Click the button below to download our latest
                brochure and get all the information you need.
              </span>
            </p>
            <div className="sm:flex flex-row gap-8">
              <button
                className="bg-[#0B7077] hover:bg-[#329aa1] p-3 px-8 rounded-md sm:text-base text-xs sm:w-auto w-full text-white uppercase"
                onClick={() => setShowModal(true)}
              >
                Download brochure
              </button>
              <Modal showModal={showModal} setShowModal={setShowModal} />
            </div>
          </div>
        </div>

        {/* Right Slider */}
        {/* <div className="w-auto sm:py-10 box-border py-4 px-2 xs1:px-6 ">
          <div className="flex justify-center">
            <img src={Exam} alt="" />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default examResults;
