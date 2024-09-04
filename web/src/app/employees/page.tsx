import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import EmployeeTable from "@/components/Tables/EmployeeTable";

const page = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Employees" />
      <EmployeeTable />
    </DefaultLayout>
  );
};

export default page;
