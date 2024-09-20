import React, { useEffect, useState } from "react";

const CalcAvg = ({ showdata, dept }) => {
  const [avg, setAvg] = useState(0);

  const calc_avg = async (showdata, dept) => {
    let total = 0,
      number = 0;
    showdata.forEach((row) => {
      if (row.department === dept) {
        total = total + row.compensation;
        number++;
      }
    });

    setAvg(total / number);
  };

  const calc_all = async (showdata) => {
    let total = 0,
      number = 0;
    showdata.forEach((row) => {
      total = total + row.compensation;
      number++;
    });

    setAvg(total / number);
  };

  useEffect(() => {
    if (dept === "all") {
      calc_all(showdata);
    } else {
      calc_avg(showdata, dept);
    }
  }, [showdata, dept]);

  if (avg) {
    return (
      <caption>
        Average Compensation of Placed students of {dept} department is {avg}
      </caption>
    );
  } else {
    return <caption>Average not yet calculated</caption>;
  }
};

export default CalcAvg;
