import Image from "next/image";
import Link from "next/link";

import { FacebookIcon, InstagramIcon } from "@/app/[locale]/assets/svgs";

export default function Footer() {
  return (
    <>
      <footer className="relative mt-24 bg-slate-900 dark:bg-slate-800">
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="relative py-16">
              {/* <!-- Subscribe --> */}
              <div className="relative w-full">
                <div className="relative -top-40 overflow-hidden rounded-xl bg-white px-6 py-10 shadow-lg lg:px-8 dark:bg-slate-900 dark:shadow-gray-700">
                  <div className="grid grid-cols-1 items-center gap-[30px] md:grid-cols-2">
                    <div className="z-1 text-center md:text-start">
                      <h3 className="text-2xl font-medium leading-normal text-black md:text-3xl md:leading-normal dark:text-white">
                        Subscribe to Newsletter!
                      </h3>
                      <p className="mx-auto max-w-xl text-slate-400">
                        Subscribe to get latest updates and information.
                      </p>
                    </div>

                    <div className="subcribe-form z-1">
                      <form className="relative max-w-lg md:ms-auto">
                        <input
                          type="email"
                          id="subcribe"
                          name="email"
                          className="rounded-full bg-white shadow dark:bg-slate-900 dark:shadow-gray-700"
                          placeholder="Enter your email :"
                        />
                        <button
                          type="submit"
                          className="btn rounded-full bg-green-600 text-white hover:bg-green-700"
                        >
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="absolute -start-5 -top-5">
                    {/* <FiMail
                      className=" text-black/5 ltr:-rotate-45 rtl:rotate-45 dark:text-white/5"
                      style={{ width: "150px", height: "150px" }}
                    /> */}
                  </div>

                  <div className="absolute -bottom-5 -end-5">
                    {/* <BsPencil
                      className=" text-black/5 rtl:-rotate-90 dark:text-white/5"
                      style={{ width: "150px", height: "150px" }}
                    /> */}
                  </div>
                </div>

                <div className="-mt-24 grid grid-cols-1 gap-[30px] md:grid-cols-12">
                  <div className="md:col-span-12 lg:col-span-4">
                    <Link href="#" className="text-[22px] focus:outline-none">
                      <Image
                        src="/images/Logo.png"
                        alt=""
                        width={98}
                        height={28}
                      />
                    </Link>
                    <p className="mt-6 text-gray-300">
                      A great plateform to buy, sell and rent your properties
                      without any agent or commisions.
                    </p>
                  </div>

                  <div className="md:col-span-4 lg:col-span-2">
                    <h5 className="font-semibold tracking-[1px] text-gray-100">
                      Company
                    </h5>
                    <ul className="footer-list mt-6 list-none">
                      <li>
                        <Link
                          href="/aboutus"
                          className="flex items-center text-slate-300 duration-500 ease-in-out hover:text-slate-400"
                        >
                          <span>About us</span>{" "}
                        </Link>
                      </li>
                      <li className="mt-[10px]">
                        <Link
                          href="/features"
                          className="flex items-center text-slate-300 duration-500 ease-in-out hover:text-slate-400"
                        >
                          <span>Services</span>{" "}
                        </Link>
                      </li>
                      <li className="mt-[10px]">
                        <Link
                          href="/pricing"
                          className="flex items-center text-slate-300 duration-500 ease-in-out hover:text-slate-400"
                        >
                          <span>Pricing</span>{" "}
                        </Link>
                      </li>
                      <li className="mt-[10px]">
                        <Link
                          href="/blogs"
                          className="flex items-center text-slate-300 duration-500 ease-in-out hover:text-slate-400"
                        >
                          <span>Blog</span>{" "}
                        </Link>
                      </li>
                      <li className="mt-[10px]">
                        <Link
                          href="/auth-login"
                          className="flex items-center text-slate-300 duration-500 ease-in-out hover:text-slate-400"
                        >
                          <span>Login</span>{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="md:col-span-4 lg:col-span-3">
                    <h5 className="font-semibold tracking-[1px] text-gray-100">
                      Usefull Links
                    </h5>
                    <ul className="footer-list mt-6 list-none">
                      <li>
                        <Link
                          href="/terms"
                          className="flex items-center text-slate-300 duration-500 ease-in-out hover:text-slate-400"
                        >
                          <span>Terms of Services</span>{" "}
                        </Link>
                      </li>
                      <li className="mt-[10px]">
                        <Link
                          href="/privacy"
                          className="flex items-center text-slate-300 duration-500 ease-in-out hover:text-slate-400"
                        >
                          <span>Privacy Policy</span>{" "}
                        </Link>
                      </li>
                      <li className="mt-[10px]">
                        <Link
                          href="/grid"
                          className="flex items-center text-slate-300 duration-500 ease-in-out hover:text-slate-400"
                        >
                          <span>Listing</span>{" "}
                        </Link>
                      </li>
                      <li className="mt-[10px]">
                        <Link
                          href="/contact"
                          className="flex items-center text-slate-300 duration-500 ease-in-out hover:text-slate-400"
                        >
                          <span> Contact</span>{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="md:col-span-4 lg:col-span-3">
                    <h5 className="font-semibold tracking-[1px] text-gray-100">
                      Contact Details
                    </h5>
                    <div className="mt-6 flex">
                      <div className="">
                        <h6 className="mb-2 text-gray-300">
                          C/54 Northwest Freeway, <br /> Suite 558, <br />{" "}
                          Houston, USA 485
                        </h6>
                        <Link
                          href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                          data-type="iframe"
                          className="lightbox text-green-600 duration-500 ease-in-out hover:text-green-700"
                        >
                          View on Google map
                        </Link>
                      </div>
                    </div>

                    <div className="mt-6 flex">
                      <div className="">
                        <Link
                          href="mailto:contact@example.com"
                          className="text-slate-300 duration-500 ease-in-out hover:text-slate-400"
                        >
                          contact@example.com
                        </Link>
                      </div>
                    </div>

                    <div className="mt-6 flex">
                      <div className="">
                        <Link
                          href="tel:+152534-468-854"
                          className="text-slate-300 duration-500 ease-in-out hover:text-slate-400"
                        >
                          +152 534-468-854
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Subscribe --> */}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 px-0 py-[30px] dark:border-gray-700">
          <div className="container text-center">
            <div className="grid items-center gap-6 md:grid-cols-2">
              <div className="text-center md:text-start">
                <p className="mb-0 text-gray-300">
                  ©{new Date().getFullYear()} Hously. Design & Develop with{" "}
                  <i className="mdi mdi-heart text-red-600"></i> by{" "}
                  <Link
                    href="https://shreethemes.in/"
                    target="_blank"
                    className="text-reset"
                  >
                    Shreethemes
                  </Link>
                  .
                </p>
              </div>

              <ul className="list-none text-center md:text-end">
                <li className="ms-1 inline">
                  <Link
                    href="https://1.envato.market/hously-next"
                    target="_blank"
                    className="btn btn-icon btn-sm rounded-md border border-gray-800 text-gray-400 hover:border-green-600 hover:bg-green-600 hover:text-white dark:border-gray-700 dark:hover:border-green-600 dark:hover:bg-green-600"
                  >
                    <FacebookIcon />
                  </Link>
                </li>
                <li className="ms-1 inline">
                  <Link
                    href="https://dribbble.com/shreethemes"
                    target="_blank"
                    className="btn btn-icon btn-sm rounded-md border border-gray-800 text-gray-400 hover:border-green-600 hover:bg-green-600 hover:text-white dark:border-gray-700 dark:hover:border-green-600 dark:hover:bg-green-600"
                  >
                    <InstagramIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
