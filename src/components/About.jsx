import { motion } from 'framer-motion';
import laptop from '../assets/laptop.jpg';
import keybourd from '../assets/keybourd.jpg';

const About = () => {
    return (
        <section
            id="about"
            className="relative py-16 px-6 md:px-20 bg-gradient-to-br from-black via-black to-blue-900 animate-gradientSlow
     text-white"
        >
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-glow">About SkillSprint</h2>
                <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                    SkillSprint is your all-in-one destination for mastering tech skills — <span className="text-sky-400 font-semibold">completely free</span>. Whether you're a beginner or looking to build real-world projects, we've got you covered!
                </p>
            </div>

            {/* Block 1 */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <img
                        src={keybourd}
                        alt="Learning Experience"
                        className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 w-full h-[300px] object-cover"
                    />
                </motion.div>

                <motion.div
                    className="text-lg text-slate-300"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="mb-4">
                        🚀 Built for Tech students, SkillSprint provides structured roadmaps, curated resources, and project-based learning.
                    </p>
                    <p className="mb-4">
                        💡 From beginner tutorials to placement preparation, we support your growth journey every step of the way.
                    </p>
                   
                </motion.div>
            </div>

            {/* Block 2 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <motion.div
                    className="text-lg text-slate-300"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="mb-4">
                       🚀 Build skills through interactive quizzes, real-world projects, and guided learning paths—all in one place.
                    </p>
                    <p className="mb-4">
                        🌱 Join a community of learners, build in public, and level up your tech career — without paying a single rupee.
                    </p>
                    
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <img
                        src={laptop}
                        alt="Project Building"
                        className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 w-full h-[300px] object-cover"
                    />
                </motion.div>
            </div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 flex justify-center"
            >
                <a
                    href="#tracks"
                    className="bg-gradient-to-r from-sky-500 to-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:from-blue-600 hover:to-sky-600 transition-all duration-300"
                >
                    Explore Learning Tracks
                </a>
            </motion.div>

        </section>
    );
};

export default About;
