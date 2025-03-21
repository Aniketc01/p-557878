
interface BenefitCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  index: number;
}

export const BenefitCard = ({
  title,
  subtitle,
  imageUrl,
  imageAlt,
  index,
}: BenefitCardProps) => {
  return (
    <div 
      className="bg-[#FFD7D7] rounded-xl p-6 h-[280px] flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:transform hover:scale-[1.02] opacity-0 animate-fade-slide-up"
      style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: "forwards" }}
    >
      <div>
        <h3 className="text-lg font-medium text-[#333]">{title}</h3>
        <p className="text-sm text-[#555] mt-1">{subtitle}</p>
      </div>
      <div className="flex justify-end mt-4">
        <img 
          src={imageUrl} 
          alt={imageAlt} 
          className="w-[100px] h-auto transition-transform duration-500 hover:scale-110" 
        />
      </div>
    </div>
  );
};
