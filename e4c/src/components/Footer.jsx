import React from "react";
// import QRCode from "qrcode.react";

const FooterSection = () => {
  return (
    <footer id="contact" className="py-20 bg-gradient-to-br from-orange-400 to-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center">
                <span className="text-black font-bold text-xl">E4C</span>
              </div>
              <h3 className="text-black font-bold text-2xl">EXPRESS4CHANGE</h3>
            </div>
            <blockquote className="text-black text-xl font-medium italic">
              "In a world full of noise, let your truth be the change."
            </blockquote>
          </div>

          {/* Right content */}
          <div className="space-y-8 animate-fade-in-right">
            <div className="space-y-6 text-center lg:text-left">
              <p className="text-black text-xl font-semibold">+91 7838295296</p>
              <p className="text-black text-xl font-semibold">express4change@gmail.com</p>

              {/* QR Code */}
              <div className="flex justify-center lg:justify-start">
                {/* <QRCode value="upi://pay?pa=express4change@upi" size={96} /> */}
              </div>

              <div className="flex justify-center lg:justify-start">
                <button
                  aria-label="Donate to Express4Change"
                  className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300"
                >
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-black/20 text-center">
          <p className="text-black text-sm">
            © 2024 Express4Change. All rights reserved. Empowering voices, inspiring change.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
