import React from 'react';
import '../styles/_settings.scss';
import { projects } from "../personal";

const imageStyle = {
    width: "100px",
    height: "100px"
};

const ProjectThumbnail = ({ label }) => (
    <div className="project-thumbnail">
        {projects.data.map(project => (
            (project.projectRepo === label) ?
                <div>
                    <img src="/images/beachsmile.jpg" style={imageStyle} alt='beachsmile' />
                </div>
                : <div>not the same</div>
        ))}
    </div>
);

export default ProjectThumbnail;

//: <div style={{ display: 'none' }}></div>