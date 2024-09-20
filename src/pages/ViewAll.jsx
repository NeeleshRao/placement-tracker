import React, { useEffect, useState } from "react";
import "../App.css";
import jsonp from "jsonp";

import CalcAvg from "./CalcAvg";
import CalcMax from "./CalcMax";
const env_var = import.meta.env;

const ViewAll = ({ dept }) => {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [showdata, setShowData] = useState([]);
  const [avg, setAvg] = useState(0);

  useEffect(() => {
    // runFunction();
    const getAllData = async (dept) => {
      // console.log(env_var.VITE_REACT_APP_FETCHURL);
      const url = `${env_var.VITE_REACT_APP_FETCH_WITH_PARAMS}?dept=${dept}`;
      await jsonp(url, { param: "callback" }, (err, dat) => {
        if (err) {
          // console.error("Error fetching data:", err);
          return [];
        } else {
          // console.log("Printing data in fetch data", dat.data);
          if (dat.data[0].name === "Name") {
            setData(dat.data);
            setHeaders(dat.data[0]);
            setShowData(dat.data.slice(1));
            console.log(dat.data[0]);
          } else {
            setData(dat.data);
            setShowData(dat.data);
          }
        }
      });
    };

    getAllData(dept);

    // console.log("hello");
  }, [dept]);

  if (data.length > 0) {
    return (
      <div className="container">
        <table>
          <CalcAvg showdata={showdata} dept={dept} />
          <CalcMax showdata={showdata} dept={dept} />
          <caption>List of Placed students of {dept} departments</caption>
          {/* {console.log(dept)} */}
          <thead>
            <tr>
              <th>
                {/* <p>{headers.name}</p> */}
                <p>Name</p>
              </th>
              <th>
                {/* <p>{headers.usn}</p> */}
                <p>USN</p>
              </th>
              <th>
                {/* <p>{headers.department}</p> */}
                <p>Department</p>
              </th>
              {/* <td>{headers.dob}</td> */}
              <th>
                {/* <p>{headers.company}</p> */}
                <p>Company</p>
              </th>
              <th>
                {/* <p>{headers.compensation}</p> */}
                <p>Compensation</p>
              </th>
              <th>
                {/* <p>{headers.type}</p> */}
                <p>Headers</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {showdata.map(
              (row, index) =>
                (dept === "all" || row.department === dept) && (
                  <tr key={index}>
                    <td>
                      <p>{row.name}</p>
                    </td>
                    <td>
                      <p>{row.usn}</p>
                    </td>
                    {/* <td>{row.dob}</td> */}
                    <td>
                      <p>{row.department}</p>
                    </td>
                    <td>
                      <p>{row.company}</p>
                    </td>
                    <td>
                      <p>{row.compensation}</p>
                    </td>
                    <td>
                      <p>{row.type}</p>
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }
};

export default ViewAll;
