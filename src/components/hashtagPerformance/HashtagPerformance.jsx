const HashtagPerformance = () => {
  return (
    <div className="py-16 bg-[#EFFBFF]">
      <div className="max-w-6xl mx-auto px-2 lg:px-0">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="font-bold text-3xl text-center text-[#034D82] leading-snug">
            Track any hashtag(s) Performance
          </h2>
          <p className="text-[#90A3B4] leading-8 text-base -tracking-tighter">
            Don’t waste time on search manual tasks. Let Automation do it for
            you.
            <br /> Simplify workflows, reduce errors, and save time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8 mt-14">
          <div className="bg-white space-y-4 p-6 rounded shadow-sm-light hover:shadow-2xl">
            <img
              className="w-[45px]"
              src="https://i.ibb.co/tLWNz3P/Group-30.png"
              alt=""
            />
            <div className="space-y-4">
              <h2 className="text-[#034D82] font-bold text-xl">
                Hashtag Growth
              </h2>
              <p className="text-[#8EA9C1] text-[15px] -tracking-[0.3px]">
                Follow a hashtag growth total posts, videos and images.
              </p>
            </div>
          </div>
          <div className="bg-white space-y-4 p-6 rounded shadow-sm-light hover:shadow-2xl">
            <img
              className="w-[45px]"
              src="https://i.ibb.co/YRSpX2X/Group-30-1.png"
              alt=""
            />
            <div className="space-y-4">
              <h2 className="text-[#034D82] font-bold text-xl">
                Influencers by
                <br /> Hashtag
              </h2>
              <p className="text-[#8EA9C1] text-[15px] -tracking-[0.3px]">
                Identify the most influential people posting with your hashtag.
              </p>
            </div>
          </div>
          <div className="bg-white space-y-4 p-6 rounded shadow-sm-light hover:shadow-2xl">
            <img
              className="w-[45px]"
              src="https://i.ibb.co/0q4y332/Group-30-2.png"
              alt=""
            />
            <div className="space-y-4">
              <h2 className="text-[#034D82] font-bold text-xl">
                Most Influental Post
              </h2>
              <p className="text-[#8EA9C1] text-[15px] -tracking-[0.3px]">
                See the most influential
                <br /> posts on hashtag you
                <br /> are following on.
              </p>
            </div>
          </div>
          <div className="bg-white space-y-4 p-6 rounded shadow-sm-light hover:shadow-2xl">
            <img
              className="w-[45px]"
              src="https://i.ibb.co/hZkh19K/Group-30-3.png"
              alt=""
            />
            <div className="space-y-4">
              <h2 className="text-[#034D82] font-bold text-xl">
                Hashtag Location
              </h2>
              <p className="text-[#8EA9C1] text-[15px] -tracking-[0.3px]">
                Visualize where people are posting using your hashtag made.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HashtagPerformance;
