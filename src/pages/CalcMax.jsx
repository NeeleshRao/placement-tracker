import React from "react";
import { useState, useEffect } from "react";
import DisplayAvgByDept from "./DisplayAvgByDept";

const CalcMax = ({ showdata, dept }) => {
  const [maxi, setMax] = useState(0);

  const calc_avg = async (showdata, dept) => {
    let maxi = 0;
    for (let i of showdata) {
      if (i.department === dept) {
        if (i.compensation > maxi) {
          maxi = i.compensation;
        }
      }
    }
    setMax(maxi);
  };

  const calc_all = async (showdata) => {
    let maxi = 0;
    for (let i of showdata) {
      if (i.compensation > maxi) {
        maxi = i.compensation;
      }
    }
    setMax(maxi);
  };

  useEffect(() => {
    if (dept === "all") {
      calc_all(showdata);
    } else {
      calc_avg(showdata, dept);
    }
  }, [showdata, dept]);

  if (maxi) {
    return (
      <>
        <caption>
          Maximum Compensation of Placed students of {dept} department is {maxi}
        </caption>
        {/* <DisplayAvgByDept data={showdata} /> */}
      </>
    );
  } else {
    return <caption>Maximum not yet calculated</caption>;
  }
};

export default CalcMax;
