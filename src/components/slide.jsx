const slide = ({ card }) => {
  // Register
  const handleRegisterClick = () => {
    const registerRef = document.querySelector("#register");
    if (registerRef) {
      registerRef.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className=" w-auto h-full container  bg-white rounded-xl overflow-hidden border-2  relative">
      <div>
        <img
          className="h-[11.8rem] w-[35rem]"
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
        }}>

        <img src={card?.roundImages} className="" alt="cards" />
      </div>

      <div className="p-4 pt-8">
        <h4 className="font-sans text-[#9393b6] pb-4">{card?.type}</h4>
        <h1 className="text-2xl text-[#0B7077] font-sans font-bold">
          {card?.MainHead}
        </h1>
        <p className="text-sm font-sans text-[#7b7b96] py-2">
          {card?.Discription}
        </p>
        <div className="flex items-center justify-between pt-2">
          <div className="flex gap-3 font-extrabold">

            <h2 className="text-green-500 text-[11px] text-sm xs:text-2xl">
              ₹ {card?.DiscountAmount}
            </h2>
            <h2 className="line-through text-red-500 text-[9px] xs:text-xl">

              ₹ {card?.OriginalAmount}
            </h2>
          </div>
          <button
            className="bg-[#0B7077] hover:bg-[#329aa1] p-2 rounded-md text-white capitalize"

            onClick={handleRegisterClick}>

            enroll now
          </button>
        </div>
      </div>
    </div>
  );
};

export default slide;
