import React from "react";
import camera from "../assets/images/icons/camera.svg";
import business from "../assets/images/icons/business.svg";
import badge from "../assets/images/icons/badge.svg";

function Services() {
  return (
    <section className="services px-6">
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap">
          <div className="w-full lg:w-1/3 px-2">
            <div className="services__box">
              <img src={camera} className="p-3 pl-0" alt="" />
              <h3 className="font-medium mt-3 mb-2 text-lg text-secondary tracking-tight">
                Get cash quicker
              </h3>
              <p className="font-normal text-base text-primary">
                Tincidunt egestas sit viverra in tincidunt morbi elit ultricies
                vel. Adipiscing nibh posuere aliquam sed iaculis sed facilisis
                vulputate convallis.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-2">
            <div className="services__box">
              <img src={business} className="p-3 pl-0" alt="" />
              <h3 className="font-medium mt-3 mb-2 text-lg text-secondary tracking-tight">
                Make better choices for your business
              </h3>
              <p className="font-normal text-base text-primary">
                Donec nisl libero nulla sit at orci, placerat. Vitae consectetur
                molestie eget placerat. Vitae et proin amet nulla nisl.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-2">
            <div className="services__box mb-0">
              <img src={badge} className="p-3 pl-0" alt="" />
              <h3 className="font-medium mt-3 mb-2 text-lg text-secondary tracking-tight">
                Security first
              </h3>
              <p className="font-normal text-base text-primary">
                Nunc, porttitor vulputate feugiat elementum. Dignissim nullam in
                netus sem rhoncus natoque egestas tincidunt. .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
