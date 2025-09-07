// import eesaPhoto from '../assets/eesa_.png';

// function About() {
//     return (
//         <>
//             <div className="m-10 space-y-10 century-gothic-font">
//                 <h1 className="text-center text-teal-950 text-5xl  md:text-7xl font-bold">About Me</h1>
//                 <div className="flex flex-col md:flex-row gap-10">
//                     <div className="flex-1/3 rounded-2xl bg-gradient-to-l from-teal-400 via-teal-700 to-teal-950 p-[2px] lg:flex-1/4 md:h-[260px] lg:h">
//                         <img src={eesaPhoto} alt="eesa-photo" className="w-100 rounded-2xl bg-neutral-50 " />
//                     </div>
//                     <div className="flex-2/3 lg:flex-3/4 flex flex-col gap-5 text-teal-700">
//                         <p>I'm <span className="font-medium text-teal-950">Eesa M A</span>, a passionate <span className="font-medium">Frontend Developer</span> with a strong foundation in building robust, scalable applications.My journey in <span  className="font-medium text-teal-950">web development</span> has been driven by a deep curiosity for <span className="font-medium text-teal-950">solving complex problems and creating efficient systems</span>.</p>
//                         <p>Currently pursuing my <span className="font-medium text-teal-950">Bachelor of Technology (B.Tech) in Information Technology</span> at <span className="font-medium text-teal-950">Cochin University College of Engineering Kuttanad (CUSAT)</span>, I'm constantly expanding my knowledge and skills in the world of software development.</p>
//                         <p>I’m excited to contribute to real-world projects and collaborate with like-minded developers to build impactful solutions.</p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default About;








import eesaPhoto from '../assets/eesa_.png';

function About() {
    return (
        <>
            <div className="m-10 space-y-10 century-gothic-font">
                <h1 className="text-center text-teal-950 text-5xl md:text-7xl font-bold">About Me</h1>
                <div className="flex flex-col md:flex-row items-center gap-10">

                    <div className="w-full max-w-xs md:w-1/3 flex-shrink-0 rounded-2xl bg-gradient-to-l from-teal-400 via-teal-700 to-teal-950 p-[2px]">

                        <img src={eesaPhoto} alt="eesa-photo" className="w-full h-full object-cover rounded-2xl bg-neutral-50" />
                    </div>

                    <div className="flex-1 flex flex-col gap-5 text-teal-700">
                        <p>I'm <span className="font-medium text-teal-950">Eesa M A</span>, a passionate <span className="font-medium">Frontend Developer</span> with a strong foundation in building robust, scalable applications. My journey in <span className="font-medium text-teal-950">web development</span> has been driven by a deep curiosity for <span className="font-medium text-teal-950">solving complex problems and creating efficient systems</span>.</p>
                        <p>Currently pursuing my <span className="font-medium text-teal-950">Bachelor of Technology (B.Tech) in Information Technology</span> at <span className="font-medium text-teal-950">Cochin University College of Engineering Kuttanad (CUSAT)</span>, I'm constantly expanding my knowledge and skills in the world of software development.</p>
                        <p>I’m excited to contribute to real-world projects and collaborate with like-minded developers to build impactful solutions.</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default About;
