import Image from "next/image";
import { useTranslations } from "next-intl";

import HeaderBackground from "@/app/[locale]/assets/images/header-background.png";

import { Button } from "../ui/button";

export function Header() {
  const t = useTranslations("header");
  return (
    <div className="relative isolate overflow-hidden pt-14">
      <Image
        src={HeaderBackground}
        className="absolute inset-0 -z-20 size-full object-cover"
        alt=""
        fill
      />
      <div className="absolute inset-0 -z-10 bg-[#161C2D]/50" />
      <div className="container mx-auto lg:max-w-5xl 2xl:max-w-7xl">
        <div className="max-w-lg py-32 sm:py-48 lg:py-56">
          <div className="text-start">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl sm:leading-[90px]">
              {t.rich("title", {
                wbr: () => <wbr />,
              })}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {t("subtitle")}
            </p>
            <div className="mt-10 flex items-center justify-start gap-x-6">
              <Button asChild>
                <a href="#">{t("cta")}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
