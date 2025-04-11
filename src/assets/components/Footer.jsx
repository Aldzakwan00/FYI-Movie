import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Deskripsi */}
        <div>
          <h1 className="text-2xl font-bold text-yellow-400">FYI MOVIE</h1>
          <p className="mt-2 text-sm text-gray-400">
            Temukan informasi film terbaru, rekomendasi, dan ulasan menarik hanya di FYI MOVIE.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Navigasi</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-yellow-400">Beranda</a></li>
            <li><a href="/movies" className="hover:text-yellow-400">Film</a></li>
            <li><a href="/about" className="hover:text-yellow-400">Tentang Kami</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Kontak</a></li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Ikuti Kami</h2>
          <div className="flex flex-col space-y-2 text-sm text-gray-300">
            <a href="#" className="hover:text-yellow-400">🌐 Facebook</a>
            <a href="#" className="hover:text-yellow-400">📸 Instagram</a>
            <a href="#" className="hover:text-yellow-400">🐦 Twitter</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} FYI MOVIE. Semua hak dilindungi.
      </div>
    </footer>
  );
};

export default Footer;
