import React from 'react';
export const repoList = [];

export class ProjectCard extends React.Component {
    render() {
        const repo = this.props;
        return (
            <div style={{ width: '20rem', fontSize: '12px' }}>
                <h5>{repo.name}</h5>
                <div>
                    <p>{repo.name}</p>
                </div>
            </div>
        );
    }
}

export default ProjectCard;