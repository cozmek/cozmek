import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper/modules";
import Slide from "../Homepage/slide";
import BasicCardimg from "/src/assets/BasicCardimg.png";
import basiccard from "/src/assets/basic card.png";
import InterMediateCardimg from "/src/assets/InterMediateCardimg.png";
import Intermediatecard from "/src/assets/Intermediate card.png";
import AdvanceCardImg from "/src/assets/AdvanceCardImg.jpeg";
import advancedcard from "/src/assets/advanced card.png";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css";
import "swiper/css/navigation";

let card = [
  {
    mainImage: BasicCardimg,
    roundImages: basiccard,
    Project: "2",
    type: "Premium",
    MainHead: "Data Science and Machine Learning",
    Discription:
      "Embark on your AI journey with our 6-month Crash Program. Dive into the world of Artificial Intelligence through expertly curated content, assignments, practical sessions, and rigorous exams. Achieve industry-recognized certifications, guided by a personal mentor. Engage in real-world AI projects, access our vibrant AI community, and rest assured with our 100% Placement Assistance.",
    DiscountAmount: "20,000",
    // OriginalAmount: "25,000",
  },
  {
    mainImage: InterMediateCardimg,
    roundImages: Intermediatecard,
    Project: "4",
    type: "Premium",
    MainHead: "Python Program",
    Discription:
      "Elevate your AI skills in our 1-year Expert Program. With a mix of recorded and live classes, hands-on assignments, and CRBS certifications, you'll tackle four impactful AI projects. Engage with our thriving AI community, participate in Hackathons, and receive specialized interview training for a successful career, all backed by our 100% Placement Assistance.",
    DiscountAmount: "2,999",
    // OriginalAmount: "45,000",
  },
];

const YourComponent = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination]}
        pagination={{ clickable: true }}
        className=" xs:w-[22.5rem] overflow-hidden xs:h-auto xl1:h-[37.5rem] xl:w-[30.5rem]  xl:h-[32.5rem] h-auto w-auto "
      >
        {card.map((Card, index) => {
          return (
            <SwiperSlide key={index} className="p-0 m-0 h-fit">
              <Slide card={Card} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default YourComponent;
