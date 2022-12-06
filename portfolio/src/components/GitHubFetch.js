
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
        background: "transparent",
        borderTop: "1px solid lightgray",
        marginBottom: "40px",
        padding: "14px",
        listStyleType: "none"
    };

    return (
        <ul>
            {repos.map(repo => (
                <li style={listStyle} key={repo}>
                    <ProjectCard repo={{ repo }} />
                </li>
            )
            )}
        </ul>
    )
}
export default GitHubFetch;

