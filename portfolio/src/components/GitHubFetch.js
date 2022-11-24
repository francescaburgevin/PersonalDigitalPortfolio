
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import ProjectCard from './ProjectCard';


function GitHubFetch() {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        fetchRepos();
    }, [])

    const fetchRepos = async () => {
        const response = await axios.get("https://api.github.com/users/francescaburgevin/repos")
        setRepos(response.data);
    }

    const listStyle = {
        height: '300px',
        width: "80%",
        background: "transparent",
        border: "2px solid lightgray",
        borderRadius: "8px",
    };

    return (

        <div>
            {repos.map(repo => (
                <li style={listStyle} key={repo}>
                    <ProjectCard repo={{ repo }} />
                </li>
            )
            )}
        </div>
    )
}
export default GitHubFetch;

