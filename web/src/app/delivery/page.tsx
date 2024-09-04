import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import DeliveryStatus from "@/components/Tables/Delivery";

const page = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Delivery Status" />
      <DeliveryStatus />
    </DefaultLayout>
  );
};

export default page;
