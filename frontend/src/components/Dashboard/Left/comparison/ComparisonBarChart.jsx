import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ComparisonBarChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.month),
    datasets: [
      {
        label: "Last Year",
        data: data.map((item) => item.lastYear),
        backgroundColor: "#8EE2BF",
        borderRadius: 10,
      },
      {
        label: "This Year",
        data: data.map((item) => item.thisYear),
        backgroundColor: "blue",
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default ComparisonBarChart;
