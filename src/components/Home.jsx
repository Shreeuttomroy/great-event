import { useLoaderData } from "react-router-dom";
import image from "./meet.png";
import Support from "./support.png";
import Card from "./Card";
function Home() {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <div>
        {/* banner section  */}
        <div className=" h-[1000px] md:h-[500px] w-full relative">
          <div className=" bg-gradient-to-bl from-transparent to-[#a7f3d06e] h-full w-full relative"></div>
          <div className=" w-full h-full bottom-0 flex justify-center absolute">
            <div className=" self-center flex justify-around h-full flex-wrap w-full">
              <div className=" w-full md:w-1/2 flex order-2 lg:order-1 justify-center">
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
              <img className="h-[500px] order-1 md:order-2 w-full md:w-1/2" src={image} alt="" />
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
        <div className=" w-full flex flex-wrap my-6 lg:flex-nowrap">
          <div className=" w-fit mx-auto lg:w-1/2 order-2 flex justify-center">
            <img className=" w-64 h-96" src={Support} alt="Support" />
          </div>
          <div className=" w-fit mx-auto order-1 lg:w-1/2 flex justify-center">
            <div className=" self-center my-10">
              <h1 className=" font-bold text-3xl my-5">24/7 customer support</h1>
              <p className=" text-lg font-medium w-96">
                We were really thrilled with the steps the team took to hold our
                hands as first-time customers, and we really felt that level of
                support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
