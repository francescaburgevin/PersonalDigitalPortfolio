import React from 'react';
import { ProjectCard } from './ProjectCard';

export const ProjectList = (props) => (
    <div>
        {props.profiles.map(
            profile => profile.map(
                repo => <ProjectCard key={repo.id} repo={repo} />))}
    </div>
);

export default ProjectList;