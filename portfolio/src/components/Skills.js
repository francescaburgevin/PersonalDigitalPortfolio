import React from 'react';
import { skills } from "../personal";
import Title from '../components/CustomTitle';
import SubTitle from '../components/CustomSubTitle';

const Skills = () => {
    return (
        <section className='skills'>
            <Title label={"Les technos maîtrisées"}></Title>

            <div className='skills-list'>
                {skills.data.map((skill, index) => {
                    return (
                        <div className='column' key={index}>
                            <img src={skill.skillLogo} alt={skill.skillName} />
                            <SubTitle>{skill.skillName}</SubTitle>
                        </div>
                    )
                })}
            </div>
        </section>
    )
};

export default Skills;