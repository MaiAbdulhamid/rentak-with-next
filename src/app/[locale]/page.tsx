import { unstable_setRequestLocale } from "next-intl/server";

import Contact from "@/components/home/contact";
import { Header } from "@/components/home/header";
import { HowItWorks } from "@/components/home/how-it-works";
import { Plans } from "@/components/home/plans";
import { Services } from "@/components/home/services";
import Units from "@/components/home/units";
import { WhyUs } from "@/components/home/why-us";
import { getUnits } from "@/services/units";

export default async function Home({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  const units = await getUnits({ locale });

  return (
    <main className="min-h-screen">
      <Header />
      <Services />
      <WhyUs />
      <Plans />
      <HowItWorks />
      <Units units={units} />
      <Contact />
    </main>
  );
}
