import cpcweb from '../assets/cpc.png';
import smartservice from '../assets/smart.png';
import ksuhelp from '../assets/ksu.png';
import laundry from '../assets/laundry.png'

function Projects() {

    const projects = [
        {
            img: cpcweb, title: 'CUCEK-PHOTOGRAPHY-CLUB', live: 'https://cucek-photography-club.vercel.app', repo: 'https://github.com/CUCEK-PHOTOGRAPHY-CLUB/Client'
        },
        {
            img: smartservice, title: 'SMART-SEVICE-ALLOCATION-SYSTEM', live: 'https://github.com/eesa-ma/smart-sevice-allocation-system', repo: 'https://github.com/eesa-ma/smart-sevice-allocation-system'
        },
        {
            img: ksuhelp, title: 'KSU-HELPLINE', live: 'https://ksu-helpline.vercel.app/', repo: 'https://github.com/rezinch/ksu_helpline'
        },
        {
            img: laundry, title: 'LAUNDRY-SERVICES-WEB-APP', live: 'https://laundry-services-web-app.vercel.app/', repo: 'https://github.com/eesa-ma/Laundry-Services-Web-App'
        },

    ];
 return (
        <section id="projects" className="py-16 px-4 sm:px-8 bg-[#f9f8f3] century-gothic-font">
            <div className="max-w-6xl mx-auto">
                <h1 className='text-center text-teal-950 text-4xl md:text-5xl font-bold mb-12'>My Projects</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    {projects.map((project) => (
                        <div key={project.title} className='bg-white rounded-lg shadow-xl hover:shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-300'>
                            <div className="relative">
                                <img src={project.img} alt={project.title} className='w-full h-56 object-cover' />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex space-x-4">
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition-colors"> Live Site </a>
                                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors" >GitHub </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Projects;