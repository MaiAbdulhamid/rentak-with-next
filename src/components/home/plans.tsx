const pricing = {
  tiers: [
    {
      name: "Traditional rent",
      featured: false,
      id: "tier-scale",
      href: "#",
    },
    {
      name: "Rentak",
      featured: true,
      id: "tier-starter",
      href: "#",
    },
  ],
  sections: {
    features: [
      {
        name: "Monthly rent reminder",
        tiers: {
          "Traditional rent": "Monthly rent reminders can be inconvenient.",
          Rentak:
            "Hassle-free, automated rent collection without the need for reminders.",
        },
      },
      {
        name: "Unit condition",
        tiers: {
          "Traditional rent":
            "Renters risk property damages, leading to potential disputes.",
          Rentak:
            "We ensure the property's condition at the end of the lease, minimizing risks for landlords.",
        },
      },
      {
        name: "Unpaid bills",
        tiers: {
          "Traditional rent":
            "Unpaid utility bills can cause financial stress and disputes.",
          Rentak:
            "We handle all bills promptly, eliminating the risk of unpaid utility bills.",
        },
      },
      {
        name: "Legal Support",
        tiers: {
          "Traditional rent":
            "Limited legal support and protection for landlords and tenants.",
          Rentak:
            "Legal protection and expert support provided throughout the tenancy period.",
        },
      },
    ],
  },
} as const;

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

export default function Plans() {
  return (
    <div className="relative pt-24 sm:pt-32">
      <h2 className="text-center text-3xl font-semibold uppercase leading-7 text-slate-900">
        Plans
      </h2>
      <div className="mx-auto max-w-7xl px-6 lg:mt-12 lg:rounded-2xl lg:p-10 lg:pb-14 lg:shadow-lg">
        {/* Feature comparison (up to lg) */}
        <section
          aria-labelledby="mobile-comparison-heading"
          className="lg:hidden"
        >
          <h2 id="mobile-comparison-heading" className="sr-only">
            Feature comparison
          </h2>

          <div className="mx-auto max-w-2xl space-y-16">
            {pricing.tiers.map((tier) => (
              <div key={tier.id}>
                <div className="-mt-px w-72 pt-10 md:w-80">
                  <h3
                    className={classNames(
                      "text-lg font-medium leading-6",
                      tier.featured ? "text-primary" : "text-slate-900",
                    )}
                  >
                    {tier.name}
                  </h3>
                </div>

                <div className="relative mt-10">
                  {/* Fake card background */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-y-0 end-0 -z-10 block w-2/3 rounded-lg bg-slate-50"
                  />

                  <dl className="text-sm leading-6">
                    {pricing.sections.features.map((feature) => (
                      <div
                        key={feature.name}
                        className="grid grid-cols-3 items-center justify-between px-0 py-3"
                      >
                        <dt className="font-medium text-slate-800">
                          {feature.name}
                        </dt>
                        <dd className="col-span-2 flex items-center justify-start px-4">
                          <span className="text-slate-500">
                            {feature.tiers[tier.name]}
                          </span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Feature comparison (lg+) */}
        <section
          aria-labelledby="comparison-heading"
          className="hidden lg:block"
        >
          <h2 id="comparison-heading" className="sr-only">
            Feature comparison
          </h2>

          <div className="grid grid-cols-5 gap-x-8">
            {/* Empty div to align headings with table */}
            <div />
            {pricing.tiers.map((tier) => (
              <div key={tier.id} aria-hidden="true" className="col-span-2">
                <div className="px-6 pt-10">
                  <p
                    className={classNames(
                      "text-lg font-medium leading-6",
                      tier.featured ? "text-primary" : "text-slate-900",
                    )}
                  >
                    {tier.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mt-12">
            {/* Fake card backgrounds */}
            <div
              className="absolute -inset-y-4 inset-x-0 -z-10 grid grid-cols-5"
              aria-hidden="true"
            >
              <div className="me-8 size-full" />
              <div className="col-span-4 grid size-full grid-cols-2 rounded-lg bg-slate-50">
                <div />
                <div className="my-8 ms-4 border-s" />
              </div>
            </div>

            <table className="w-full">
              <thead>
                <tr className="text-start">
                  <th scope="col">
                    <span className="sr-only">Feature</span>
                  </th>
                  {pricing.tiers.map((tier) => (
                    <th key={tier.id} scope="col">
                      <span className="sr-only">{tier.name} tier</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricing.sections.features.map((feature) => (
                  <tr key={feature.name} className="grid grid-cols-5 gap-x-8">
                    <th
                      scope="row"
                      className="py-3 pe-4 text-start text-lg font-medium text-slate-800"
                    >
                      {feature.name}
                    </th>
                    {pricing.tiers.map((tier) => (
                      <td
                        key={tier.id}
                        className="col-span-2 px-6 py-4 text-start"
                      >
                        <span className="size-full py-3">
                          <span className="text-lg text-slate-500">
                            {feature.tiers[tier.name]}
                          </span>
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
