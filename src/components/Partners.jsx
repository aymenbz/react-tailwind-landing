import React from "react";
import level from "../assets/images/level.png";
import tuple from "../assets/images/tuple.png";
import workcation from "../assets/images/workcation.png";

function Partners() {
  return (
    <section className="partners">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row lg:flex-row flex-wrap items-center justify-between">
          <div className="w-none lg:w-1/5 px-2 mb-10 sm:mb-6">
            <img src={workcation} alt="" />
          </div>
          <div className="w-none lg:w-1/5 px-2 mb-10 sm:mb-6">
            <img src={level} alt="" />
          </div>
          <div className="w-none lg:w-1/5 px-2 mb-10 sm:mb-6">
            <img src={tuple} alt="" />
          </div>
          <div className="w-none lg:w-1/5 px-2 mb-10 sm:mb-6">
            <img src={workcation} alt="" />
          </div>
          <div className="w-none lg:w-1/5 px-2 mb-10 sm:mb-6">
            <img src={level} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
