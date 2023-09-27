import Logo from "/src/assets/Logo_Cozmek_Black.png";

const NavBar = () => {
  // Contact
  const handleContactClick = () => {
    const footerRef = document.querySelector("#footer");
    if (footerRef) {
      footerRef.scrollIntoView({ behavior: "smooth" });
    }
  };
  // About
  const handleAboutClick = () => {
    const aboutRef = document.querySelector("#about");
    if (aboutRef) {
      aboutRef.scrollIntoView({ behavior: "smooth" });
    }
  };
  // Register
  const handleRegisterClick = () => {
    const registerRef = document.querySelector("#register");
    if (registerRef) {
      registerRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex-shrink-0 h-16 md:h-16 lg:h-16 shadow-lg flex items-center justify-between px-8 md:px-8 lg:px-14 text-black text-base md:text-lg lg:text-xl font-sans font-medium leading-6 tracking-tighter">
      <div className="flex gap-2 xs:gap-4 items-center md:justify-start justify-center ">
        <div className="container flex items-center p-0 m-0 gap-2 md:mr-10">
          <img
            className="w-8 h-8 xs:w-8 sx:h-8 lg:w-10 lg:h-10 flex-shrink-0 hover:cursor-pointer"
            src={Logo}
          />
          <span className="hidden md:inline uppercase font-bold text-xl lg:text-2xl">
            COZMEK
          </span>
        </div>
        <div className="text-[14px]">
          <button className="uppercase" onClick={handleContactClick}>
            Contact
          </button>
        </div>
        <div className="text-[14px]">
          <button className="uppercase" onClick={handleAboutClick}>
            About
          </button>
        </div>
        <div className="text-[14px]">
          <button className="uppercase" onClick={handleRegisterClick}>
            Register
          </button>
        </div>
      </div>
      <div className="hidden md:block">
        <h1>Welcome You !...</h1>
      </div>
    </div>
  );
};

export default NavBar;
