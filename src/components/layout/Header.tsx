import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex items-center justify-between relative z-10 px-[120px] py-[72px] max-md:p-10 max-sm:flex-col max-sm:gap-5 max-sm:p-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/16c7e68255b2d7aec7bb07d2d0fb6bb7c7fbdb5d"
        alt="TitleMine"
        className="w-[102px] h-11"
      />
      <nav className="flex items-center gap-10 max-sm:flex-col max-sm:w-full">
        <Link
          to="/"
          className="text-base text-[#202124] cursor-pointer px-0 py-2.5"
        >
          Home
        </Link>
        <Link
          to="/what-we-do"
          className="text-base text-[#202124] cursor-pointer px-0 py-2.5"
        >
          What We Do
        </Link>
        <Link
          to="/early-access"
          className="text-base text-[#202124] cursor-pointer px-0 py-2.5"
        >
          Early Access Program
        </Link>
        <Link
          to="/contact"
          className="text-base text-[#202124] cursor-pointer px-0 py-2.5"
        >
          Contact Us
        </Link>
        <div className="flex max-sm:w-full max-sm:justify-center">
          <button className="w-[84px] h-10 text-sm font-medium text-[#202124] shadow-[0_4px_14px_rgba(92,46,46,0.25)] bg-[rgba(229,229,229,0.81)] rounded-[10px_0_0_10px]">
            Log in
          </button>
          <button className="w-[84px] h-10 text-sm font-medium text-white shadow-[0_4px_14px_rgba(92,46,46,0.25)] bg-[#5C2E2E] rounded-[0_10px_10px_0]">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};
