
export const UploadSection = () => {
  return (
    <section className="text-center relative bg-[rgba(254,185,185,0.40)] px-[120px] py-10 max-md:p-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <h2 className="text-4xl font-light text-[#202124] mb-10">
        Drag-and-drop to upload your landman provided files and runsheet
      </h2>
      <div className="relative h-[500px] max-sm:h-[300px]">
        {[...Array(6)].map((_, index) => (
          <img
            key={index}
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1350600af41664f1ed017e010e633af37e0e4bc"
            alt="Upload interface"
            className={`absolute w-[1015px] h-[448px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-[10px] max-sm:w-full max-sm:h-auto transition-all duration-500 hover:translate-x-1 hover:translate-y-1`}
            style={{
              left: `${110 - index * 20}px`,
              top: `${index * 20}px`,
              zIndex: 6 - index,
              transition: "all 0.5s ease",
              animationDelay: `${0.2 + index * 0.1}s`,
            }}
          />
        ))}
      </div>
      <div className="absolute bottom-[-50px] w-[157px] h-[132px] text-[40px] font-bold text-[rgba(32,33,36,0.80)] bg-[rgba(229,229,229,0.44)] rounded-full border-2 border-solid border-white right-[200px] animate-bounce">
        →
      </div>
    </section>
  );
};
