import React from "react";
import { useParams } from "react-router-dom";

export default function Projects(){
    const { name } = useParams();
    
    return <h1>{name}</h1>
}