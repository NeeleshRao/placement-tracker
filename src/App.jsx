import "./App.css";
import HandleViews from "./pages/HandleViews";
import { Route, Routes } from "react-router-dom";
import NavBar from "./pages/NavBar";
import AddData from "./pages/AddData";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HandleViews />} />
        <Route path="/adddata" element={<AddData />} />
      </Routes>
    </>
  );
}

export default App;
