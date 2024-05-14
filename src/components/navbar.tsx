"use client"; // This is a client component 👈🏽
import Image from "next/image";
import { useLocale } from "next-intl";
import React, { useEffect, useState } from "react";

import { Link, usePathname } from "@/navigation";

const routes = [
  {
    name: "Home",
    path: "/",
    subRoutes: null,
  },
  {
    name: "Listing",
    path: "/listing",
    subRoutes: null,
  },
  {
    name: "Services",
    path: "/services",
    subRoutes: [
      {
        name: "Service 1",
        path: "/service-1",
      },
      {
        name: "Service 2",
        path: "/service-2",
      },
    ],
  },
  {
    name: "Contact",
    path: "/contact",
    subRoutes: null,
  },
];

type NavbarProps = {
  navClass?: string;
  topnavClass?: string;
};

export default function Navbar({ navClass, topnavClass }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [topNavbar, setTopNavBar] = useState(false);

  const [menu, setMenu] = useState("");
  const [subMenu, setSubMenu] = useState("");

  const pathname = usePathname();
  const locale = useLocale();

  useEffect(() => {
    setMenu(pathname);
    setSubMenu(pathname);

    function windowScroll() {
      setTopNavBar(window.scrollY >= 50);
    }

    window.addEventListener("scroll", windowScroll);
    window.scrollTo(0, 0);
    return () => {
      window.removeEventListener("scroll", windowScroll);
    };
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <nav
        id="topnav"
        className={`${topNavbar ? "nav-sticky" : ""} ${topnavClass ? topnavClass : ""} defaultscroll is-sticky`}
      >
        <div
          className={
            topnavClass !== "" && topnavClass !== undefined
              ? "container-fluid px-3 md:px-8"
              : "container mx-auto"
          }
        >
          {/* <!-- Logo container--> */}
          {navClass === "" || navClass === undefined ? (
            <Link className="logo" href="/">
              <Image
                src="/images/Logo.png"
                className="inline-block"
                alt=""
                width={98}
                height={24}
              />
            </Link>
          ) : (
            <Link className="logo" href="#">
              <span className="inline-block">
                <Image
                  src="/images/Logo.png"
                  className="l-dark"
                  alt=""
                  width={98}
                  height={24}
                />
              </span>
            </Link>
          )}
          {/* <!-- End Logo container--> */}

          {/* <!-- Start Mobile Toggle --> */}
          <div className="menu-extras">
            <div className="menu-item">
              <Link
                href="#"
                className="navbar-toggle"
                id="isToggle"
                onClick={toggleMenu}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Link>
            </div>
          </div>
          {/* <!-- End Mobile Toggle --> */}

          {/* <!-- Login button Start --> */}
          <ul className="buy-button mb-0 list-none">
            <li className="mb-0 inline">
              <Link
                locale={locale === "ar" ? "en" : "ar"}
                href={pathname}
                className="btn btn-icon rounded-full border-blue-600 bg-blue-600 text-white hover:bg-blue-700 dark:border-blue-600"
              >
                ع
              </Link>
            </li>
            <li className="mb-0 hidden ps-1 sm:inline">
              <Link
                href="/auth-signup"
                className="btn rounded-full border-blue-600 bg-blue-600 text-white hover:bg-blue-700 dark:border-blue-600"
              >
                Signup
              </Link>
            </li>
          </ul>
          {/* <!--Login button End--> */}

          <div id="navigation" className={isOpen ? "hidden" : "open block"}>
            {/* <!-- Navigation Menu--> */}

            <ul
              className={`navigation-menu  ${navClass === "" || navClass === undefined ? "" : "nav-light"}   ${topnavClass !== "" && topnavClass !== undefined ? "justify-center" : "justify-end"}`}
            >
              {routes.map((route) => {
                const hasSubmenu = !!route.subRoutes;
                const checkedRoutes = hasSubmenu
                  ? [route.path, ...route.subRoutes.map((route) => route.path)]
                  : [route.path];

                return (
                  <li
                    key={route.name}
                    className={`${
                      hasSubmenu
                        ? "has-submenu parent-menu-item"
                        : "sub-menu-item"
                    } ${checkedRoutes.includes(menu) ? "active" : ""}`}
                  >
                    <Link
                      href={hasSubmenu ? "#" : route.path}
                      onClick={() => {
                        if (hasSubmenu) {
                          setSubMenu(subMenu === route.path ? "" : route.path);
                        }
                      }}
                      className={hasSubmenu ? "" : "sub-menu-item"}
                    >
                      {route.name}
                    </Link>
                    {hasSubmenu && (
                      <>
                        <span className="menu-arrow"></span>
                        <ul
                          className={`submenu ${checkedRoutes.includes(subMenu) ? "open" : ""}`}
                        >
                          {route.subRoutes.map((subRoute) => (
                            <li
                              key={subRoute.name}
                              className={menu === subRoute.path ? "active" : ""}
                            >
                              <Link
                                href={subRoute.path}
                                className="sub-menu-item"
                              >
                                {subRoute.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navbar  */}
    </React.Fragment>
  );
}
