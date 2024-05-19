import Image from "next/image";
import { useTranslations } from "next-intl";

import ContactImage from "@/app/[locale]/assets/images/contact-image.png";

import SectionTitle from "../components/sectionTitle";
import ContactForm from "./contactForm";

const Contact = () => {
  const trans = useTranslations("home");

  return (
    <section className="relative py-16 lg:py-24">
      <div className="container">
        <SectionTitle text={trans("contact")} />
        <div className="grid grid-cols-1 items-center gap-[30px] md:grid-cols-12">
          <div className="md:col-span-6 lg:col-span-7">
            <Image
              src={ContactImage}
              alt="Contact Image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          <div className="md:col-span-6 lg:col-span-5">
            <div className="lg:me-5">
              <div className="rounded-md bg-white p-6 shadow">
                <h3 className="mb-6 text-2xl font-medium leading-normal text-[#161C2D]">
                  {trans("getInTouch")}
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
