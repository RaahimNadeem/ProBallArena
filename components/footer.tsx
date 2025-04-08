import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-white/10 z-10 bg-black/60">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <h3 className="text-2xl font-extrabold">
            PRO<span className="text-accent">BALL</span> ARENA
          </h3>
          <p className="text-gray-400 mt-2">The ultimate padel experience</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <h4 className="text-lg font-bold mb-3">Location</h4>
            <p className="text-gray-400">Pine Ave, Green Acres Extension</p>
            <p className="text-gray-400">T & T Aabpara Housing Society</p>
            <p className="text-gray-400">Lahore, 54000</p>
            <Link
              href="https://maps.app.goo.gl/AnJpkavLwkD3K5Zr5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline mt-1 block"
            >
              View on Google Maps
            </Link>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3">Hours</h4>
            <p className="text-gray-400">Open 24 hours</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3">Contact</h4>
            <p className="text-gray-400">+92 310 8888764</p>
            <Link
              href="https://www.instagram.com/proballarena/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 text-center text-gray-500">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/booking" className="hover:text-white transition-colors">
            Book Now
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
        <p>© {new Date().getFullYear()} ProBall Arena. All rights reserved.</p>
      </div>
    </footer>
  );
}
