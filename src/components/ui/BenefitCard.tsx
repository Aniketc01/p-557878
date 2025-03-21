
interface BenefitCardProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
}

export const BenefitCard = ({
  title,
  imageUrl,
  imageAlt,
}: BenefitCardProps) => {
  return (
    <div className="w-[580px] h-[415px] flex justify-between items-center border shadow-[0_5px_0_#191A23] p-[50px] rounded-[45px] border-solid border-[#191A23] max-md:w-full max-sm:p-[30px] transition-all duration-300 hover:shadow-[0_8px_0_#191A23] hover:translate-y-[-3px]">
      <div className="max-w-[250px] max-sm:max-w-full">
        <div className="text-3xl font-medium text-black bg-white p-[7px] rounded-[7px] max-sm:text-2xl">
          {title}
        </div>
      </div>
      <img 
        src={imageUrl} 
        alt={imageAlt} 
        className="w-[210px] h-auto transition-transform duration-500 hover:scale-110" 
      />
    </div>
  );
};
