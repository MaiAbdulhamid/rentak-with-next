import Contact from "@/components/home/contact";
import { Header } from "@/components/home/header";
import { Services } from "@/components/home/services";
import { WhyUs } from "@/components/home/why-us";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Services />
      <WhyUs />
      <Contact />
    </main>
  );
}
