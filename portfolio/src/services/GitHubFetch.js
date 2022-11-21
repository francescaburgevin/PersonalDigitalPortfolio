
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";


function GitHubFetch() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const { data } = await axios.get("https://api.github.com/users/francescaburgevin/repos")
        setPosts(data);

    }

    const getDate = (dateTime) => {
        let splitDate = String(dateTime).split("T")
        splitDate = new Date(splitDate[0]);
        splitDate = splitDate.toLocaleDateString();
        return splitDate;
    }



    console.log(posts);
    return (
        <div>

            <div>

                {posts.map(post => (
                    <div className='post-card'>
                        <li key="{post}">{post.name}

                            {post.language}
                            <a href={post.html_url}>See code</a>
                            <p>Propriétaire: {post.owner.login}</p>
                            <p>Dernier push: {getDate(post.pushed_at)}</p>
                        </li>
                    </div>
                )
                )}

            </div>


        </div>
    )



}
export default GitHubFetch;

