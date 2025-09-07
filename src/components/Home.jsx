
function Home() {
    // <div className="bg-[#18181B] min-h-screen flex flex-col justify-center items-start px-80 w-full">

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






// export default function Home(){

//     return(
//         <div className="flex  justify-center items-center">
//             <div className="">

//                 <p className="text-[#64ffda] text-lg py-2">Hi, my name is </p>
//                 <p className="text-5xl md:text-7xl  py-2">Harishankar c.</p>
//                 <p className="text-5xl md:text-7xl text-[#8892b0] py-2">Full Stack Developer.</p>
//                 <p className="text-[#8892b0] text-lg py-1">I'm a full stack developer specializing in building and </p>
//                 <p className="text-[#8892b0] text-lg py-1">designing exeptional web appliactions. Currently, I'm focused on </p>
//                 <p className="text-[#8892b0] text-lg py-1">building user-friendly, efficent <a href="" className="text-[#64ffda]">projects</a>.</p>
                
//             </div>
//         </div> 
//     );
// }