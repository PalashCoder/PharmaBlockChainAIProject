import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import AllOrders from "@/components/Tables/AllOrders";

const page = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="All Orders" />
      <AllOrders />
    </DefaultLayout>
  );
};

export default page;
