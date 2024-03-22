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
      "Embark on your journey into Data Science and Machine Learning with our 6-month Crash Program. Immerse yourself in the realms of data analysis, machine learning algorithms, and predictive modeling through expertly curated content, assignments, practical sessions, and rigorous exams. Earn Amarican board of education and Cozmek rank board certification, guided by a personal mentor. Engage in real-world data science projects, access our vibrant AI community, and rest assured with our 100% Placement Assistance guarantee.",
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
      "Enhance your Python skills in our 2-month Python Program. With a blend of recorded and live classes, hands-on assignments, and CRBS certifications, you'll master Python fundamentals and advanced concepts. Dive into four comprehensive Python projects to solidify your understanding. Engage with our dynamic Python community, participate in coding challenges, and receive specialized interview preparation for a successful career, all supported by our 100% Placement Assistance guarantee.",
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
