import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound(){
    const navigate = useNavigate();
    useEffect(() => {
            setTimeout(() => {
            navigate(-1) // redirect to previous page
        }, 2000)
        // eslint-disable-next-line
    }, []);

    return <h1>Page Not Found! Redirecting to back to the previous page...</h1>
}