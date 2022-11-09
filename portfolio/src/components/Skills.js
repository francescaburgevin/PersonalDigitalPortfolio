import React from 'react';
import { skills } from "../personal";

const Skills = () => {
    return (
        <div className='skills'>
            {skills.data.map((skill)=>{
                return(
                <div className="xxx">
                    <li>
                        <h3>{skill.skillName}</h3>
                        <img src={skill.skillLogo} alt={skill.skillName} />
                    </li>
                </div>
                )
            })}
        </div>
    )};

export default Skills;