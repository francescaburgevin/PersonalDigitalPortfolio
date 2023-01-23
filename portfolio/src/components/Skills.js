import React from 'react';
import { skills } from "../personal";
import Title from '../components/CustomTitle';


const Skills = () => {
    return (
        <section className='skills'>
            <Title label={"Je maîtrise ..."}></Title>

            <div className='skills-list'>
                {skills.data.map((skill, index) => {
                    return (
                        <div className='column' key={index}>
                            {skill.skillName}
                        </div>
                    )
                })}
            </div>
        </section>
    )
};

export default Skills;