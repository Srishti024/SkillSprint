import { motion } from "framer-motion";
import web2 from "../assets/web2.jpg";
import chatgpt from "../assets/chatgpt.jpg";
import web from "../assets/web.jpg";
import Devops from "../assets/Devops.jpg";
import ai from "../assets/ai.jpg";
import uiux from "../assets/uiux.jpg";
import cyber from "../assets/cyber.jpg";
import Database from "../assets/Database.jpg";



import { HashLink as Link } from 'react-router-hash-link';



const tracks = [
    {
        title: "Web Development",
        desc: "Frontend & Backend with projects",
        img: web2,
        link: "/webdev",
    },
    {
        title: "Data Structures & Algorithms",
        desc: "Master DSA for placements",
        img: web,
        link: "/dsa",
    },
    {
        title: "AI & Machine Learning",
        desc: "Learn AI concepts with real use cases",
        img: ai,
        link: "/ai",
    },
    {
        title: "DevOps & Cloud",
        desc: "CI/CD, Docker, Kubernetes, AWS",
        img: Devops,
        link: "/devops",
    },
    {
        title: "UI/UX Design",
        desc: "Craft beautiful and user-friendly designs",
        img: uiux,
        link: "/uiux",
    },
    {
        title: "Cyber Security",
        desc: "Defend systems and ethical hacking basics",
        img: cyber,
        link: "/cyber",
    },
    {
        title: "Database",
        desc: "Relational and Non-relational Databases ",
        img: Database,
        link: "/database",
    },
];

const Tracks = () => {
    return (
        <section
            id="tracks"
            className="min-h-screen px-4 py-16 bg-gradient-to-br from-black via-blue-900 to-blue-950 text-white"
        >
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 animate-glow">
                    Explore Skill Tracks
                </h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                    Choose a path and start your sprint! From Web Dev to AI, we've got you covered.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {tracks.map((track, index) => (
                    <motion.div
                        key={index}
                        className="bg-black rounded-2xl shadow-xl p-5 backdrop-blur-md hover:scale-105 transition-transform duration-500 flex flex-col justify-between"
                        whileHover={{ y: -5 }}
                    >
                        <img
                            src={track.img}
                            alt={track.title}
                            className="rounded-xl h-40 w-full object-cover mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2 text-sky-400">
                            {track.title}
                        </h3>
                        <p className="text-slate-300 mb-4">{track.desc}</p>
                        <Link
                            to={track.link}
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="mt-auto bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                        >
                            View Roadmap
                        </Link>

                    </motion.div>

                ))}
                <Link to="/explore"onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <button className="bg-cyan-500 text-black px-8 py-6 rounded-full font-bold hover:bg-cyan-400 animate-bounce transition mt-6">
                        🚀 Explore More ➤
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Tracks;
