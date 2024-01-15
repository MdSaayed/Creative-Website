import { FaArrowRightLong } from "react-icons/fa6";


const Impressions = () => {
  return (
    <div className="max-w-6xl mx-auto px-2 lg:px-0 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 items-center justify-center">
        <div className="flex justify-center md:justify-start items-center">
          <img className="w-[80%]" src="https://i.ibb.co/dt1n85V/Group-1000005656-1.png" alt="" />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-3xl text-[#034D82] leading-snug">Measure Impressions<br />and Reach Post</h2>
          <p className="text-[#90A3B4] leading-8 text-base -tracking-tighter">Graphs displaying your performance for metrics like follower evolution, average engagement rate per post and reach and impressions to give you the insights.</p>
          <button className="text-[#04AADD] flex items-center gap-2 font-bold text-base mt-2"><span>Learn about graphs</span> <FaArrowRightLong /></button>
        </div>
      </div>
    </div>
  );
};

export default Impressions;
