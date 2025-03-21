
export const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between px-8 md:px-12 py-12 gap-8">
      <div className="flex flex-col gap-6 max-w-[500px] animate-slide-up">
        <h1 className="text-4xl md:text-5xl font-normal text-[#333] leading-tight">
          The First Comprehensive<br />
          Mineral Title Review<br />
          Platform for<br />
          <span className="font-medium">Title Attorneys</span>
        </h1>
        <p className="text-base text-[#555]">
          Stop manually drawing flowcharts. Stop manually calculating 
          mineral interests. Stop manually populating reports and opinions.
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <button className="bg-[#5C2E2E] text-white px-6 py-3 rounded-md font-medium hover:bg-[#4a2525] transform transition-transform duration-300 hover:scale-105">
            Join the Early Access Program
          </button>
          <button className="flex items-center gap-2 text-[#5C2E2E] font-medium group">
            Learn more
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-2 mt-2">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="w-7 h-7 text-xs font-medium text-[#333] bg-neutral-200 rounded-full flex items-center justify-center"
            >
              {num}
            </div>
          ))}
          <div className="text-sm text-[#555] ml-2">
            <strong>200+</strong> title attorneys already joined
          </div>
        </div>
      </div>
      <div className="w-full md:w-[420px] h-[350px] bg-[#f0f0f0] rounded-lg flex items-center justify-center animate-fade-in">
        <button className="w-14 h-14 flex items-center justify-center shadow-md bg-[#5C2E2E] rounded-full transform transition-all duration-300 hover:scale-110">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </button>
      </div>
    </section>
  );
};
