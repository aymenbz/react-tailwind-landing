import React from "react";
import "./App.css";
import Logo from "./assets/images/logo.svg";
import heroVideo from "./assets/images/hero-video.png";
import camera from "./assets/images/icons/camera.svg";
import business from "./assets/images/icons/business.svg";
import paymentCard from "./assets/images/icons/payment-card.svg";
import reload from "./assets/images/icons/reload.svg";
import badge from "./assets/images/icons/badge.svg";

function App() {
  return (
    <div>
      <div className="container mx-auto px-6">
        <nav
          className="flex items-center justify-between flex-wrap "
          style={{ paddingTop: "4rem" }}
        >
          <div
            className="flex items-center flex-shrink-0 "
            style={{ marginRight: "3rem" }}
          >
            <img src={Logo} alt="" />
          </div>
          <div className="block lg:hidden">
            <button className="hamburger-menu flex items-center px-3 py-2 rounded text-primary ">
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                className="fill-current h-4 w-4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path
                  d="M0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H1C0.447715 2 0 1.55228 0 1Z"
                  fill="#64748B"
                />
                <path
                  d="M0 7C0 6.44772 0.447715 6 1 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H1C0.447715 8 0 7.55228 0 7Z"
                  fill="#64748B"
                />
                <path
                  d="M1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14H8C8.55228 14 9 13.5523 9 13C9 12.4477 8.55228 12 8 12H1Z"
                  fill="#64748B"
                />
              </svg>
            </button>
          </div>

          <div className="main-menu w-full flex-grow block lg:flex lg:w-auto lg:items-center hidden lg:block">
            <div className="text-sm lg:flex-grow">
              <a
                href="#"
                className="mr-4 mt-4 block lg:inline-block lg:mt-0 text-base text-secondary"
              >
                Changelog
              </a>
              <a
                href="#"
                className="mr-4 mt-4 block lg:inline-block lg:mt-0 text-base text-secondary"
              >
                About
              </a>
              <a
                href="#"
                className="mr-4 mt-4 block lg:inline-block lg:mt-0 text-base text-secondary"
              >
                Partners
              </a>
              <a
                href="#"
                className="mr-4 mt-4 block lg:inline-block lg:mt-0 text-base text-secondary"
              >
                News
              </a>
            </div>
            <div>
              <a
                href="#"
                className="inline-block bg-white rounded-md p-3 px-6 shadow-md text-indigo text-base font-medium mt-4 lg:mt-0"
              >
                Login
              </a>
            </div>
          </div>
        </nav>
      </div>
      <section className="hero">
        <img
          src="images/bg-head.png"
          className="absolute top-0 right-0 -z-1"
          alt=""
        />
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
                  Tincidunt egestas sit viverra in tincidunt morbi elit
                  ultricies vel. Adipiscing nibh posuere aliquam sed iaculis sed
                  facilisis vulputate convallis.
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
                  Donec nisl libero nulla sit at orci, placerat. Vitae
                  consectetur molestie eget placerat. Vitae et proin amet nulla
                  nisl.
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
                  Nunc, porttitor vulputate feugiat elementum. Dignissim nullam
                  in netus sem rhoncus natoque egestas tincidunt. .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />
      <section className="partners">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row lg:flex-row flex-wrap items-center justify-between">
            <div className="w-none lg:w-1/5 px-2 mb-10 sm:mb-6">
              <img src="images/workcation.png" alt="" />
            </div>
            <div className="w-none lg:w-1/5 px-2 mb-10 sm:mb-6">
              <img src="images/level.png" alt="" />
            </div>
            <div className="w-none lg:w-1/5 px-2 mb-10 sm:mb-6">
              <img src="images/tuple.png" alt="" />
            </div>
            <div className="w-none lg:w-1/5 px-2 mb-10 sm:mb-6">
              <img src="images/workcation.png" alt="" />
            </div>
            <div className="w-none lg:w-1/5 px-2 mb-10 sm:mb-6">
              <img src="images/level.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="money-transfer pb-32">
        <div className="container mx-auto">
          <div className="text-center pb-20">
            <h2 className="text-secondary text-4xl font-extrabold">
              A better way to send money
            </h2>
            <p className="text-primary text-xl">
              Quam hendrerit et scelerisque nulla pharetra in. Elementum urna
              risus enim aliquet <br />
              pharetra nam tellus. Sem dolor sapien.
            </p>
          </div>
          <div className="flex flex-row flex-wrap mb-32">
            <div className="w-full lg:w-1/2 px-4">
              <h3 className="text-3xl text-secondary font-extrabold mb-4">
                Single-click transfers
              </h3>
              <p className="text-lg text-primary font-normal mb-10">
                Non sollicitudin lobortis quis quis vel, sem nisl turpis. Arcu
                libero volutpat amet, elementum. Enim interdum potenti platea
                purus imperdiet hac. Tristique at egestas porttitor in leo.
                Pharetra id ornare netus venenatis arcu auctor.
              </p>
              <div className="flex mb-6">
                <img src={paymentCard} className="main-icon pr-6 pl-0" alt="" />
                <div>
                  <h4 className="text-lg font-medium">
                    Accept any type of card
                  </h4>
                  <p className="text-base font-normal text-primary">
                    Vitae lorem ullamcorper aliquam nec. Dignissim vestibulum
                    turpis morbi adipiscing suspendisse. Nibh pretium nunc
                    varius morbi.
                  </p>
                </div>
              </div>
              <div className="flex mb-6">
                <img src={reload} className="main-icon pr-6 pl-0" alt="" />
                <div>
                  <h4 className="text-lg font-medium">
                    Instant status updates
                  </h4>
                  <p className="text-base font-normal text-primary">
                    Nibh et et gravida elementum eu vivamus montes, ac. Et eget
                    cursus nunc pulvinar quis bibendum. Gravida massa hac auctor
                    egestas mauris id mattis.
                  </p>
                </div>
              </div>
              <div className="flex mb-6">
                <img src={paymentCard} className="main-icon pr-6 pl-0" alt="" />
                <div>
                  <h4 className="text-lg font-medium">
                    Accept any type of card
                  </h4>
                  <p className="text-base font-normal text-primary">
                    Vitae lorem ullamcorper aliquam nec. Dignissim vestibulum
                    turpis morbi adipiscing suspendisse. Nibh pretium nunc
                    varius morbi.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 flex justify-center self-start">
              <div className="max-w-md rounded-md bg-white shadow-lg px-6 py-4">
                <div className="flex">
                  <img src={camera} className="main-icon" alt="" />
                  <div className="ml-6">
                    <h4 className="text-base text-secondary">Send money</h4>
                    <p className="text-primary text-sm">
                      Select a recipient and the amount you want to send
                    </p>
                  </div>
                </div>
                <div>
                  <label className="text-secondary text-sm mb-2 mt-4 block font-medium">
                    Recipient
                  </label>
                  <div className="inline-block relative w-full">
                    <select className="block appearance-none w-full bg-white border border-gray-400 px-4 py-3 rounded-md text-secondary text-base">
                      <option value="test1">Molly Sanders</option>
                      <option value="test2">test 2</option>
                      <option value="test3">test 3</option>
                      <option value="test4">test 4</option>
                    </select>
                    <div className="pointer-events-none absolute right-0 inset-y-0 flex items-center px-2 text-gray-500">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div className="amount">
                  <label className="text-secondary text-sm mb-2 mt-4 block font-medium mt-6">
                    How much do you want to send
                  </label>
                  <div className="flex flex-wrap flex-column items-stretch w-full mb-4 relative ">
                    <input
                      type="text"
                      className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-grey-light rounded rounded-r-none px-3 py-3 relative"
                      placeholder="Amount"
                      value="$1000"
                    />
                    <div className="flex -mr-px inline-block relative w-32">
                      <select className="block appearance-none w-full bg-white border border-gray-400 px-3 rounded-md text-secondary text-sm text-secondary font-medium uppercase border-l-0 border-grey-light rounded rounded-l-none border">
                        <option value="CAD">CAD</option>
                      </select>
                      <div className="pointer-events-none absolute right-0 inset-y-0 flex items-center px-2 text-gray-500">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div>table here</div>

                <div className="amount">
                  <label className="text-secondary text-sm mb-2 mt-4 block font-medium mt-6">
                    How much do you want to send
                  </label>
                  <div className="flex flex-wrap flex-column items-stretch w-full mb-4 relative ">
                    <input
                      type="text"
                      className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-grey-light rounded rounded-r-none px-3 py-3 relative"
                      placeholder="Amount"
                      value="$1000"
                    />
                    <div className="flex -mr-px inline-block relative w-32">
                      <select className="block appearance-none w-full bg-white border border-gray-400 px-3 rounded-md text-secondary text-sm text-secondary font-medium uppercase border-l-0 border-grey-light rounded rounded-l-none border">
                        <option value="USD">USD</option>
                      </select>
                      <div className="pointer-events-none absolute right-0 inset-y-0 flex items-center px-2 text-gray-500">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap">
            <div className="w-full lg:w-1/2 px-2">zefzefze</div>
            <div className="w-full lg:w-1/2 px-2">
              <h3 className="text-3xl text-secondary font-extrabold mb-4">
                Single-click transfers
              </h3>
              <p className="text-lg text-primary font-normal mb-10">
                Non sollicitudin lobortis quis quis vel, sem nisl turpis. Arcu
                libero volutpat amet, elementum. Enim interdum potenti platea
                purus imperdiet hac. Tristique at egestas porttitor in leo.
                Pharetra id ornare netus venenatis arcu auctor.
              </p>
              <div className="flex mb-6">
                <img src={paymentCard} className="main-icon pr-6 pl-0" alt="" />
                <div>
                  <h4 className="text-lg font-medium">
                    Accept any type of card
                  </h4>
                  <p className="text-base font-normal text-primary">
                    Vitae lorem ullamcorper aliquam nec. Dignissim vestibulum
                    turpis morbi adipiscing suspendisse. Nibh pretium nunc
                    varius morbi.
                  </p>
                </div>
              </div>
              <div className="flex mb-6">
                <img src={reload} className="main-icon pr-6 pl-0" alt="" />
                <div>
                  <h4 className="text-lg font-medium">
                    Instant status updates
                  </h4>
                  <p className="text-base font-normal text-primary">
                    Nibh et et gravida elementum eu vivamus montes, ac. Et eget
                    cursus nunc pulvinar quis bibendum. Gravida massa hac auctor
                    egestas mauris id mattis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
