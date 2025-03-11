import React from "react";
import Header from "./header";
import skinCare from "../assets/Sophisticated skincare.png";
import leftArrow from "../assets/buttin-icon-shrunk.png";
import rightArrow from "../assets/buttin-icon-shrunk-2.png";

const Home = () => {
  return (
    <>
      <Header />
      <section className="w-full h-screen flex items-center ">
        <div className="w-full h-5 flex justify-center items-center space-x-80">
          <div className="flex items-center gap-3 uppercase text-sm">
            <img className="" src={leftArrow} alt="" />
            <p>Discover A.I.</p>
          </div>

          <div className="">
            <img src={skinCare} alt="" />
          </div>

          <div className="flex items-center gap-3 uppercase text-sm">
            <p>Take Test</p>
            <img src={rightArrow} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
