import { Link, useSearchParams } from "react-router-dom";

export default function PorjectNav(){
    
    const [searchParams, setSearchParams] = useSearchParams({ proj: ""});
    const project = searchParams.get("proj");
    console.log("PROJECT PARAM: ", project);

    return (
        <>
            <Link to={`/projects/${project}`}>Project: {project}</Link>
            <br />
            <Link to="/projects/Space Invaders">Space Invaders</Link>
            <br />
            <Link to="/projects/GetItDone">GetItDone</Link>
            <br />
            <Link to="/projects/Fitness Planner">Fitness Planner</Link>
            <br />
            <Link to="/projects/new">Add a Project</Link>
            <br />
            <input 
                type="text"
                value={project}
                onChange={(e) => setSearchParams({ proj: e.target.value })}
            />
        </>
    )
}