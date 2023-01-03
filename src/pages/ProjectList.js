import { Link } from "react-router-dom";

export default function ProjectList(){
    return(
        <>
            <h1>Project List</h1>
            <Link to="/projects/1">Project One</Link>
            <br />
            <Link to="/projects/2">Project Two</Link>
            <br />
            <Link to="/projects/3">Project Three</Link>
            <br />
            <Link to="/projects/new">Add a Project</Link>
        </>
    )
}