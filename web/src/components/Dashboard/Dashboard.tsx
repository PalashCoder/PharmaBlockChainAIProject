"use client";
import ChartOne from "@/components/Charts/Chart1";
import DataStatsOne from "@/components/DataStats/DataStatsOne";
import React from "react";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import ChartTwo from "../Charts/Chart2";
import ChartThree from "../Charts/Chart3";
import ChartFive from "../Charts/Chart4";
import TableOne from "../Tables/TableOne";

const ECommerce: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Dashboard" />

      <DataStatsOne />
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <div className="col-span-12">
          <TableOne />
        </div>
        <div className="col-span-12">
          <ChartFive />
        </div>
        <ChartThree />
      </div>
    </>
  );
};

export default ECommerce;
