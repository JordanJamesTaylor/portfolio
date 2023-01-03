import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project"
import ProjectList from "./pages/ProjectList";
import NewProject from "./pages/NewProject";

export default function App() {
  return (
    <>
      {/* Place nav bar outside of routes - only the code inside Routes will be rerendered */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="projects/new" element={<NewProject />} /> 
      </Routes>
    </>
  );
}