import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import Slide from "../components/slide";
import BasicCardimg from "/src/assets/BasicCardimg.png";
import basiccard from "/src/assets/basic card.png";
import InterMediateCardimg from "/src/assets/InterMediateCardimg.png";
import Intermediatecard from "/src/assets/Intermediate card.png";
import AdvanceCardImg from "/src/assets/AdvanceCardImg.jpeg";
import advancedcard from "/src/assets/advanced card.png";

let card = [
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
  },
  {
    mainImage: AdvanceCardImg,
    roundImages: advancedcard,
    Project: "8",
    type: "Advanced",
    MainHead: "AI Job Guarantee Program with Internship (1 Year)",
    Discription:
      "Secure your AI career with our 1-year Job Guarantee Program. Enjoy recorded/live classes, assignments, CRBS certifications, and 8+ AI projects. Engage in our AI community, Hackathons, and receive interview training, a 6-month internship, Money-Back Job Guarantee, and 100% Job Guarantee.",
    DiscountAmount: "60,000",
    OriginalAmount: "85,000",
  },
];
import "swiper/css/effect-cards";
import "swiper/css";

const YourComponent = () => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className=" xs:w-[22.5rem]  xs:h-[37.5rem] xl:w-[30.5rem]  xl:h-[32.5rem] h-auto w-auto">
      {card.map((Card, index) => {
        return (
          <SwiperSlide
            key={index}
            className="p-0 m-0 h-fit"
            // "p-0 m-0 w-[22.5rem] h- lg:min-h-[30.5rem] xl:min-h-[32.5rem]"
          >
            <Slide card={Card} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default YourComponent;
