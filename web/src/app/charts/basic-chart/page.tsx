import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import BasicChart from "@/components/Charts/BasicChart";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";

const BasicChartPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Basic Chart" />
      <BasicChart />
    </DefaultLayout>
  );
};

export default BasicChartPage;
