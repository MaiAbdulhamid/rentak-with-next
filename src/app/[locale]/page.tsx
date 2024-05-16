import { getLocale, getTranslations } from "next-intl/server";

import { HomeHeader } from "@/components/home-header";
import { Link } from "@/navigation";

export default async function Home() {
  const t = await getTranslations();

  return (
    <main className="min-h-screen">
      <HomeHeader />
    </main>
  );
}
