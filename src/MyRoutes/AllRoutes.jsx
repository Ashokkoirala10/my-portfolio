import { Routes, Route, Outlet } from "react-router-dom";
import Home from "../Component/Home";
import About from "../Component/About";
import Projects from "../Component/Projects";
import Skills from "../Component/Skills"; // Import Skills Page
import Contact from "../Component/Contact";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet></Outlet>}>
         <Route index element={<Home></Home>} ></Route>
      </Route>
      <Route path="/about" element={<Outlet></Outlet>}>
         <Route index element={<About></About>} ></Route>
      </Route>
      <Route path="/projects" element={<Outlet></Outlet>}>
         <Route index element={<Projects></Projects>} ></Route>
      </Route>
      <Route path="/skills" element={<Outlet></Outlet>}>
         <Route index element={<Skills></Skills>} ></Route>
      </Route>
      <Route path="/contact" element={<Outlet></Outlet>}>
         <Route index element={<Contact></Contact>} ></Route>
      </Route>

    </Routes>
  );
};

export default AllRoutes;

