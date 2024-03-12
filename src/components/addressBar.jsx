const addressBar = () => {
  return (
    <div className="h-6 md:h-8 lg:h-8  xs:text-[0.6rem] md:text-[0.8rem] 2xl:text-[1rem] text-[8px] bg-[#33A1B0] flex md:gap-4 gap-2  text-white font-montserrat  font-medium  leading-6 tracking-wider items-center justify-center md:justify-center  lg:justify-end pe-4">
      <div>
        <span className="hidden md:inline-block">Email:</span>{" "}
        <a href="mailto:cozmekinfo@gmail.com">cozmekinfo@gmail.com</a>
      </div>
      <div>
        <span className="hidden md:inline-block ">Phone:</span>
        <a href="tel:+919061401943">+919061401943</a>,{" "}
        <a href="tel:+917510747180">+917510747180</a>
      </div>
    </div>
  );
};

export default addressBar;
