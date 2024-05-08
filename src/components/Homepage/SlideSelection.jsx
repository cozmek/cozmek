/* eslint-disable no-dupe-keys */
import c1 from "/src/assets/c01.jpg";
import c2 from "/src/assets/c02.jpg";
import c3 from "/src/assets/c03.jpg";
import ticMark from "/src/assets/ticMark.png";
import { useRef } from "react";
let slide = [
  {
    mainImage: c1,
    type: "Online",
    MainHead: "Artificial intelligence and Machine learning",
    Discription:
    "Embark on a 6-month Crash Program in Data Science and Machine Learning. Dive deep into data analysis, ML algorithms, and earn certifications, guided by a mentor, with real-world projects and 100% Placement Assistance.",
   DiscountAmount: "25,000",
    OriginalAmount: "28,000",
    Duration: "6 months",
    Certificate: "CRBC, ABE",
    Curriculum: "Live and recorded classes",
    Support: "100% placement assistance and personal mentor",
  },
  {
    mainImage: c2,
    type: "Online",
    MainHead: "Python Program",
    Discription:
    "Elevate Python skills in our 2-month program with live & recorded classes, hands-on assignments, CRBS certifications. Master fundamentals, advanced concepts, and projects. Get interview prep, backed by 100% Placement Assistance.",
  DiscountAmount: "2,999",
    OriginalAmount: "3,000",
    Duration: "2 months",
    Certificate: "CRBC",
    Curriculum: "Live and recorded classes",
    Support: "100% placement assistance and personal mentor",
  },
  {
    mainImage: c3,
    type: "Offline",
    MainHead: "International diploma in Artificial intelligence",
    Discription:
    "Start your AI journey with our 6-month Diploma. Dive into AI fundamentals, advanced techniques, and real-world applications. Benefit from live classes, hands-on projects, mentorship, and 100% Placement Assistance.",
    DiscountAmount: "40,000",
    OriginalAmount: "45,000",
    Duration: "6 months",
    Certificate: "CRBC, ABE",
    Curriculum: "Live and recorded classes",
    Support: "100% placement assistance and personal mentor",
  },
];

// Register
const handleRegisterClick = () => {
  const registerRef = document.querySelector("#register");
  if (registerRef) {
    registerRef.scrollIntoView({ behavior: "smooth" });
  }
};

const SlideSelection = () => {
  const programeRef = useRef();
  return (
    <div id="programe" ref={programeRef}>
      <div className="flex-wrap w-auto h-auto px-3 gap-5 flex items-center justify-center md:mt-20 mt-10">
        {slide.map((card, index) => {
          return (
            <div
              key={index}
              className=" max-w-[28rem] container bg-[#FAFAFA] rounded-xl overflow-hidden border-2  relative"
              style={{
                flexShrink: 0,
              }}
            >
              <div>
                <img
                  className="w-[40rem] h-[14rem]"
                  src={card?.mainImage}
                  alt="CardImage"
                />
              </div>

              <div className="p-4 flex flex-col  ">
                <h4 className="font-sans text-[#9393b6] py-3">{card?.type}</h4>

                <h1 className="text-2xl text-[#0B7077] text-center flex justify-center items-center font-sans font-bold h-12 mb-4 xss:mb-2">
                  {card?.MainHead}
                </h1>

                <p className="text-sm font-sans text-justify text-[#7b7b96] py-2 leading-normal">
                  {card?.Discription}
                </p>

                <div className="">
                  <div className="flex items-center py-1">
                    <img src={ticMark} className="w-6 mr-2 inline" alt="." />
                    <h6 className="text-base">
                      <span className="font-bold">Duration</span>:{" "}
                      {card?.Duration}
                    </h6>
                  </div>
                  <div className="flex items-center py-1">
                    <img src={ticMark} className="w-6 mr-2 inline" alt="." />
                    <h6 className="text-base">
                      <span className="font-bold">Certificate</span>:{" "}
                      {card?.Certificate}
                    </h6>
                  </div>
                  <div className="flex items-center py-1">
                    <img src={ticMark} className="w-6 mr-2 inline" alt="." />
                    <h6 className="text-base">
                      <span className="font-bold">Curriculum</span>:{" "}
                      {card?.Curriculum}
                    </h6>
                  </div>
                  <div className="flex items-center py-1">
                    <img src={ticMark} className="w-6 mr-2 inline" alt="." />
                    <h6 className="text-base">
                      <span className="font-bold">Support</span>:{" "}
                      {card?.Support}
                    </h6>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-5">
                  <div className="flex gap-3 font-extrabold">
                    <h2 className="text-green-500 text-sm  xs:text-lg xs1:text-2xl">
                      ₹ {card?.DiscountAmount}
                    </h2>
                    <h2 className="line-through text-red-500 text-xs  xs:text-md xs1:text-xl">
                      {card?.OriginalAmount}
                    </h2>
                  </div>

                  <button
                    className="bg-[#0B7077] hover:bg-[#329aa1] p-2 rounded-md text-white capitalize"
                    onClick={handleRegisterClick}
                  >
                    enroll now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SlideSelection;
