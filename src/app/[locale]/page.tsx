import Contact from "@/components/home/contact";
import { Header } from "@/components/home/header";
import { HowItWorks } from "@/components/home/how-it-works";
import Plans from "@/components/home/plans";
import { Services } from "@/components/home/services";
import Units from "@/components/home/units";
import { WhyUs } from "@/components/home/why-us";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Services />
      <WhyUs />
      <Plans />
      <HowItWorks />
      <Units />
      <Contact />
    </main>
  );
}
