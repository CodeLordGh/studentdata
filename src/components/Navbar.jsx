const Navbar = () => {
  return (
    <nav className="bg-white p-4 border-b-[1px] border-gray-200 flex items-center justify-between relative">
      <div className="flex items-center gap-6">
        <button className="block lg:hidden text-gray-950 text-2xl hover:scale-105 transition-transform">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <p>Logo</p>
        <a
          href="#"
          rel="nofollow"
          className="hidden lg:block h-[30px] overflow-hidden font-medium"
        >
          <div className="transform-none hover:translate-y-[-30px] transition-transform">
            <span className="flex items-center h-[30px] text-gray-500">
              Solution
            </span>
            <span className="flex items-center h-[30px] text-indigo-600">
              Solution
            </span>
          </div>
        </a>
        <a
          href="#"
          rel="nofollow"
          className="hidden lg:block h-[30px] overflow-hidden font-medium"
        >
          <div className="transform-none transition-transform hover:translate-y-[-30px]">
            <sapn className="flex items-center h-[30px] text-gray-500">
              Prcing
            </sapn>
            <span className="flex items-center h-[30px] text-indigo-600">
              Prcing
            </span>
          </div>
        </a>
        <a
          href="#"
          rel="nofollow"
          className="hidden lg:block h-[30px] font-medium overflow-hidden"
        >
          <div className="transform-none hover:translate-y-[-30px] transition-transform">
            <span className="flex items-center h-[30px] text-gray-500">
              Contact
            </span>
            <span className="flex items-center h-[30px] text-indigo-600">
              Contact
            </span>
          </div>
        </a>
        <a
          href="#"
          rel="nofollow"
          className="hidden lg:block h-[30px] font-medium overflow-hidden"
        >
          <div className="transform-none hover:translate-y-[-30px] transition-transform">
            <span className="flex items-center h-[30px] text-gray-500">
              About
            </span>
            <span className="flex items-center h-[30px] text-indigo-600">
              About
            </span>
          </div>
        </a>
      </div>
      <div className="space-x-4 hover:transform">
        <button className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent font-medium rounded-md whitespace-nowrap hover:scale-105 transition-transform">
          Sign in
        </button>
        <button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-md whitespace-nowrap px-4 py-2 hover:scale-105 transition-transform">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
