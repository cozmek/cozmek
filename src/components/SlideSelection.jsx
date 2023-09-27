import BasicCardimg from "/src/assets/BasicCardimg.png";
import basiccard from "/src/assets/basic card.png";
import InterMediateCardimg from "/src/assets/InterMediateCardimg.png";
import Intermediatecard from "/src/assets/Intermediate card.png";
import AdvanceCardImg from "/src/assets/AdvanceCardImg.jpeg";
import advancecardround from "/src/assets/advanced card.png";
import ticMark from "/src/assets/ticMark.png";
import { useRef } from "react";
let slide = [
  {
    mainImage: BasicCardimg,
    roundImages: basiccard,
    Project: "2",
    type: "Basic",
    MainHead: "AI Crash Course Program (6 Months)",
    Discription:
      "Embark on your AI journey with our 6-month Crash Program. Dive into the world of Artificial Intelligence through expertly curated content, assignments, practical sessions, and rigorous exams. Achieve industry-recognized certifications, guided by a personal mentor. Engage in two real-world AI projects, access our vibrant AI community, and rest assured with our 100% Placement Assistance.",
    DiscountAmount: "15,000",
    OriginalAmount: "25,000",
    Curriculum: "Recorded Classes, Assignments, Practicals",
    Evaluation: "Exams and CRBS Certification",
    Support: "Personal Mentor",
    Projects: "2 Real-World Projects",
    "Community Access": "AI Community",
    Placement: "100% Placement Assistance",
  },
  {
    mainImage: InterMediateCardimg,
    roundImages: Intermediatecard,
    Project: "4",
    type: "Intermediate",
    MainHead: "AI Expert Course Program (1 Year)",
    Discription:
      "Elevate your AI skills in our 1-year Expert Program. With a mix of recorded and live classes, hands-on assignments, and CRBS certifications, you'll tackle four impactful AI projects. Engage with our thriving AI community, participate in Hackathons, and receive specialized interview training for a successful career, all backed by our 100% Placement Assistance.",
    DiscountAmount: "30,000",
    OriginalAmount: "45,000",
    Curriculum: "Recorded & Live Classes, Assignments, Practicals",
    Evaluation: "Exams and CRBS Certifications",
    Support: "Personal Mentor, Interview Training, Expert Talk Sessions",
    Projects: "4 Real-World Projects",
    "Community Access": "AI Community, Free Hackathon Entry",
    Placement: "100% Placement Assistance",
  },
  {
    mainImage: AdvanceCardImg,
    roundImages: advancecardround,
    Project: "8",
    type: "Advanced",
    MainHead: "AI Job Guarantee Program with Internship (1 Year)",
    Discription:
      "Secure your AI career with our 1-year Job Guarantee Program. Enjoy recorded/live classes, assignments, CRBS certifications, and 8+ AI projects. Engage in our AI community, Hackathons, and receive interview training, a 6-month internship, Money-Back Job Guarantee, and 100% Job Guarantee.",
    DiscountAmount: "60,000",
    OriginalAmount: "85,000",
    Curriculum: "Recorded and Live Classes, Assignments, Practicals",
    Evaluation: " Exams and CRBS Certifications",
    Support:
      " Personal Mentor, Interview Training, Talk Sessions, Resume Preparation, Individual Doubt Clearing",
    Projects: "8+ Real-World Projects",
    "Community Access": "AI Community, Free Hackathon Entry",
    Placement: "100% Job Guarantee, 6-Month Internship",
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
      <div className="flex-wrap w-auto h-auto px-3 py-4 gap-5 flex items-center justify-center md:mt-20 mt-10 my-5">
        {slide.map((card, index) => {
          return (
            <div
              key={index}
              className=" max-w-[32rem] min-h-[720px]  container  bg-[#FAFAFA] rounded-xl overflow-hidden border-2  relative"
              style={{
                flexShrink: 0, // Prevent flex-shrinking
              }}
            >
              <div>
                <img
                  className="w-[40rem] h-[11.8rem]"
                  src={card?.mainImage}
                  alt="CardImage"
                />
              </div>
              <div
                className="w-auto flex xs:w-[246.51px] items-center gap-5 absolute top-[11rem] left-8"
                style={{
                  height: "41px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  background: "#FAFAFA",
                  borderRadius: "40px",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <img src={card?.roundImages} className="" alt="cards" />
              </div>

              <div className="p-4 pt-8 flex flex-col  ">
                <h4 className="font-sans text-[#9393b6] pb-4">{card?.type}</h4>

                <h1 className="text-2xl text-[#0B7077] font-sans font-bold ">
                  {card?.MainHead}
                </h1>

                <p className="text-sm font-sans text-[#7b7b96] py-2 leading-normal">
                  {card?.Discription}
                </p>

                <div className="">
                  <div className="flex items-center py-1">
                    <img src={ticMark} className="w-6 mr-2 inline" alt="." />
                    <h6 className="text-base">
                      <span className="font-bold">Curriculum</span>:
                      {card?.Curriculum}
                    </h6>
                  </div>
                  <div className="flex items-center py-1">
                    <img src={ticMark} className="w-6 mr-2 inline" alt="." />
                    <h6 className="text-base">
                      <span className="font-bold">Evaluation</span>:
                      {card?.Evaluation}
                    </h6>
                  </div>
                  <div className="flex items-center py-1">
                    <img src={ticMark} className="w-6 mr-2 inline" alt="." />
                    <h6 className="text-base">
                      <span className="font-bold">Support</span>:{card?.Support}
                    </h6>
                  </div>
                  <div className="flex items-center py-1">
                    <img src={ticMark} className="w-6 mr-2 inline" alt="." />
                    <h6 className="text-base">
                      <span className="font-bold">Projects</span>:
                      {card?.Projects}
                    </h6>
                  </div>
                  <div className="flex items-center py-1">
                    <img src={ticMark} className="w-6 mr-2 inline" alt="." />
                    <h6 className="text-base">
                      <span className="font-bold">Community Access</span>:
                      {`card?.Community Access`}
                    </h6>
                  </div>

                  <div className="flex items-center py-1">
                    <img src={ticMark} className="w-6 mr-2 inline" alt="." />
                    <h6 className="text-base">
                      <span className="font-bold">Placement</span>:
                      {card?.Placement}
                    </h6>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-5">
                  <div className="flex gap-3 font-extrabold">
                    <h2 className="text-green-500 text-sm xs:text-2xl">
                      ₹ {card?.DiscountAmount}
                    </h2>
                    <h2 className="line-through text-red-500 text-xs xs:text-xl">
                      ₹ {card?.OriginalAmount}
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
