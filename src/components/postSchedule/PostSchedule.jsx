import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const PostSchedule = () => {
  return (
    <div className="max-w-6xl mx-auto px-2 lg:px-0 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 items-center justify-center">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-3xl text-[#034D82] leading-snug">
            Schedule Your Post <br/> Whenever You Want
          </h2>
          <p className="text-[#90A3B4] leading-8 text-base -tracking-tighter">
          Publish your content automatically to ensure that your content <br/> reaches the right people. Built-in features such as
          </p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-2"><IoMdCheckmarkCircleOutline className="text-[#18B7E7]" /> <span className="text-[#90A3B4] text-base">Best Time to Post</span></li>
            <li className="flex items-center gap-2"><IoMdCheckmarkCircleOutline className="text-[#18B7E7]" /> <span className="text-[#90A3B4] text-base">Geolocation</span></li>
            <li className="flex items-center gap-2"><IoMdCheckmarkCircleOutline className="text-[#18B7E7]" /> <span className="text-[#90A3B4] text-base">User Tag</span></li>
            <li className="flex items-center gap-2"><IoMdCheckmarkCircleOutline className="text-[#18B7E7]" /> <span className="text-[#90A3B4] text-base">Others benefit</span></li>
          </ul>
          <button className="text-[#04AADD] flex items-center gap-2 font-bold text-base mt-2">
            <span>Learn about scheduled post </span> <FaArrowRightLong />
          </button>
        </div>
        <div className="flex justify-center md:justify-end items-center">
          <img
            className="w-full md:-mb-16"
            src="https://i.ibb.co/RSf2TJs/Device-Macbook-Pro.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PostSchedule;
