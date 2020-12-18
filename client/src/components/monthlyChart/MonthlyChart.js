import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { monthBudget } from "../../api/budget";

const MonthlyChart = () => {
  const [month, setMonth] = useState([]);

  const getMonthlyBudget = () => {
    monthBudget()
      .then((res) => {
        setMonth(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMonthlyBudget();
  }, []);

  let monthlyData = Array.from(Array(12)).fill(0);
  month.map((item, i) => {
    monthlyData[parseInt(item._id) - 1] = parseInt(item.total);
  });

  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Monthly Budget",
        backgroundColor: [
          "#FF8811",
          "#542344",
          "#2E933C",
          "#FE5F55",
          "#473BF0",
          "#ECD444",
          "#CC4BC2",
          "#55286F",
          "#6D98BA",
          "#00FFE7",
          "#475B63",
          "#774936",
        ],
        borderColor: "#fff",
        borderWidth: 1,
        hoverBackgroundColor: [
          "#FF8811",
          "#542344",
          "#2E933C",
          "#FE5F55",
          "#473BF0",
          "#ECD444",
          "#CC4BC2",
          "#55286F",
          "#6D98BA",
          "#00FFE7",
          "#475B63",
          "#774936",
        ],
        hoverBorderColor: "#FFF",
        data: monthlyData,
      },
    ],
  };

  return (
    <Line
      data={data}
      width={400}
      height={400}
      options={{
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
      }}
    />
  );
};

export default MonthlyChart;
