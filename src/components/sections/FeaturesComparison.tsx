
const ManualProcess = () => (
  <div className="w-[48%] max-md:w-full max-md:mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
    <h2 className="text-4xl font-light text-[#202124] mb-10">
      Manual Processes
    </h2>
    {[
      {
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#5C2E2E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 3V15" />
            <circle cx="18" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <path d="M18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18" />
          </svg>
        ),
        text: "Manually drawing flowchart shapes and copying over information",
      },
      {
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#5C2E2E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <path d="M8 6h8M16 14v4M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01" />
          </svg>
        ),
        text: "Manually tracking and calculating complex conveyances",
      },
      {
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#5C2E2E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
          </svg>
        ),
        text: "Manually moving document details from runsheets, to flowcharts, to conveyance calculations, to reports",
      },
    ].map((item, index) => (
      <div 
        key={index} 
        className="flex items-start gap-[25px] mb-[30px] opacity-0 animate-fade-slide-up"
        style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: "forwards" }}
      >
        <div className="w-10 h-10 flex items-center justify-center bg-[rgba(92,46,46,0.10)] rounded-[10px]">
          {item.icon}
        </div>
        <div className="text-lg leading-7 text-[rgba(34,34,34,0.80)]">
          {item.text}
        </div>
      </div>
    ))}
  </div>
);

const Solution = () => (
  <div className="w-[48%] max-md:w-full max-md:mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
    <h2 className="text-4xl font-light text-[#202124] mb-10">Our Solution</h2>
    {[
      'Smart "file-to-runsheet" links that take you to the information you need – stop digging through folders and files',
      'Smart "runsheet-to-flowchart" shape generation - Never draw a box or rewrite a date again',
      "Instrument based mineral rights conveyance inputs and automated calculations are accessible from the flowchart shapes",
      "Customizable and autopopulated first draft mineral ownership reports, drilling opinions, and division orders.",
    ].map((text, index) => (
      <div 
        key={index} 
        className="flex items-start gap-[25px] mb-[30px] opacity-0 animate-fade-slide-up"
        style={{ animationDelay: `${0.5 + index * 0.1}s`, animationFillMode: "forwards" }}
      >
        <div className="w-8 h-8 text-xs font-medium text-[#202124] bg-neutral-200 rounded-[10px] border-2 border-solid border-white flex items-center justify-center">
          {String(index + 1).padStart(2, "0")}
        </div>
        <div className="text-lg leading-7 text-[rgba(34,34,34,0.80)]">
          {text}
        </div>
      </div>
    ))}
  </div>
);

export const FeaturesComparison = () => {
  return (
    <section className="flex justify-between mx-0 my-[100px] px-[120px] py-0 max-md:flex-col max-md:px-10 max-md:py-0">
      <ManualProcess />
      <Solution />
    </section>
  );
};
