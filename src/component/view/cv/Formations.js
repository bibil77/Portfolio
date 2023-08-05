import { useTranslation } from "next-i18next";
import Card from "../../Card";
import FormationCard from "../../FormationCard";

function Formations() {
  const { t } = useTranslation("common");
  return (
    <Card border={true} title="FORMATIONS">
      <FormationCard
        date={t("formation.description1.date")}
        title={t("formation.description1.title")}
        description={t("formation.description1.text")}
      />
      <FormationCard
        date={t("formation.description2.date")}
        title={t("formation.description2.title")}
        list={true}
        listName="londre"
      />
      <FormationCard
        date={t("formation.description3.date")}
        title={t("formation.description3.title")}
        list={true}
        listName="bac"
      />
    </Card>
  );
}

export default Formations;
