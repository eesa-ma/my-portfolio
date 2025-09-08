import { useState } from 'react';
import { IoMdCall } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import resumePdf from '../assets/reume.pdf';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#projects', label: 'Projects' },
        { href: '#skills', label: 'Skills' },
        { href: resumePdf, label: 'Resume' },
        { href: '#experience', label: 'Experience' },
    ];

    return (
        <header className="w-full h-20 fixed top-0 left-0 bg-[#f9f8f3] z-10 century-gothic-font">
            <div className="flex justify-between items-center w-full h-full px-4 md:px-10 text-teal-950">
                
                <a href="#home" className="gistesy-font text-5xl md:text-6xl">eesa</a>

                <nav className="hidden md:flex items-baseline gap-8">
                    {navLinks.map((navLink) => (
                        <a 
                            href={navLink.href} 
                            key={navLink.label} 
                            className="hover:text-teal-700 hover:underline"
                            target={navLink.label === 'Resume' ? '_blank' : ''}
                            rel="noopener noreferrer"
                        >
                            {navLink.label}
                        </a>
                    ))}
                    <div className="flex items-center">
                        <a href="#contact" className="hover:text-teal-700 hover:underline">Contact Me</a>
                        <IoMdCall className="ml-1" />
                    </div>
                </nav>

                <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="cursor-pointer md:hidden z-20">
                    {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>

                {isMenuOpen && (
                    <nav className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-teal-100 to-teal-300">
                        {navLinks.map((navLink) => (
                            <a 
                                href={navLink.href} 
                                key={navLink.label} 
                                className="py-6 text-4xl hover:text-teal-700 hover:scale-105 duration-200"
                                onClick={() => setIsMenuOpen(false)}
                                target={navLink.label === 'Resume' ? '_blank' : ''}
                                rel="noopener noreferrer"
                            >
                                {navLink.label}
                            </a>
                        ))}
                         <a href="#contact"  
                            className="py-6 text-4xl hover:text-teal-700 hover:scale-105 duration-200"
                            onClick={() => setIsMenuOpen(false)}>
                            Contact Me
                        </a>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default NavBar;