import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import DemandTable from "@/components/Tables/DemandTable";

const page = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Demand" />
      <DemandTable />
    </DefaultLayout>
  );
};

export default page;
