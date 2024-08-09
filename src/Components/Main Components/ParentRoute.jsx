import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const ParentRoute = () => {
  const [activeRoute, setActiveRoute] = useState("/");
  return (
    <div>
      <div className="innerdiv">
        <Link to="/">
          <button
            style={{
              backgroundColor: activeRoute === "/" ? "lightgreen" : "initial",
            }}
            onClick={() => setActiveRoute("/")}
          >
            ALL
          </button>
        </Link>

        <Link to="/FullStack">
          <button
            style={{
              backgroundColor:
                activeRoute === "/FullStack" ? "lightgreen" : "initial",
            }}
            onClick={() => setActiveRoute("/FullStack")}
          >
            FULL STACK DEVELOPMENT
          </button>
        </Link>

        <Link to="/DataScience">
          <button
            style={{
              backgroundColor:
                activeRoute === "/DataScience" ? "lightgreen" : "initial",
            }}
            onClick={() => setActiveRoute("/DataScience")}
          >
            DATA SCIENCE
          </button>
        </Link>

        <Link to="/Cyber">
          <button
            style={{
              backgroundColor:
                activeRoute === "/Cyber" ? "lightgreen" : "initial",
            }}
            onClick={() => setActiveRoute("/Cyber")}
          >
            CYBER SECURITY
          </button>
        </Link>

        <Link to="/Career">
          <button
            style={{
              backgroundColor:
                activeRoute === "/Career" ? "lightgreen" : "initial",
            }}
            onClick={() => setActiveRoute("/Career")}
          >
            CAREER
          </button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default ParentRoute;
