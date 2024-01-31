import React from "react";
import Chart from "chart.js/auto";

import { Line } from "react-chartjs-2";

const ProductChart = ({ invoiceList }) => {
  const labels = invoiceList?.map((item) => item?.name);
  console.log(invoiceList?.map((item) => item?.Qty));

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: invoiceList?.map((item) => item?.Qty),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return <Line data={data} />;
};

export default ProductChart;
