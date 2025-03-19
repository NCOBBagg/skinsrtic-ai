import Header from "./header";
import rightArrow from "../assets/buttin-icon-shrunk-2.png";
import rightRectangle from "../assets/Rectangle 2778.png";


const Landing = () => {
  return (
    <>
      <Header />
      <section className="w-full sm:py-32 py-20 sm:px-5 px-5 h-screen flex items-center overflow-hidden">
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center absolute left-8 font-light text-8xl">
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

export default Landing;
