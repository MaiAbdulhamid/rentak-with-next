import { BriefcaseIcon, HomeIcon, KeyIcon } from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

const services: Array<Service> = [
  {
    title: "Rent management",
    description:
      "Guaranteed rent collection, Bill payment, Unit conditions and more.",
    icon: HomeIcon,
  },
  {
    title: "Rent collection",
    description:
      "For home owners, remind your tenants paying rent on time, with multiple payment options.",
    icon: BriefcaseIcon,
  },
  {
    title: "Rent payment",
    description:
      "for tenants, multiple payment and financing options to any rent all-over Egypt.",
    icon: KeyIcon,
  },
];

export function Services() {
  return (
    <div className="pt-24 sm:pt-32">
      <div className="conainer mx-auto flex max-w-7xl flex-col items-center justify-stretch px-6 md:px-8">
        <h2 className="text-center text-3xl font-semibold uppercase leading-7 text-slate-900">
          Our services
        </h2>
        <p className="mt-5 max-w-2xl text-center text-lg text-slate-600">
          A great plateform to buy, sell and rent your properties without any
          agent or commisions.
        </p>
        <div className="mt-12 flex w-full flex-col items-center justify-between gap-6 md:flex-row">
          {services.map((service) => (
            <Service key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Service({ title, description, icon: Icon }: Service) {
  return (
    <div className="flex max-w-72 flex-col items-center justify-center gap-4">
      <div className="hexagon flex h-28 w-24 items-center justify-center bg-primary/5">
        <Icon className="size-8 text-primary-shade-3" />
      </div>
      <h3 className="text-center text-xl font-medium text-slate-900">
        {title}
      </h3>
      <p className="text-center text-base text-slate-600">{description}</p>
    </div>
  );
}
