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
      <section className="w-full h-screen flex items-center ">
        <div className="w-full h-5 flex justify-center items-center space-x-96">
          <div className="flex items-center gap-3 uppercase text-sm">
            <img className="" src={leftArrow} alt="" />
            <p>Discover A.I.</p>
            <img className="absolute left-0" src={leftRectangle} alt="" />
          </div>

          <div className="flex flex-col justify-center items-center font-light text-8xl">
            <p className="">Sophisticated</p>
            <p>skincare</p>
          </div>

          <div className="flex items-center gap-3 uppercase text-sm">
            <img className="absolute right-0" src={rightRectangle} alt="" />
            <p>Take Test</p>
            <img src={rightArrow} alt="" />
          </div>
        </div>

        <div className="w-[25%] flex items-center absolute bottom-0 left-0 uppercase text-sm px-7">
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
