import { useLoaderData } from "react-router-dom";
import image from "./meet.png";
import Support from "./support.png";
import Managed from "./managed.png";
import Card from "./Card";
function Home() {
  const data = useLoaderData();
  return (
    <>
      <div>
        {/* banner section  */}
        <div className=" h-[1000px] md:h-[500px] w-full relative">
          <div className=" bg-gradient-to-bl from-transparent to-[#a7f3d06e] h-full w-full relative"></div>
          <div className=" w-full h-full bottom-0 flex justify-center absolute">
            <div className=" self-center flex justify-around h-full flex-wrap w-full">
              <div
                data-aos="fade-down-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className=" w-full md:w-1/2 flex order-2 lg:order-1 justify-center">
                <div className="h-fit w-[350px] self-center">
                  <h1 className=" my-5 text-4xl font-bold">
                    To Manage Your Event As Better Way
                  </h1>
                  <ul className=" list-disc my-3 block ml-5 text-lg">
                    <li>Best hotels and venues</li>
                    <li>Attendece Engagement</li>
                    <li>Technology and AV</li>
                    <li>Event Branding and Promotion</li>
                  </ul>
                  <button className=" bg-blue-500 text-white rounded-md px-4 py-2 font-bold text-xl">
                    Booking Now
                  </button>
                </div>
              </div>
              <img
                data-aos="fade-up-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="h-[500px] order-1 md:order-2 w-full md:w-1/2"
                src={image}
                alt=""
              />
            </div>
          </div>
        </div>

        {/*services section */}
        <div>
          <div className=" w-full">
            <h1 className=" mt-10 w-fit mx-auto text-3xl font-bold">
              Services
            </h1>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6 justify-between">
            {data?.map((d) => (
              <Card key={d.id} d={d}></Card>
            ))}
          </div>
        </div>

        {/* 24 hours support */}
        <div className=" w-full flex flex-wrap my-10 lg:flex-nowrap">
          <div
            data-aos="fade-up-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className=" w-fit mx-auto lg:w-1/2 order-2 flex justify-center">
            <img className=" w-64 h-[400px]" src={Support} alt="Support" />
          </div>
          <div
            data-aos="fade-down-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="w-fit mx-auto order-1 lg:w-1/2 flex justify-center">
            <div className=" self-center my-10">
              <h1 className=" font-bold text-3xl my-5">
                24/7 customer support
              </h1>
              <p className=" text-lg font-medium border-l-2 pl-2 w-96">
                We were really thrilled with the steps the team took to hold our
                hands as first-time customers, and we really felt that level of
                support.
              </p>
            </div>
          </div>
        </div>

        {/* managed evnts */}
        <div className=" w-full flex flex-wrap my-10 lg:flex-nowrap">
          <div
            data-aos="fade-down-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className=" w-fit mx-auto lg:w-1/2 flex justify-center">
            <img className=" w-64 h-[400px]" src={Managed} alt="Support" />
          </div>
          <div
            data-aos="fade-up-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className=" w-fit mx-auto lg:w-1/2 flex justify-center">
            <div className=" self-center my-10">
              <h1 className=" font-bold text-3xl my-5">200+ Event Managed</h1>
              <p className=" text-lg font-medium border-l-2 pl-2 w-96">
                The way we were running the business before was all manual. So
                with the help of GreatEvent, automating supplier and venue
                searches, registration sites, apps…it brought us to a whole
                different level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
