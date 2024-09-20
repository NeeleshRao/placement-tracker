import React, { useState } from "react";
import { CChart } from "@coreui/react-chartjs";

const DisplayAvgByDept = ({ data }) => {
  const [xValues, setXValues] = useState([]);
  const [yValues, setYValues] = useState([]);

  let the_map = { CSE: 0, ISE: 0, AIML: 0, ECE: 0, EEE: 0, EI: 0 };
  for (let i of data) {
    // data[i.department]
    the_map[i.department] = Math.max(the_map[i.department], i.compensation);
  }

  setXValues(Object.keys(the_map));
  setYValues(Object.values(the_map));

  return (
    <div>
      <CChart
        type="bar"
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "GitHub Commits",
              backgroundColor: "#f87979",
              data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
            },
          ],
        }}
        labels="months"
        options={{
          plugins: {
            legend: {
              labels: {
                color: getStyle("--cui-body-color"),
              },
            },
          },
          scales: {
            x: {
              grid: {
                color: getStyle("--cui-border-color-translucent"),
              },
              ticks: {
                color: getStyle("--cui-body-color"),
              },
            },
            y: {
              grid: {
                color: getStyle("--cui-border-color-translucent"),
              },
              ticks: {
                color: getStyle("--cui-body-color"),
              },
            },
          },
        }}
      />
    </div>
  );
};

export default DisplayAvgByDept;
