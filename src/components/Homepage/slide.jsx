/* eslint-disable react/prop-types */
const Slide = ({ card }) => {
  const handleRegisterClick = () => {
    const registerRef = document.querySelector("#register");
    if (registerRef) {
      registerRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-fit h-fit bg-white rounded-xl overflow-hidden relative">
      <div>
        <img className="h-60 w-full" src={card?.mainImage} alt="Course Image" />
      </div>
      <div className="py-4 px-7">
        <h4 className="text-[#9393b6] pb-2">{card?.type}</h4>
        <h1 className="text-xl text-[#0B7077] font-bold">{card?.MainHead}</h1>
        <div className="py-2 flex gap-3">
          <div className="flex flex-col gap-2 text-lg">
            <h1>Duration</h1>
            <h1>Certificate</h1>
            <h1>Curriculum</h1>
            <h1>Support</h1>
          </div>
          <div className="flex flex-col gap-2 text-lg">
            <h1>{card?.Duration}</h1>
            <h1>{card?.Certificate}</h1>
            <h1>{card?.Curriculum}</h1>
            <h1>{card?.Support}</h1>
          </div>
        </div>
        <div className="flex justify-between pt-2">
          <div className="flex gap-3 font-bold justify-between w-full">
            <h2 className="text-green-500 text-lg">₹ {card?.DiscountAmount}</h2>
            {card?.OriginalAmount && (
              <h2 className="line-through text-red-500 text-base">
                {card?.OriginalAmount}
              </h2>
            )}
            <button
              className="bg-[#0B7077] hover:bg-[#329aa1] p-2 rounded-md text-white"
              onClick={handleRegisterClick}
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
