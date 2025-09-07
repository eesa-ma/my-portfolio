
function Home() {

    return (
        
        <>
            <div className="md:h-[90vh] min-h-[80vh] flex justify-center items-center bg-[#f9f8f3] px-20 md:px-40 ">
               <div className="space-y-2">
                    <p className="text-teal-400 text-lg">Hi,my name is</p>
                    <p className="text-teal-950 text-5xl md:text-7xl">EESA M A</p>
                    <p className="text-5xl md:text-7xl text-teal-700">Frontend Develepor</p>
                    <p className="text-lg text-teal-700">With a passion for clean code and elegant design, I am a Frontend Developer</p>
                    <p className="text-lg text-teal-700">who brings ideas to life. I focus on engineering exceptional web applications</p>
                    <p className="text-lg text-teal-700">that are both highly functional and visually engaging.</p>
                    <a href="/src/assets/reume.pdf" target="_blank" rel="noopener noreferrer"><button className=" p-4 bg-gradient-to-r from-teal-200 via-teal-500 to-teal-950 rounded text-teal-50 text-lg">Check Out My Resume</button> </a>
               </div>
            </div>
        </>
    );
}

export default Home;

