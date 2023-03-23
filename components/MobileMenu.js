import Link from "next/link";
import React, { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
const menudata = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];
const MobileMenu = ({ showCat, setShowCat, setMobileMenu, categories }) => {
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 h-[calc(100vh-50px)] bg-white border-t text-black">
      {menudata.map((item) => {
        return (
          <Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer py-4 px-5 flex flex-col relative border-b"
                onClick={() => setShowCat(!showCat)}
              >
                <div className="flex justify-between items-center">
                  {item.name}
                  <ChevronDownIcon className="h-5 w-5" />
                </div>
                {showCat && (
                  <ul className="bg-black/[0.05] -mx5 mt-4 -mb-4">
                    {subMenuData.map((submenu) => {
                      return (
                        <Link
                          href="/"
                          key={submenu.id}
                          onClick={() => {
                            setShowCat(false);
                            setMobileMenu(false);
                          }}
                        >
                          <li className="py-4 px-8 border-b flex justify-between">
                            {submenu.name}
                            <span className="text-sm opacity-50">18</span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="py-4 px-5 border-b">
                <Link href={item?.url} onClick={() => setMobileMenu(false)}>
                  {" "}
                  {item.name}
                </Link>
              </li>
            )}
          </Fragment>
        );
      })}
    </ul>
  );
};

export default MobileMenu;
