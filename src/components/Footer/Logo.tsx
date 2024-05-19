import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";

const Logo = () => {
  const trans = useTranslations("footer");

  return (
    <div className="md:col-span-12 lg:col-span-4">
      <Link href="#" className="text-[22px] focus:outline-none">
        <Image src="/images/Logo.png" alt="logo" width={98} height={28} />
      </Link>
      <p className="mt-6 text-[#737373]">{trans("description")}</p>
    </div>
  );
};

export default Logo;
