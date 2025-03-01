import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import c1 from "/src/assets/c01.jpg";
import c2 from "/src/assets/c02.jpg";
import c3 from "/src/assets/c03.jpg";

const cards = [
  {
    mainImage: c1,
    type: "Online",
    MainHead: "Artificial intelligence and Machine learning",
    Duration: "8 months",
    Certificate: "CRBC, ABE",
    Curriculum: "Live and recorded classes",
    Support: "100% placement assistance and personal mentor",
    DiscountAmount: "30,000",
    OriginalAmount: "35,000",
  },
  {
    mainImage: c2,
    type: "Online",
    MainHead: "Python Program",
    Duration: "2 months",
    Certificate: "CRBC",
    Curriculum: "Live and recorded classes",
    Support: "100% placement assistance and personal mentor",
    DiscountAmount: "5,000",
    OriginalAmount: "6,000",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = cards.length;
  const swiperRef = React.useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handleBack = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleStepChange = (swiper) => {
    setActiveStep(swiper.activeIndex);
  };

  const handleRegisterClick = () => {
    const registerRef = document.querySelector("#register");
    if (registerRef) {
      registerRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box className="sm1:max-w-[400px] max-w-[250px]">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleStepChange}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={false}
        className="mySwiper"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="md:w-full h-full bg-white rounded-xl overflow-hidden relative">
              <div>
                <img
                  className="md:h-60 h-42 w-full"
                  src={card?.mainImage}
                  alt="Course Image"
                />
              </div>
              <div className="py-4 px-7">
                <h4 className="text-[#9393b6] pb-2">{card?.type}</h4>
                <h1 className="md:text-xl text-[#0B7077] font-bold capitalize h-14 flex items-center">
                  {card?.MainHead}
                </h1>
                <div className="py-2 flex gap-3">
                  <div className="flex flex-col gap-2 md:text-lg text-xs">
                    <h1>Duration</h1>
                    <h1>Certificate</h1>
                    <h1>Curriculum</h1>
                    <h1>Support</h1>
                  </div>
                  <div className="flex flex-col gap-2 md:text-lg text-xs">
                    <h1>{card?.Duration}</h1>
                    <h1>{card?.Certificate}</h1>
                    <h1>{card?.Curriculum}</h1>
                    <h1>{card?.Support}</h1>
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <div className="flex font-bold justify-between w-full">
                    <div className="flex gap-2">
                      <h2 className="text-green-500 md:text-lg text-xs">
                        ₹ {card?.DiscountAmount}
                      </h2>
                      {card?.OriginalAmount && (
                        <h2 className="line-through text-red-500 md:text-sm text-xs">
                          {card?.OriginalAmount}
                        </h2>
                      )}
                    </div>
                    <button
                      className="bg-[#0B7077] hover:bg-[#329aa1] sm1:text-xs text-[8px] px-3 py-2 rounded-md text-white capitalize"
                      onClick={handleRegisterClick}
                    >
                      Book your seat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
