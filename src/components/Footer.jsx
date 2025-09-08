import { FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {

    const Socials = [
        {
            href: 'https://www.facebook.com/share/12Jrm5f5th6/?mibextid=qi2Omg', icon: FaFacebook
        },
        {
            href: 'https://www.instagram.com/eesa.ma?igsh=emI5ajN1NmVleTF6', icon: FaInstagram
        },
        {
            href: 'https://www.linkedin.com/in/eesa-m-a-a37245264/', icon: FaLinkedin
        },
        {
            href: 'https://github.com/eesa-ma', icon: FaGithub
        },
    ];

    return (
        <>
            <div className="p-10 space-y-10 century-gothic-font text-teal-950 bg-[#f9f8f3]">
                <div className="flex flex-col items-center gap-5 md:flex-row  md:justify-around">
                    <a href="#" className="gistesy-font text-6xl">eesa</a>
                    <p>© 2025 eesa. All rights reserved.</p>
                    <div className="flex gap-10">
                        {Socials.map((social, index) => {
                            const Icon = social.icon;
                            return(
                                  <a key={index} href={social.href} target="_blank" rel="noopener noreferrer"><Icon size={24}/></a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;