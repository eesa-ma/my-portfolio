import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import jsIcon from '../assets/js.png';
import reactIcon from '../assets/react.png';
import gitIcon from '../assets/git.png';
import githubIcon from '../assets/github.png';
import cppIcon from '../assets/cpp.png';
import phpIcon from '../assets/php.png';
import pythonIcon from '../assets/python.png';
import cIcon from '../assets/c.png';

function Skills() {

    const skills = [
        { img: htmlIcon, title: 'HTML' },
        { img: cssIcon, title: 'CSS' },
        { img: jsIcon, title: 'JAVASCRIPT' },
        { img: reactIcon, title: 'REACT' },
        { img: gitIcon, title: 'GIT' },
        { img: githubIcon, title: 'GITHUB' },
        { img: cppIcon, title: 'C++' },
        { img: phpIcon, title: 'PHP' },
        { img: pythonIcon, title: 'PYTHON' },
        { img: cIcon, title: 'C' },
    ];

    return(
        <>
            <div className="bg-[#f9f8f3] p-20 space-y-10 century-gothic-font">
                <h1 className='text-center text-teal-950 text-5xl md:text-7xl font-bold'>My Skills</h1>
                <div className="grid grid-cols- md:grid-cols-3 lg:grid-cols-5 gap-8">
                {skills.map((skill, index) => ( 
                    <div key={index} className="flex flex-col items-center justify-center pt-6 pb-6  shadow-lg rounded-lg bg-neutral-50 hover:scale-105 transition-transform duration-300">
                        <div className="text-6xl text-teal-700">
                            <img src={skill.img} alt="logo" />
                        </div>
                        <p className="mt-4 text-xl font-semibold text-teal-950">
                            {skill.title}
                        </p>
                    </div>
                ))}
            </div>
            </div>
        </>
    );
}

export default Skills;