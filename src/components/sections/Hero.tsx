
export const Hero = () => {
  return (
    <section className="relative mt-10 px-[120px] py-0 max-md:px-10 max-md:py-0">
      <div className="absolute w-[960px] h-[600px] blur-[32px] rounded-full -left-32 top-[143px]" />
      <div className="text-xs font-semibold text-[#5C2E2E] tracking-[0.3px] bg-[rgba(92,46,46,0.10)] px-3 py-1 rounded-full inline-block animate-fade-in">
        JOIN US NOW
      </div>
      <div className="flex flex-col gap-[30px] max-w-[612px] mt-[30px] animate-slide-up">
        <h1 className="text-5xl leading-[60px] tracking-[-1.5px] text-[#202124] max-sm:text-4xl max-sm:leading-[48px]">
          <span>
            The First Comprehensive Mineral Title Review Platform for{" "}
          </span>
          <span className="text-[#5C2E2E]">Title Attorneys</span>
        </h1>
        <p className="text-lg leading-[29px] text-[rgba(32,33,36,0.80)] max-sm:text-base">
          Stop manually drawing flowcharts. Stop manually calculating mineral
          ownership. Stop manually populating reports and opinions.
        </p>
        <div className="flex items-center gap-[30px] max-sm:flex-col max-sm:w-full">
          <button className="text-base font-medium text-white shadow-[0_4px_14px_rgba(92,46,46,0.25)] cursor-pointer bg-[#5C2E2E] px-[27px] py-3.5 rounded-[10px] border-[none] max-sm:w-full transform transition-transform duration-300 hover:scale-105 active:scale-95">
            Join the Early Access Program
          </button>
          <button className="flex items-center gap-2.5 text-base font-medium text-[#5C2E2E] cursor-pointer group">
            Learn more
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5C2E2E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-2 mt-5">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="w-8 h-8 text-xs font-medium text-[#202124] bg-neutral-200 rounded-full border-2 border-solid border-white flex items-center justify-center"
            >
              {num}
            </div>
          ))}
          <div className="text-sm text-[rgba(32,33,36,0.80)] ml-5">
            <strong>200+</strong> title attorneys already joined
          </div>
        </div>
      </div>
      <div className="absolute w-[536px] h-[493px] overflow-hidden shadow-[0_10px_25px_-3px_rgba(0,0,0,0.05)] rounded-xl right-[120px] top-[205px] max-md:relative max-md:mt-10 max-md:right-auto animate-fade-in">
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-[rgba(92,46,46,0.15)]">
          <button className="w-16 h-16 flex items-center justify-center shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)] bg-[rgba(92,46,46,0.90)] rounded-full transform transition-all duration-300 hover:scale-110 hover:bg-[rgba(92,46,46,1.0)]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform transition-transform duration-300 translate-x-0.5"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </button>
          <span className="text-sm font-medium text-[rgba(32,33,36,0.80)]">
            Watch Demo
          </span>
        </div>
      </div>
    </section>
  );
};
