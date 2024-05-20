import { useTranslations } from "next-intl";

import SectionTitle from "../components/sectionTitle";
import UnitsSlider from "./unitsSlider";
import ViewAllUnits from "./viewAllUnits";

const Units = () => {
  const trans = useTranslations("home");

  return (
    <div className="pt-24 sm:pt-32">
      <div className="grid grid-cols-1 pb-8 text-center">
        <SectionTitle text={trans("discoverOurRentalUnits")} />
      </div>
      <div className="grid grid-cols-1 pb-8">
        <ViewAllUnits />
      </div>
      <div className="units-swiper-slider">
        <UnitsSlider />
      </div>
    </div>
  );
};

export default Units;
