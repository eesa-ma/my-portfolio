import React from 'react';

function Experience() {

    const experiences = [
        {
            role: 'Intern',
            company: 'DataHex Digital Solutions',
            date: 'May 2024',
            description: [
                'Completed an internship at a digital solutions firm focused on helping businesses with digital transformation. Gained exposure to digital consultancy practices and contributed to projects aimed at enhancing client digital presence and operational efficiency'
            ]
        },
        {
            role: 'Intern',
            company: 'CSRBOX',
            date: 'June 2024',
            description: [
                'Completed a 4-week internship in AI/ML under the IBM SkillsBuild Program with CSRBOX, gaining foundational knowledge, hands-on experience, and exposure to real-world applications in socially impactful domains.',
            ]
        },
        {
            role: 'Intern',
            company: 'Cucek coding club',
            date: 'August 2024 - present',
            description: [
                'Part of an inclusive platform that empowers engineering students by fostering collaboration, real-world project exposure, and continuous skill development. Contributed to an environment focused on learning, mentorship, and technical growth. Engaged in programming challenges, project-based learning, and peer-to-peer collaboration.',
            ]
        },
    ];


    return (
        <>
            <div id='experience' className="p-10 md:p-20 space-y-10 century-gothic-font bg-[#f9f8f3]">
                <h1 className='text-center text-teal-950 text-5xl md:text-7xl font-bold'>My Experience</h1>
                <div className='space-y-12 md:mx-20'>
                    {experiences.map((exp, index) => (
                        <div key={index} className='flex flex-col md:flex-row gap-4'>
                            <div className='md:w-1/4'>
                                <p className='text-teal-700 font-medium'>{exp.date}</p>
                            </div>
                            <div className='md:w-3/4'>
                                <h2 className='text-2xl font-semibold text-teal-950'>{exp.role}</h2>
                                <h3 className='text-xl text-teal-800'>{exp.company}</h3>
                                <ul className='mt-2 list-disc list-inside text-teal-700 space-y-1'>
                                    {exp.description.map((point, i) => (
                                        <p key={i}>{point}</p>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Experience;