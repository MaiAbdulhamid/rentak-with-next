import Link from "next/link";
import { useTranslations } from "next-intl";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/app/[locale]/assets/svgs";
import URLS from "@/shared/urls";

const Copyright = () => {
  const trans = useTranslations("footer");

  const socialMediaLinks = [
    {
      url: URLS.facebook,
      icon: <FacebookIcon />,
    },
    {
      url: URLS.whatsapp,
      // icon: <WhatsappIcon />,
    },
    {
      url: URLS.linkedin,
      icon: <LinkedinIcon />,
    },
    {
      url: URLS.instagram,
      icon: <InstagramIcon />,
    },
  ];

  return (
    <div className="border-t border-[#BBBBBB] px-0 py-[30px]">
      <div className="container mx-auto text-center">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div className="text-center md:text-start">
            <p className="mb-0 text-[#737373]">
              {/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
              {`©${new Date().getFullYear()} ${trans("copyright")}.`}
            </p>
          </div>

          <ul className="list-none text-center md:text-end">
            {socialMediaLinks.map((link) => (
              <li key={link.url} className="ms-1 inline">
                <Link
                  href={link.url}
                  target="_blank"
                  className="btn btn-icon btn-sm rounded-md text-gray-400 hover:border-secondary hover:bg-primary"
                >
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
