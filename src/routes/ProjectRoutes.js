import { Routes, Route } from "react-router-dom";
import Project from "../pages/Project"
import ProjectNav from "../page-components/ProjectNav";
import ProjectList from "../pages/ProjectList";
import NewProject from "../pages/NewProject";

export default function ProjectRoutes(){
    return(
        <>
            <ProjectNav />
            <Routes>
                <Route index element={<ProjectList />} />
                <Route path=":name" element={<Project />} />
                <Route path="new" element={<NewProject />} />
            </Routes>
        </>
    )
}