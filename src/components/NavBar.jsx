import { IoMdCall } from "react-icons/io";

function NavBar() {

    const navLinks = [
        {
            href: '#', label: 'Home'
            
        },
        {
            href: '#', label: 'About'
        },
        {
            href: '#', label: 'Projects'
        },
        {
            href: '/src/assets/reume.pdf', label: 'Resume'
        },
        {
            href: '#', label: 'Experience'
        },
    ];

    return (
        <>
            <header>
                <div className="flex justify-around items-end text-teal-950 bg-[#f9f8f3]">
                    <a href="#" className="gistesy-font text-6xl">eesa</a>
                    <nav className="flex gap-10 pb-2 md:hidden">
                        {navLinks.map((navLink, _) => <a href={navLink.href} key={navLink.label} className="hover:text-teal-700 hover:underline">
                            {navLink.label}
                        </a>)}
                    </nav>
                    <div className="flex items-baseline">
                        <a href="#" className="pb-2">+91 9072341909</a>
                        <IoMdCall />
                    </div>
                    
                </div>
            </header>
        </>
    );
}

export default NavBar