import { motion } from 'framer-motion';
import { Rocket, BookOpen, Code, Target,Brain } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-indigo-500" />,
    title: 'Structured Steps',
    desc: 'Guided learning paths for Web Dev, DSA, AI, and more.',
  },
  {
    icon: <Code className="h-8 w-8 text-green-500" />,
    title: 'Real Projects',
    desc: 'Hands-on projects to build real-world skills and portfolio.',
  },
 {
  icon: <Brain className="h-8 w-8 text-purple-500" />,  // If using Lucide Icons
  title: 'Skill Sharpening',
  desc: 'Practice coding, quizzes & more',
}
,
  {
    icon: <Target className="h-8 w-8 text-pink-500" />,
    title: 'Placement Prep',
    desc: 'Interview questions with important resources',
  },
];

const Hero = () => {
  return (
    <main
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden bg-gradient-to-br from-blue-400 via-black to-black animate-gradientSlow"
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/50 backdrop-blur-sm" />

      {/* Main Text */}
      <motion.div
        className="z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white animate-glow tracking-wide">
          SkillSprint
        </h1>
        <p className="text-lg md:text-2xl text-slate-300 max-w-xl mx-auto mb-6">
          Empowering learners to sprint through skills with structured roadmaps and real-world projects.
        </p>

        <motion.div
          className="mt-4 mb-12"
          whileHover={{ scale: 1.1, rotate: 50 }}
          whileTap={{ scale: 0.9 }}
        >
          <Rocket className="mx-auto h-16 w-16 text-sky-400 drop-shadow-xl animate-bounce" />
        </motion.div>
      </motion.div>
        

      {/* Features Section */}
      <div className="z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl w-full px-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:animate-bounce transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-white font-semibold text-lg mb-1">{feature.title}</h3>
            <p className="text-sm text-gray-300">{feature.desc}</p>
          </motion.div>

        ))}
      </div>
      
    </main>
  );
};

export default Hero;
