
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-6 px-8 md:px-12 border-b border-[#eee]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/16c7e68255b2d7aec7bb07d2d0fb6bb7c7fbdb5d"
        alt="TitleMine"
        className="h-8"
      />
      <nav className="hidden md:flex items-center gap-8">
        <Link
          to="/"
          className="text-sm text-[#333] hover:text-[#5C2E2E] transition-colors"
        >
          Home
        </Link>
        <Link
          to="/what-we-do"
          className="text-sm text-[#333] hover:text-[#5C2E2E] transition-colors"
        >
          What We Do
        </Link>
        <Link
          to="/early-access"
          className="text-sm text-[#333] hover:text-[#5C2E2E] transition-colors"
        >
          Early Access Program
        </Link>
        <Link
          to="/contact"
          className="text-sm text-[#333] hover:text-[#5C2E2E] transition-colors"
        >
          Contact Us
        </Link>
      </nav>
      <div className="flex">
        <button className="text-sm font-medium bg-white text-[#333] border border-[#ddd] px-4 py-2 rounded-l-md hover:bg-[#f9f9f9]">
          Log in
        </button>
        <button className="text-sm font-medium bg-[#5C2E2E] text-white px-4 py-2 rounded-r-md hover:bg-[#4a2525]">
          Sign Up
        </button>
      </div>
    </header>
  );
};
