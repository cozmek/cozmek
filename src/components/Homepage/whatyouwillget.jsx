import TickSqr from "/src/assets/Tick Square.png";
let points = [
  "Online and Offline Sections",
  "Placement Assistance and Gurantee",
  "Exploring through wide range of TECHNOLOGIES",
];

let popins = {
  fontFamily: "Poppins, sans-serif",
};
const whatyouwillget = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-10 md:mt-20 mb-20 px-5">
      <div className="md:mt-0 mt-10 md:ml-0 md:w-1/2 w-full">
        <h1
          className="text-2xl md:text-4xl md:font-bold text-center text-[#393939]"
          style={popins}
        >
          What Will You <span className="text-[#0B7077]">Get</span>?
        </h1>
        <p className="text-base md:text-lg text-[#6C6C6C] lg:mr-14 text-center">
          Step into a future world filled with enhanced career prospects,
          extensive technological exploration opportunities, and the possibility
          of landing your dream job.
        </p>
        <div className="list-disc mt-4 justify-center space-y-5">
          {points.map((point, i) => {
            return (
              <div
                key={i}
                className="flex items-center py-5 px-5 text-sm"
                style={{
                  borderRadius: "16px",
                  background: "#FFF",
                  boxShadow: "0px -2px 128px 0px rgba(5, 142, 110, 0.14)",
                  ...popins,
                }}
              >
                <div>
                  <img
                    src={TickSqr}
                    className="inline pr-5 w-14"
                    alt="Tick square"
                  />
                </div>
                <div>
                  <h4 className="text-base md:text-lg inline ">{point}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default whatyouwillget;
