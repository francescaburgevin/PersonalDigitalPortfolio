import React from 'react';
import { skills } from "../personal";
import Title from '../components/CustomTitle';
import SubTitle from '../components/CustomSubTitle';

const Skills = () => {
    return (
        <section className='skills'>
            <Title label={"Je travaille avec ..."}></Title>
            
            <div className='skills-list'>
            {skills.data.map((skill)=>{
                return(
                    <div className='column'>
                        <img src={skill.skillLogo} alt={skill.skillName} />
                        <SubTitle>{skill.skillName}</SubTitle>
                    </div>
                )
            })}
            </div>
        </section>
    )};

export default Skills;