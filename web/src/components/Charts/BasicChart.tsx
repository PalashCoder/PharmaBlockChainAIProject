"use client";

import ChartFour from "@/components/Charts/Chart4";
import ChartThree from "@/components/Charts/Chart3";
import React from "react";

const BasicChart: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartThree />
        <div className="col-span-12 xl:col-span-5">
          <ChartFour />
        </div>
      </div>
    </>
  );
};

export default BasicChart;
