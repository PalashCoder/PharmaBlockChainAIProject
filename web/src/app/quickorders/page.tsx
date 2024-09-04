import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import QuickOrders from "@/components/Tables/QuickOrders";

const page = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Quick Orders" />
      <QuickOrders />
    </DefaultLayout>
  );
};

export default page;
