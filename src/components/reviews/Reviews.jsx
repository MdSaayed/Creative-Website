import React, { useEffect, useRef, useState } from "react";
import { IoMdStar } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Reviews.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);

  return (
    <div className="max-w-6xl mx-auto px-2 lg:px-0 py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="flex flex-col gap-4 ">
          <h2 className="font-bold text-3xl text-[#034D82] leading-snug">
            Powering the growth of
            <br /> 100+ business & retailers
            <br /> in Indonesia.
          </h2>
          <p className="text-[#90A3B4] leading-8 text-base -tracking-tighter">
            From single store, startups, to large multi-store brands.
          </p>
        </div>
        <div>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
             {
                    reviews?.map((review,idx)=> <div key={idx}>
                    
            <SwiperSlide>
              <div className="pt-8 pl-8 pr-8">
             
                <div className="flex gap-2 items-end">
                  <img
                    className="w-[30px]"
                    src="https://i.ibb.co/BT7TYCZ/image.png"
                    alt=""
                  />
                  <div className="flex   text-yellow-400">
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </div> 
                </div>
                <div className="my-4 px-10 pb-3">
                  <p className="text-base text-[#90A3B4] italic">
                    {review?.review}
                  </p>
                  <div className="flex gap-4 mt-4">
                    <img className="h-[50px] w-[50px] rounded-full" src={review.img} alt="" />
                    <div className="text-left">
                      <h3 className="font-bold text-[#034D82]">{review.name}</h3>
                      <p className="text-[#90A3B4] leading-7 text-base">
                        {review.companyName}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
                    </div>)
                  }
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
