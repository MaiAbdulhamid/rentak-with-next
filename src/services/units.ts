import { type Unit } from "@/components/Unit/types";
import ky from "@/lib/ky";

type UnitsResponse = {
  message: string;
  data: Array<Unit>;
};

export async function getUnits({ locale }: { locale: string }) {
  const res = await ky
    .get("home/get-home-units", {
      searchParams: {
        lang: locale,
      },
    })
    .json<UnitsResponse>();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.data;
}
