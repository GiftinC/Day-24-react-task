import "./App.css";
import data from "./../data.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ParentRoute from "./Components/Main Components/ParentRoute.jsx";
import All from "./Components/Single Components/ALL.jsx";
import Career from "./Components/Single Components/Career.jsx";
import Cyber from "./Components/Single Components/Cyber.jsx";
import FullStack from "./Components/Single Components/FullStack.jsx";
import DataScience from "./Components/Single Components/DataScience.jsx";

function App() {
  console.log(data);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ParentRoute />}>
          <Route>
            <Route path="/" element={<All data={data} />} />
            <Route path="/FullStack" element={<FullStack data={data} />} />
            <Route path="/DataScience" element={<DataScience data={data} />} />
            <Route path="/Cyber" element={<Cyber data={data} />} />
            <Route path="/Career" element={<Career data={data} />} />
            <Route
              path="*"
              element={<h1>Sorry! No Courses Found , Please Check the URL</h1>}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
