
export const UploadSection = () => {
  return (
    <section className="text-center relative bg-[#FFD7D7] px-8 md:px-12 py-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <h2 className="text-2xl font-medium text-[#333] mb-8">
        Drag-and-drop to upload your landman provided files and runsheet
      </h2>
      <div className="relative h-[300px] md:h-[350px] max-w-[800px] mx-auto">
        {[...Array(6)].map((_, index) => (
          <img
            key={index}
            src="/lovable-uploads/10ecb98b-c4b6-4380-9cea-63df477de05f.png" 
            alt="Upload interface"
            className={`absolute w-full md:w-[80%] shadow-md rounded-md transition-all duration-500 hover:translate-x-1 hover:translate-y-1`}
            style={{
              left: `${10 + index * 10}px`,
              top: `${index * 10}px`,
              zIndex: 6 - index,
              transition: "all 0.5s ease",
              animationDelay: `${0.2 + index * 0.1}s`,
            }}
          />
        ))}
      </div>
      <div className="mt-8">
        <button className="bg-[#5C2E2E] text-white px-6 py-3 rounded-md font-medium hover:bg-[#4a2525] transform transition-transform duration-300 hover:scale-105">
          Join the Early Access Program
        </button>
      </div>
    </section>
  );
};
