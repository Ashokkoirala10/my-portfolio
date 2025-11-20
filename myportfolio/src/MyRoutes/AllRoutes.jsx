import { Routes, Route, Outlet } from "react-router-dom";
import Home from "../Component/Home";
import About from "../Component/About";
import Projects from "../Component/Projects";
import Skills from "../Component/Skills";
import Achievements from "../Component/Achievements"; // Import Achievements

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="/about" element={<Outlet />}>
        <Route index element={<About />} />
      </Route>

      <Route path="/projects" element={<Outlet />}>
        <Route index element={<Projects />} />
      </Route>

      <Route path="/skills" element={<Outlet />}>
        <Route index element={<Skills />} />
      </Route>

      <Route path="/achievements" element={<Outlet />}>
        <Route index element={<Achievements />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
