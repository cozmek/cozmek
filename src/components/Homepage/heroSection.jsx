import YourComponent from "./swiper";

const HeroSection = () => {
  // Programe
  const handleProgramClick = () => {
    const programeRef = document.querySelector("#programe");
    if (programeRef) {
      programeRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="w-auto custom-gradient">
        <div className=" flex justify-center items-center">
          <div className="h-auto flex flex-col md:flex-row font-medium 2xl:w-[1440px] w-auto px-5 justify-center text-[#192335CC] ">
            {/* Left taglines */}
            <div className="md:w-1/2 w-full flex flex-col justify-center p-5">
              <h1 className="p-3 w-1/2 bg-white inline-block md:text-base text-xs">
                🏆 AI: Shaping the Future of Our World
              </h1>
              <h1 className="pt-4 text-2xl xs:text-4xl md:text-6xl font-extrabold uppercase text-epilogue">
                Mastering the Future:
              </h1>
              <span
                className="text-xl xs:text-2xl md:text-4xl font-normal uppercase text-epilogue"
                style={{
                  fontFamily: "Epilogue, sans-serif",
                }}
              >
                AI Pioneering Excellence
              </span>
              <p className="py-4 text-[#6B7385]  text-base md:text-lg font-normal tracking-widest capitalize">
                Through cutting-edge programs and the guidance of seasoned
                experts, we empower individuals of all generations, unlocking
                their full potential in an ever-evolving world.
                <span className="py-2 text-[#6B7385] block text-outfit font-bold tracking-wide capitalize">
                  Join us now to secure a future filled with success!
                </span>
              </p>
              <button
                className="bg-[#0B7077] hover:bg-[#329aa1] px-8 py-2 sm:text-base text-xs rounded-md text-white md:w-1/2"
                onClick={handleProgramClick}
              >
                View Our Programs
              </button>
            </div>
            {/* Right Slider */}
            <div className="w-auto sm:py-10 box-border py-4 px-2 xs1:px-6 ">
              <div className="flex justify-center box-content">
                <YourComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
