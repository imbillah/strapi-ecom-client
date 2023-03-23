import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Wrapper, Menu, MobileMenu } from ".";
import {
  HeartIcon,
  ShoppingCartIcon,
  Bars4Icon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCat, setShowCat] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [latScroolY, setLastscrollY] = useState(0);
  const [categories, setCategories] = useState(null);
  return (
    <header
      className={`w-full, h-[50px] md:h-[80px] flex items-center justify-between`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <img src="./sneaker_logo.png" className="w-[40px] md:w-[60px]" />
        </Link>
        <Menu showCat={showCat} setShowCat={setShowCat} />
        {mobileMenu && (
          <MobileMenu
            showCat={showCat}
            setShowCat={setShowCat}
            setMobileMenu={setMobileMenu}
            categories={categories}
          />
        )}
        {/* Menu Icons area starts */}
        <div className="flex items-center gap-2 text-black">
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <HeartIcon className="h-6 w-6" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              19
            </div>
          </div>
          <Link href="/cart">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <ShoppingCartIcon className="h-6 w-6" />

              <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                5
              </div>
            </div>
          </Link>
          {/* mobile menu icons area */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <XCircleIcon
                className="w-6 h-6"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <Bars4Icon
                className="w-6 h-6"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
        {/* menu icons area ends */}
      </Wrapper>
    </header>
  );
};

export default Header;
