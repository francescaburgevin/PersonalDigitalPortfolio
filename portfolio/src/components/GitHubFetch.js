import { React, useState, useEffect } from "react";
import axios from 'axios';
import ProjectCard from './ProjectCard';

function GitHubFetch() {
    let [repos, setRepos] = useState([])

    const listStyle = {
        background: "transparent",
        borderTop: "1px solid lightgray",
        marginBottom: "40px",
        padding: "14px",
        listStyleType: "none"
    };

    useEffect(() => {
        fetchRepos();
    })

    const fetchRepos = async () => {
            const response = await axios({
                method: 'get',
                url: `https://api.github.com/users/francescaburgevin/repos`,
                auth: {
                    username: 'francescaburgevin',
                    password: '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'
                  },
                })
            setRepos(response.data);
    }

    
    return (
        <ul>
            {
                repos.map(repo => (
                <li style={listStyle} key={repo.id}>
                    <ProjectCard repo={repo} />
                </li>
            )
            )}
        </ul>
    )
                
}
export default GitHubFetch;

