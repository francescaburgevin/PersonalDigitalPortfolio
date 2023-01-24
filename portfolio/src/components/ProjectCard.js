import React from 'react';
import { projects } from '../personal';
import ProjectTitle from './CustomProjectTitle';
import ProjectBaseline from './ProjectBaseline';
import ProjectTechs from './ProjectTechs';
import ProjectLink from './ProjectLink';
import ProjectPoints from './ProjectPoints';


const cardStyle = {
    padding: "10px 20px",
    color: "#02989d",
    fontFamily: "barlow-bold",
    fontSize: "16px"
};

function ProjectCard({ repo }) {

    const isSame = (apiRepo) => {
        let repoName = apiRepo.repo.name;
        let localData = projects.data;

        localData.map((local) => (
            repoName === local.projectRepo ?
                apiRepo.repo = mergeRepo(apiRepo.repo, local)
                : null
        ))
        return apiRepo.repo;
    }

    const mergeRepo = (api, local) => {
        api.owners = local.repoUsername;
        api.title = local.projectTitle;
        api.image = local.projectThumbnail;
        api.baseline = local.projectBaseline;
        api.description = local.projectDescription;
        api.points = local.projectPoints;
        api.techs = local.projectTechs;
        return api
    }

    const getDate = (dateTime) => {
        let splitDate = String(dateTime).split("T")
        splitDate = new Date(splitDate[0]);
        splitDate = splitDate.toLocaleDateString();
        return splitDate;
    }

    isSame(repo);

    return (

        <div style={cardStyle} className="project-card">

            <div className="left">
                <ProjectTitle label={repo.repo.title}></ProjectTitle>
                <ProjectBaseline label={repo.repo.baseline}></ProjectBaseline>
                <p>{isSame(repo).description}</p>

                <ul className='points-list'>
                    {repo.repo.points.map((point) => {
                        return (
                            <ProjectPoints label={point}></ProjectPoints>
                        )
                    })}
                </ul>

                <a target="_blank" rel="noopener noreferrer" href={repo.repo.html_url}>
                    <ProjectLink label={"Lien"}></ProjectLink>
                </a>
                <p>Propriétaire : {repo.repo.owner.login}</p>
                <p>Repository : {repo.repo.name}</p>
                <p>Dernier push : {getDate(repo.repo.pushed_at)}</p>

                <div className='techs-list'>
                    {repo.repo.techs.map((tech) => {
                        return (
                            <ProjectTechs label={tech}></ProjectTechs>
                        )
                    })}
                </div>

            </div>

            <div className="right">
                <img src={(isSame(repo).image)} alt="project thumbnail" />
            </div>

        </div>
    );
}

export default ProjectCard;