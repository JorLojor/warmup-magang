const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-8xl mx-auto px-10 ">
        <div className="flex items-center justify-between h-16 border-b-2 border-gray-700">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold text-gray-800">
                SEWAPESTAKITA
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="bg-green-700 text-white px-4 py-2 rounded-full text-sm font-bold"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-700 text-sm font-bold"
            >
              Tentang Kami
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-700 text-sm font-bold"
            >
              Katalog Produk
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-700 text-sm font-bold"
            >
              Portofolio
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-700 text-sm font-bold"
            >
              Kontak
            </a>
          </div>

          <div className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-64 pl-4 pr-10 py-2 border border-gray-300 rounded-lg ring-green-500"
              />
              {/* search icon */}
              <svg
                className="absolute right-3 top-2.5 h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
