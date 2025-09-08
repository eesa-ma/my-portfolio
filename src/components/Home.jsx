import resumePdf from '../assets/reume.pdf'

function Home() {

    return (
        
        <>
            <div id='home' className="pt-10 pb-10 md:pb-0 md:pt-0 md:h-[90vh] min-h-[80vh] flex justify-center items-center bg-[#f9f8f3] px-20 md:px-40 century-gothic-font">
               <div className="space-y-2">
                    <p className="text-teal-400 text-lg">Hi,my name is</p>
                    <p className="text-teal-950 text-5xl md:text-7xl font-semibold">EESA M A</p>
                    <p className="text-5xl md:text-7xl text-teal-700">Frontend Develepor</p>
                    <p className="text-lg text-teal-700">With a passion for clean code and elegant design, I am a Frontend Developer</p>
                    <p className="text-lg text-teal-700">who brings ideas to life. I focus on engineering exceptional web applications</p>
                    <p className="text-lg text-teal-700">that are both highly functional and visually engaging.</p>
                    <a href={resumePdf} target="_blank" rel="noopener noreferrer"><button className=" p-4 bg-gradient-to-l from-teal-200 via-teal-500 to-teal-950 rounded text-teal-50 text-lg cursor-pointer hover:scale-105 transition-transform duration-300">Check Out My Resume</button> </a>
               </div>
            </div>
        </>
    );
}

export default Home;

