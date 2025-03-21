
const ManualProcess = () => (
  <div className="w-full md:w-1/2 pr-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
    <h2 className="text-2xl font-medium text-[#333] mb-6">
      Manual Processes
    </h2>
    {[
      {
        icon: "✏️",
        text: "Manually drawing flowchart shapes and copying over information",
      },
      {
        icon: "🧮",
        text: "Manually tracking and calculating complex conveyances",
      },
      {
        icon: "📄",
        text: "Manually moving document details from runsheets, to flowcharts, to conveyance calculations, to reports",
      },
    ].map((item, index) => (
      <div 
        key={index} 
        className="flex items-start gap-4 mb-6 opacity-0 animate-fade-slide-up"
        style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: "forwards" }}
      >
        <div className="text-xl">{item.icon}</div>
        <div className="text-base text-[#555]">
          {item.text}
        </div>
      </div>
    ))}
  </div>
);

const Solution = () => (
  <div className="w-full md:w-1/2 pl-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
    <h2 className="text-2xl font-medium text-[#333] mb-6">Our Solution</h2>
    {[
      'Smart "file-to-runsheet" links that take you to the information you need – stop digging through folders and files',
      'Smart "runsheet-to-flowchart" shape generation - Never draw a box or rewrite a date again',
      "Instrument based mineral rights conveyance inputs and automated calculations are accessible from the flowchart shapes",
      "Customizable and autopopulated first draft mineral ownership reports, drilling opinions, and division orders.",
    ].map((text, index) => (
      <div 
        key={index} 
        className="flex items-start gap-4 mb-6 opacity-0 animate-fade-slide-up"
        style={{ animationDelay: `${0.5 + index * 0.1}s`, animationFillMode: "forwards" }}
      >
        <div className="min-w-8 h-8 text-sm font-medium text-[#333] bg-white rounded-md border border-[#ddd] flex items-center justify-center">
          {index + 1}
        </div>
        <div className="text-base text-[#555]">
          {text}
        </div>
      </div>
    ))}
  </div>
);

export const FeaturesComparison = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between bg-[#F9F9F9] py-12 px-8 md:px-12">
      <ManualProcess />
      <Solution />
    </section>
  );
};
