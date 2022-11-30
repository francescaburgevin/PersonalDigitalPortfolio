import React from 'react';
import { projects } from '../personal';
//import Button from '../components/CustomButton';


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
                <h2>{repo.repo.name}</h2>
                <p>{repo.repo.baseline}</p>
                <p>{isSame(repo).description}</p>
                <p>Langue : {repo.repo.language}</p>
                <a href={repo.repo.html_url}>Link</a>
                <p>Propriétaire : {repo.repo.owner.login}</p>
                <p>Dernier push : {getDate(repo.repo.pushed_at)}</p>
                <p>Repo Name : {isSame(repo).name}</p>
                <div className='list'>Repo Techs : {repo.repo.techs}</div>
            </div>

            <div className="right">



                <img src={(isSame(repo).image)} alt="project thumbnail" />
            </div>

        </div>
    );

}

export default ProjectCard;

//(<ProjectThumbnail name={repo.repo.name} />)
