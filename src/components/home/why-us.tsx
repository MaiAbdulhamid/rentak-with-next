import { BriefcaseIcon, HomeIcon, KeyIcon, TruckIcon } from "lucide-react";
import Image from "next/image";

import WhyUsBackground from "@/app/[locale]/assets/images/why-choose-us.png";

const features = [
  {
    name: "Spam report",
    description:
      "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was",
    icon: TruckIcon,
  },
  {
    name: "Compose in markdown",
    description:
      "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was",
    icon: HomeIcon,
  },
  {
    name: "Email commenting",
    description:
      "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was",
    icon: KeyIcon,
  },
  {
    name: "Customer connections",
    description:
      "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was",
    icon: BriefcaseIcon,
  },
];

export function WhyUs() {
  return (
    <div className="pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
          <div className="col-span-2">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Why Choose Us
            </h2>
            <p className="mt-7 text-xl/7 text-slate-600">
              We offer the following the owner and the tenant.
            </p>
            <dl className="mt-20 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="text-base/7 font-semibold text-primary-shade-3">
                    <div className="relative mb-6 flex size-8 items-center justify-center rounded-full bg-primary-shade-3/20">
                      <feature.icon
                        className="absolute -start-2 -top-2 size-8 text-primary-shade-3"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 max-w-64 text-sm/6 text-slate-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="ms-auto flex max-w-lg">
            <Image
              src={WhyUsBackground}
              alt=""
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
