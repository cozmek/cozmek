import React from "react";

const TrustedSection = () => {
  return (
    <section className="bg-white">
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
        <div className="col-span-2 mb-8">
          <p className="text-lg font-medium text-[#33A1B0] ">
            Trusted Worldwide
          </p>
          <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-500 md:text-3xl">
            Trusted by over serveral users and several teams
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Our rigorous security and compliance standards are at the heart of
            all we do. We work tirelessly to protect you and your future.
          </p>
          <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
            <a
              href="#"
              className="inline-flex items-center text-base font-medium "
            >
              Connect us on{" "}
              <span className="ml-2 font-bold text-[#33A1B0]   ">
                cozmekinfo@gmail.com
              </span>
            </a>
          </div>
        </div>
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          <div>
            <svg
              className="w-10 h-10 mb-2 text-[#33A1B0] md:w-12 md:h-12 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="mb-2 text-2xl font-bold ">99.99% uptime</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
            For our platform, with zero maintenance downtime
            </p>
          </div>
          <div>
            <svg
              className="w-10 h-10 mb-2 text-[#33A1B0] md:w-12 md:h-12 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
            </svg>
            <h3 className="mb-2 text-2xl font-bold ">2000+ Users</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
            Trusted by over several students around the world
            </p>
          </div>
          <div>
            <svg
              className="w-10 h-10 mb-2 text-[#33A1B0] md:w-12 md:h-12 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="mb-2 text-2xl font-bold ">10+ Places</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
            Our platform is used in over 10+ places to enhance education
            </p>
          </div>
          <div>
            <svg
              className="w-10 h-10 mb-2 text-[#33A1B0] md:w-12 md:h-12 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
            <h3 className="mb-2 text-2xl font-bold ">5+ Courses</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
            Courses completed per day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
