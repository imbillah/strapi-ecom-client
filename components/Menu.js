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
const Menu = ({ showCat, setShowCat }) => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {menudata.map((item) => {
        return (
          <Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                onMouseEnter={() => setShowCat(true)}
                onMouseLeave={() => setShowCat(false)}
                className="flex items-center gap-2 relative cursor-pointer"
              >
                {item.name}
                <ChevronDownIcon className="h-5 w-5" />
                {showCat && (
                  <ul className="absolute top-6 left-0 min-w-[250px] p-2 shadow-lg rounded-md bg-white">
                    {subMenuData.map((submenu) => {
                      return (
                        <Link
                          href="/"
                          key={submenu.id}
                          onClick={() => setShowCat(false)}
                        >
                          <li className="h-12 flex justify-between p-3 hover:bg-black/[0.3] hover:rounded-sm ">
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
              <li>
                <Link href={item?.url}> {item.name}</Link>
              </li>
            )}
          </Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
