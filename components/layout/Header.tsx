import React from "react";
import Image from "next/image";

function Header() {
  return (
    <>
      <header className="bg-[linear-gradient(to_right,#43C6AC,#F8FFAE)] shadow-sm top-0 z-50 sticky w-full flex py-2 sm:py-2 sm:px-12 max-w-screen px-4 justify-between">
      {/* <header className="bg-brand-gradient shadow-sm top-0 z-50 sticky w-full flex py-2 sm:py-2 sm:px-4 max-w-screen px-4 justify-between"> */}
        {/* Left spacer (to balance icons on right) */}
        <div className="w-1/3"></div>

        {/* First Section - Heading */}
        <nav className="flex justify-center items-center space-x-2 sm:space-x-3 md:space-x-4  w-1/3 ">
          <p className="text-black text-xs sm:text-sm whitespace-nowrap">
            Open All Tech India Pvt. Ltd.
          </p>
        </nav>

        {/* Right Section - Icons */}
        <div className="flex items-center space-x-1 sm:space-x-2 justify-end  w-1/3 ">
          <Image
            src="/camera1.png"
            alt="camera"
            width={16}
            height={16}
            className="object-contain sm:w-5 sm:h-5"
          />
          <Image
            src="/facebook1.png"
            alt="facebook"
            width={16}
            height={16}
            className="object-contain sm:w-5 sm:h-5"
          />
          <Image
            src="/linkedin1.png"
            alt="twitter"
            width={16}
            height={16}
            className="object-contain sm:w-5 sm:h-5"
          />
        </div>
        {/* </div> */}
        {/* </div> */}
      </header>
    </>
  );
}

export default Header;
