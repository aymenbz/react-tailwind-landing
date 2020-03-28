import React from "react";
import camera from "../assets/images/icons/camera.svg";
import paymentCard from "../assets/images/icons/payment-card.svg";
import reload from "../assets/images/icons/reload.svg";

function MoneyTransfer() {
  return (
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
                <h4 className="text-lg font-medium">Accept any type of card</h4>
                <p className="text-base font-normal text-primary">
                  Vitae lorem ullamcorper aliquam nec. Dignissim vestibulum
                  turpis morbi adipiscing suspendisse. Nibh pretium nunc varius
                  morbi.
                </p>
              </div>
            </div>
            <div className="flex mb-6">
              <img src={reload} className="main-icon pr-6 pl-0" alt="" />
              <div>
                <h4 className="text-lg font-medium">Instant status updates</h4>
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
                <h4 className="text-lg font-medium">Accept any type of card</h4>
                <p className="text-base font-normal text-primary">
                  Vitae lorem ullamcorper aliquam nec. Dignissim vestibulum
                  turpis morbi adipiscing suspendisse. Nibh pretium nunc varius
                  morbi.
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
                <h4 className="text-lg font-medium">Accept any type of card</h4>
                <p className="text-base font-normal text-primary">
                  Vitae lorem ullamcorper aliquam nec. Dignissim vestibulum
                  turpis morbi adipiscing suspendisse. Nibh pretium nunc varius
                  morbi.
                </p>
              </div>
            </div>
            <div className="flex mb-6">
              <img src={reload} className="main-icon pr-6 pl-0" alt="" />
              <div>
                <h4 className="text-lg font-medium">Instant status updates</h4>
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
  );
}

export default MoneyTransfer;
