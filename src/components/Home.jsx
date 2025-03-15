import React from "react";
import Header from "./header";
// import skinCare from "../assets/Sophisticated skincare.png";
import leftArrow from "../assets/buttin-icon-shrunk.png";
import rightArrow from "../assets/buttin-icon-shrunk-2.png";
import leftRectangle from "../assets/Rectangle 2779.png";
import rightRectangle from "../assets/Rectangle 2778.png";

const Home = () => {
  return (
    <>
      <Header />
      <section className="w-full sm:py-32 py-20 sm:px-5 px-5 h-screen flex items-center ">
        <div className="w-full flex justify-center items-center">
          <div className="flex items-center gap-2s uppercase text-sm">
            <img
              id="hero-btn"
              className="absolute left-6 "
              src={leftArrow}
              alt=""
            />
            <div className="flex justify-center items-center">
              <p className="absolute left-20">Discover A.I.</p>
            </div>

            <div className="flex justify-center items-center">
              <img className="absolute left-0" src={leftRectangle} alt="" />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center font-light text-8xl">
            <p className="">Sophisticated</p>
            <p>skincare</p>
          </div>

          <div className="flex items-center gap-2 uppercase text-sm">
            <img className="absolute right-2" src={rightRectangle} alt="" />
            <p className="absolute right-20">Take Test</p>
            <img
              id="home-btn"
              className="absolute right-6"
              src={rightArrow}
              alt=""
            />
          </div>
        </div>

        <div className="w-[25%] flex items-center absolute bottom-0 left-0 uppercase text-sm px-7 ">
          <p>
            Skinstric developed an A.I. that creates a highly-personalised
            routine tailored to what your skin needs.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
