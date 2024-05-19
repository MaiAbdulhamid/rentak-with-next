import { useTranslations } from "next-intl";

import SectionTitle from "../components/sectionTitle";

const Units = () => {
  const trans = useTranslations("home");
  return (
    <div className="container mt-16 lg:mt-24">
      <div className="grid grid-cols-1 pb-8 text-center">
        <SectionTitle text={trans("discoverOurRentalUnits")} />
      </div>
    </div>
  );
};

export default Units;
