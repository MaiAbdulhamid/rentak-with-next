import { BriefcaseIcon, HomeIcon, KeyIcon } from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const services: Array<Service> = [
  {
    title: "Rent management",
    description:
      "Guaranteed rent collection, Bill payment, Unit conditions and more.",
    icon: <HomeIcon className="size-8 text-primary-shade-3" />,
  },
  {
    title: "Rent collection",
    description:
      "For home owners, remind your tenants paying rent on time, with multiple payment options.",
    icon: <BriefcaseIcon className="size-8 text-primary-shade-3" />,
  },
  {
    title: "Rent payment",
    description:
      "for tenants, multiple payment and financing options to any rent all-over Egypt.",
    icon: <KeyIcon className="size-8 text-primary-shade-3" />,
  },
];

export function Services() {
  return (
    <div className="bg-white pt-20">
      <div className="container mx-auto flex flex-col items-center justify-stretch">
        <h2 className="text-center text-3xl font-semibold uppercase text-[#161C2D]">
          Our services
        </h2>
        <p className="mt-5 max-w-2xl text-center text-lg text-[#94A3B8]">
          A great plateform to buy, sell and rent your properties without any
          agent or commisions.
        </p>
        <div className="mt-12 flex w-full justify-between lg:max-w-5xl 2xl:max-w-7xl">
          {services.map((service) => (
            <Service key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Service({ title, description, icon }: Service) {
  return (
    <div className="flex max-w-72 flex-col items-center justify-center gap-4">
      <div className="hexagon flex h-28 w-24 items-center justify-center bg-primary/5">
        {icon}
      </div>
      <h3 className="text-center text-xl font-medium text-[#161C2D]">
        {title}
      </h3>
      <p className="text-center text-base text-[#94A3B8]">{description}</p>
    </div>
  );
}
