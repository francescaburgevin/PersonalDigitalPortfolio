import React from 'react';
import { skills } from "../personal";

const Skills = () => {
    return (
        <section className='skills'>
            <h2>LANGAGES & FRAMEWORKS</h2>
            <div className='skills-list'>
            {skills.data.map((skill)=>{
                return(
                    <div className='column'>
                        <h3 style={{display:"none"}}>{skill.skillName}</h3>
                        <img src={skill.skillLogo} alt={skill.skillName} />
                    </div>
                )
            })}
            </div>
        </section>
    )};

export default Skills;