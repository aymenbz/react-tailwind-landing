import React from "react";
import bgHead from "../assets/images/bg-head.png";
import heroVideo from "../assets/images/hero-video.png";

function Hero() {
  return (
    <section className="hero">
      <img src={bgHead} className="absolute top-0 right-0 -z-1" alt="" />
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap px-6">
          <div className="hero-content w-full lg:w-1/2">
            <div className="text-primary text-base font-semibold uppercase tracking-wider">
              Coming soon
            </div>
            <h1 className="text-secondary font-extrabold text-4xl md:text-6xl leading-tight">
              Data to enrich your <br />
              <span className="text-indigo tracking-tight">
                online business
              </span>
            </h1>
            <p className="hero-info text-primary font-normal text-xl mt-5 leading-relaxed">
              Nulla viverra urna facilisis amet, vitae sapien. Velit feugiat
              tortor nisl eu faucibus dolor mauris. Malesuada tincidunt rutrum
              turpis vitae sed euismod urna etiam mi. Vitae, rutrum quis enim
              integer.
            </p>
            <div>
              <span className="block mt-6 mb-5">
                Sign up to get notified when it’s ready.
              </span>
              <form className="w-full max-w-none lg:max-w-sm">
                <div className="flex items-center border border-1 border-primary rounded-md py-1 pr-1">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 pl-5 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Enter your email"
                    aria-label="Email"
                  />
                  <button
                    className="flex-shrink-0 bg-primary text-white text-sm py-3 px-4 rounded-md text-base font-semibold"
                    type="button"
                    style={{ backgroundColor: "#2D3748" }}
                  >
                    Notify me
                  </button>
                </div>
              </form>
              <p className="text-primary text-sm mt-6 mb-0">
                We care about the protection of your data. Read our
                <strong className="underline text-secondary">
                  Privacy Policy
                </strong>
                .
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 mx-auto mt-8 lg:mt-0 flex items-center justify-center">
            <img
              src={heroVideo}
              className="shadow-2xl"
              width="480"
              height="310"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
