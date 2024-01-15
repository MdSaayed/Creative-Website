
const Banner = () => {
  return (
    <div className="bg-[#00a8db] pt-10 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 lg:gap-6 justify-center md:items-center max-w-6xl mx-auto px-2 lg:px-0 pt-8 lg:py-16 text-white">
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            We help you
            <br /> grow your business <br />
            <span className="relative">
              faster
              <span className="absolute top-14 left-0">
                <img src="https://i.ibb.co/Tgnqw3j/Vector.png" alt="" />
              </span>
            </span>
          </h1>
          <p className="mt-12 mb-8">
            Ehya is the Instagram analytics platform teams use to stay
            <br /> focused on the goals, track engagement for report your
            <br /> business .
          </p>
          <div className="flex gap-4">
            <button className="bg-white px-4 py-2 rounded-sm text-[#00A8DB] font-medium" style={{ transition: "background-color 1s, color 1s" }}>
              See how it works
            </button>
            <button className="hover:bg-white px-4 py-2 rounded-sm hover:text-[#00A8DB] text-white font-medium" style={{ transition: "background-color 1s, color 1s" }}>
              Get a free demo
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img className="-mb-20 -mr-4 lg:-mb-36  lg:-mr-48 " src="https://i.ibb.co/Kz6STFm/Group-19-2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
