import React from "react";

const Cyber = () => {
  const roadmap = [
    {
      title: "Step 1: Basics of Cybersecurity",
      desc: "Understand concepts like CIA triad, malware, phishing, social engineering, firewalls.",
      resources: [
        { name: "Introduction to Cybersecurity - Cisco", link: "https://skillsforall.com/course/introduction-to-cybersecurity" },
        { name: "Simplilearn Basics", link: "https://www.simplilearn.com/tutorials/cyber-security-tutorial/what-is-cyber-security" },
      ],
    },
    {
      title: "Step 2: Networking Fundamentals",
      desc: "Learn TCP/IP, OSI model, ports, IP addressing, DNS, routing, switching, protocols.",
      resources: [
        { name: "Computer Networking - Coursera", link: "https://www.coursera.org/learn/computer-networking" },
        { name: "Network Fundamentals - Cybrary", link: "https://www.cybrary.it/course/networking-fundamentals" },
      ],
    },
    {
      title: "Step 3: System & Web Security",
      desc: "Understand web vulnerabilities like XSS, SQLi, CSRF. Learn about OS hardening and endpoint security.",
      resources: [
        { name: "OWASP Top 10", link: "https://owasp.org/www-project-top-ten/" },
        { name: "PortSwigger Web Security Academy", link: "https://portswigger.net/web-security" },
      ],
    },
    {
      title: "Step 4: Ethical Hacking & Tools",
      desc: "Explore Kali Linux, Metasploit, Nmap, Wireshark, Burp Suite, and penetration testing basics.",
      resources: [
        { name: "TryHackMe", link: "https://tryhackme.com/" },
        { name: "Hack The Box", link: "https://www.hackthebox.com/" },
      ],
    },
    {
      title: "Step 5: Certifications & Specialization",
      desc: "Prepare for certifications like CEH, CompTIA Security+, OSCP, CISSP.",
      resources: [
        { name: "CEH Training - EC-Council", link: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/" },
        { name: "Security+ Guide", link: "https://www.comptia.org/certifications/security" },
      ],
    },
  ];

  const placementResources = [
    { name: "Top Cybersecurity Interview Questions", link: "https://www.geeksforgeeks.org/ethical-hacking/cyber-security-interview-questions/" },
    { name: "Glassdoor Security Analyst Q&A", link: "https://www.glassdoor.co.in/Interview/security-analyst-interview-questions-SRCH_KO0,17.htm" },
    { name: "InterviewBit Cybersecurity Prep", link: "https://www.interviewbit.com/cyber-security-interview-questions/" },
  ];

  const projectIdeas = [
    { name: "Keylogger Detector", link: "https://www.crowdstrike.com/en-us/cybersecurity-101/cyberattacks/keylogger/" },
    { name: "Vulnerability Scanner ", link: "https://github.com/topics/vulnerability-scanner" },
    { name: "Firewall Rules Simulator", link: "https://github.com/topics/firewall" },
    { name: "Network Packet Analyzer (Wireshark Clone)", link: "https://github.com/topics/packet-analyzer" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-red-950 text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-red-400 animate-pulse">🛡️ Cybersecurity Roadmap</h1>
      <p className="text-lg mb-10 text-center text-gray-300">
        Master the skills needed to become a cybersecurity expert from fundamentals to advanced tools.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {roadmap.map((step, index) => (
          <div
            key={index}
            className="bg-black border border-red-500 rounded-xl p-5 shadow-red-600 shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2 text-red-400">{step.title}</h2>
            <p className="mb-3 text-gray-300">{step.desc}</p>
            <ul className="list-disc list-inside text-sm space-y-1 text-red-200">
              {step.resources.map((res, i) => (
                <li key={i}>
                  <a
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-red-400"
                  >
                    {res.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Placement Preparation */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-red-300 mb-6">🎯 Placement Preparation (Cybersecurity)</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {placementResources.map((res, index) => (
            <div
              key={index}
              className="bg-black border border-red-400 rounded-xl p-5 text-red-100 shadow-md hover:shadow-xl transition hover:scale-105 duration-300"
            >
              <h3 className="text-lg font-semibold mb-2 text-red-300">{res.name}</h3>
              <a
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-red-400"
              >
                Visit Resource
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Project Ideas */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-red-300 mb-6">💡 Project Ideas</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectIdeas.map((project, index) => (
            <div
              key={index}
              className="bg-black border border-red-500 rounded-xl p-5 text-red-100 shadow-md hover:shadow-xl transition hover:scale-105 duration-300"
            >
              <h3 className="text-lg font-semibold mb-2 text-red-300">{project.name}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-red-400"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cyber;
