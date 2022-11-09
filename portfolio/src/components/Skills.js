import React from 'react';
import { skills } from "../personal";

const Skills = () => {
    return (
        <div className='skills'>
            {skills.data.map((skill)=>{
                return(
                <div className='column align-center'>
                    
                        <h3>{skill.skillName}</h3>
                        <img src={skill.skillLogo} alt={skill.skillName} />
                   
                </div>
                )
            })}
        </div>
    )};

export default Skills;