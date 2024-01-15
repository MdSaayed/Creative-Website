import React from "react";

const JoinWithUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-2 lg:px-0 py-16 mb-8">
      <div
        className="relative bg-[#00B8D9] p-16 rounded grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-between"
        style={{
          backgroundImage: "url('https://i.ibb.co/zNMN12y/Group-42.png')",
          backgroundPosition: "right bottom",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <h3 className="text-white font-bold text-3xl leading-9">
            Grow your brand
            <br /> presence on social
            <br /> media
          </h3>
          <p className="text-white leading-8 text-base -tracking-tighter mt-4">
            Join with more 1200+ happy customers
          </p>
          <div className="flex items-center">
            <img className="w-[35px]" src="https://i.ibb.co/sg3LkwP/Item-1.png" alt="" />
            <img
              className="-ml-[15px] w-[35px]"
              src="https://i.ibb.co/XJ3RcY2/Item.png"
              alt=""
            />
            <img
              className="-ml-[15px] w-[35px]"
              src="https://i.ibb.co/MkLQ53x/Item-2.png"
              alt=""
            />
            <div>
              <p className="text-white leading-8 text-base -tracking-tighter ml-8">
                and others
              </p>
            </div>
          </div>
        </div>
        <div className="flex md:justify-end">
          <button className="bg-white px-4 py-2 rounded-sm text-[#00A8DB] font-medium transition duration-1000 ease-in-out">
          Get your trial now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinWithUs;
