const steps = [
  {
    title: "Submit your property",
    description:
      "Homeowners submit their property details to Rentak for comprehensive management.",
  },
  {
    title: "Effortless management",
    description:
      "Rentak handles legalities, rent collection, property maintenance, and ensures a smooth tenant experience.",
  },
  {
    title: "Secure transactions",
    description:
      "Homeowners receive on-time payments, and tenants enjoy transparent transactions and hassle-free living.",
  },
  {
    title: "End of rent",
    description:
      "Rentak guarantees the unit's condition, settles bills, and manages the transition for both parties.",
  },
];

export function HowItWorks() {
  return (
    <div className="pt-24 sm:pt-32">
      <div className="conainer mx-auto flex max-w-7xl flex-col items-center justify-stretch px-6 md:px-8">
        <h2 className="text-center text-3xl font-semibold uppercase leading-7 text-slate-900">
          How it work
        </h2>
        <div className="relative mt-12">
          {steps.map((step) => (
            <div
              className="group relative flex items-start justify-between before:absolute before:inset-0 before:top-6 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-slate-200 last-of-type:before:hidden md:justify-normal md:before:mx-auto md:before:translate-x-0 md:odd:flex-row-reverse"
              key={step.title}
            >
              <div
                className="mt-6 flex size-4 shrink-0 items-center justify-center rounded-full bg-primary
                ring-4
          ring-primary ring-offset-2 md:order-1 ltr:md:group-odd:-translate-x-1/2 ltr:md:group-even:translate-x-1/2 rtl:md:group-odd:translate-x-1/2 rtl:md:group-even:-translate-x-1/2"
              ></div>
              <hr />
              <div className="w-[calc(100%-3rem)] p-4 md:w-[calc(50%-1rem)]">
                <div className="flex items-center justify-between">
                  <p className="text-xl font-semibold text-primary-shade-3">
                    {step.title}
                  </p>
                </div>
                <p className="mt-4 text-slate-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="relative mt-52 hidden justify-between space-x-8 lg:flex">
          {steps.map((step) => (
            <div
              className="group relative flex items-center justify-center odd:flex-col even:translate-y-[calc(-50%)] even:flex-col-reverse"
              key={step.title}
            >
              <div className="mb-1 flex items-center justify-center space-x-2 group-odd:mb-10 group-even:mt-10">
                <p className="text-xl font-semibold text-primary-shade-3">
                  {step.title}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div
                  className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary ring-4
                ring-primary
                ring-offset-4"
                />
              </div>
              <div
                className="-z-10 flex items-center group-odd:flex-col group-even:flex-col-reverse"
                aria-hidden="true"
              >
                <hr className="h-20 w-px border border-slate-200" />
                <div className="size-2 rounded-full bg-slate-200" />
              </div>
              <div className="w-56 p-4 group-odd:self-start group-even:self-end">
                <p className="text-center text-slate-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
