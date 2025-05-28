const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="min-w-[80vw] min-h-[70vh] bg-gradient-to-r from-neutral-950 to-white-100 p-8 rounded-lg shadow-lg flex flex-col justify-center">
        <div className="text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Selamat Datang
            <br />
            <span className="text-white">Di Sewa Pesta Kita !</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-lg">
            Kami melayani berbagai layanan sewa barang dan jasa
            <br />
            di bidang penyediaan alat Event
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-gray-500 hover:bg-gray-500 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Tentang Kami
            </button>
            <button className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Kontak
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
