
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

    console.log(posts);
    return (
        <div>

            <div>

                {posts.map(post => (
                    <div>
                        <li key="{post}">{post.name}

                            {post.language}
                            <a href={post.html_url}>See code</a>
                            <p>Owner: {post.owner.login}</p>
                            <p>Last push: {post.pushed_at}</p>
                        </li>
                    </div>
                )
                )}

            </div>


        </div>
    )



}
export default GitHubFetch;

