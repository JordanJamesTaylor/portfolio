import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectRoutes from "./routes/ProjectRoutes";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./styles.css";

export default function App() {
  return (
    <>
      {/* Place nav bar outside of Routes - only code inside Routes is rerendered */}
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <Routes> 
        <Route path="/" element={<Home />} />
        {/* ProjectRoutes contains all routes for projects, /* dynamically changes the route based on user input */}
        <Route path="/projects/*" element={<ProjectRoutes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}