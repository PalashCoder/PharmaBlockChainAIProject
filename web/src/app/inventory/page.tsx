import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Inventory from "@/components/Tables/Inventory";

const page = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Our Inventory" />
      <Inventory />
    </DefaultLayout>
  );
};

export default page;
