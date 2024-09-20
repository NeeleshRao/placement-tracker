import React, { useState } from "react";
import ViewAll from "./ViewAll";
import ChooseDept from "./ChooseDept";
import NavBar from "./NavBar";

const HandleViews = () => {
  const [dept, setDept] = useState("all");
  return (
    <>
      <ChooseDept setDept={setDept} />
      <ViewAll dept={dept} />
    </>
  );
};

export default HandleViews;
