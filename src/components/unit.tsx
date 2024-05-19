import { LucideBath, LucideBedDouble } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type UnitProps = {
  item: {
    id: string | number;
  };
};

const Unit = ({ item }: UnitProps) => {
  return (
    <>
      {/* <div
        className="group overflow-hidden rounded-xl bg-white shadow duration-500 ease-in-out hover:shadow-xl dark:bg-slate-900 dark:shadow-gray-700 dark:hover:shadow-xl dark:hover:shadow-gray-700"
      >
        <div className="relative">
          <Image
            src={item.image}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            priority
          />

          <div className="absolute top-4 end-4">
            <Link
              href="#"
              className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"
            >
              <i className="mdi mdi-heart mdi-18px"></i>
            </Link>
          </div>
        </div>

        <div className="p-6">
          <div className="pb-6">
            <Link
              href={`/property-detail/${item.id}`}
              className="text-lg hover:text-green-600 font-medium ease-in-out duration-500"
            >
              {item.name}
            </Link>
          </div>

          <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
            <li className="flex items-center me-4">
              <LiaCompressArrowsAltSolid className="me-2 text-green-600" />
              <span>{item.square}sqf</span>
            </li>

            <li className="flex items-center me-4">
              <LucideBedDouble className="me-2 text-green-600" />
              <span>{item.beds} Beds</span>
            </li>

            <li className="flex items-center">
              <LucideBath className="me-2 text-green-600" />
              <span>{item.baths} Baths</span>
            </li>
          </ul>

          <ul className="pt-6 flex justify-between items-center list-none">
            <li>
              <span className="text-slate-400">Price</span>
              <p className="text-lg font-medium">${item.price}</p>
            </li>

            <li>
              <span className="text-slate-400">Rating</span>
              <ul className="text-lg font-medium text-amber-400 list-none">
                <li className="inline ms-1">
                  <i className="mdi mdi-star"></i>
                </li>
                <li className="inline ms-1">
                  <i className="mdi mdi-star"></i>
                </li>
                <li className="inline ms-1">
                  <i className="mdi mdi-star"></i>
                </li>
                <li className="inline ms-1">
                  <i className="mdi mdi-star"></i>
                </li>
                <li className="inline ms-1">
                  <i className="mdi mdi-star"></i>
                </li>
                <li className="inline ms-1 text-black dark:text-white">
                  {item.rating}(30)
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div> */}
    </>
  );
};

export default Unit;
