import { IoMdCall } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

function Contact() {

    const contacts = [
        {
            logo: <IoMdCall />,
            title: 'Call Me',
            content: '+91 9072341909',
            href: 'tel:+919072341909'
        },
        {
            logo: <SiGmail />,
            title: 'Email',
            content: 'eesama30april04@gmail.com',
            href: 'mailto:eesama30april04@gmail.com'
        },
        {
            logo: <FaLinkedin />,
            title: 'Linkedin',
            content: 'Eesa M A',
            href: 'https://www.linkedin.com/in/eesa-m-a-a37245264/'
        },
    ];

    return (
        <>
            <div id="contact" className="p-10 md:p-20 space-y-10 century-gothic-font text-teal-900">
                <h1 className='text-center text-teal-950 text-5xl md:text-7xl font-bold'>Get In Touch</h1>
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-3xl font-semibold">Let's Build Something Amazing Together</h2>
                        <p className="text-lg text-teal-700">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out using any of the methods below.
                        </p>
                        <div className="space-y-6">
                            {contacts.map((contact, index) => (
                                <a href={contact.href} key={index} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group border border-teal-200 hover:border-teal-400 p-2 rounded-md">
                                    <div className="text-2xl text-teal-500">
                                        {contact.logo}
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-lg">{contact.title}</p>
                                        <p className="text-teal-700 group-hover:underline">{contact.content}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1">
                        <form action="mailto:eesama30april04@gmail.com" method="POST" className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="mb-1 font-medium">Your Name</label>
                                <input type="text" id="name" name="name" required className="p-2 border border-teal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 hover:border-teal-400" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="mb-1 font-medium">Your Email</label>
                                <input type="email" id="email" name="email" required className="p-2 border border-teal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 hover:border-teal-400" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="message" className="mb-1 font-medium">Your Message</label>
                                <textarea id="message" name="message" rows="5" required className="p-2 border border-teal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 hover:border-teal-400"></textarea>
                            </div>
                            <button type="submit" className="p-3 bg-gradient-to-l from-teal-200 via-teal-500 to-teal-950  text-white text-lg rounded-md cursor-pointer hover:scale-105 transition-transform duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;