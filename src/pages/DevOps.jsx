import React from "react";

const DevOps = () => {
  const roadmapSteps = [
    {
      title: "1. Linux Basics",
      description: "Learn command line, bash scripting, and file management.",
      resources: [
        { name: "Linux Journey", link: "https://linuxjourney.com/" },
        { name: "OverTheWire Bandit", link: "https://overthewire.org/wargames/bandit/" },
      ],
    },
    {
      title: "2. Networking Concepts",
      description: "Understand protocols, DNS, HTTP/S, ports, and firewalls.",
      resources: [
        { name: "Computer Networking Crash Course", link: "https://www.youtube.com/watch?v=qiQR5rTSshw" },
        { name: "Cisco Networking Basics", link: "https://skillsforall.com/course/networking-basics" },
      ],
    },
    {
      title: "3. Version Control (Git)",
      description: "Learn Git, GitHub, branching, and merging.",
      resources: [
        { name: "Git Handbook", link: "https://guides.github.com/introduction/git-handbook/" },
        { name: "Learn Git Branching", link: "https://learngitbranching.js.org/" },
      ],
    },
    {
      title: "4. CI/CD",
      description: "Use Jenkins, GitHub Actions or GitLab CI/CD pipelines.",
      resources: [
        { name: "GitHub Actions Docs", link: "https://docs.github.com/en/actions" },
        { name: "Jenkins Getting Started", link: "https://www.jenkins.io/doc/" },
      ],
    },
    {
      title: "5. Docker & Containers",
      description: "Containerize applications using Docker.",
      resources: [
        { name: "Docker Docs", link: "https://docs.docker.com/get-started/" },
        { name: "Docker Mastery - YouTube", link: "https://www.youtube.com/watch?v=3c-iBn73dDE" },
      ],
    },
    {
      title: "6. Kubernetes",
      description: "Orchestrate containers using Kubernetes.",
      resources: [
        { name: "Kubernetes Basics", link: "https://kubernetes.io/docs/tutorials/kubernetes-basics/" },
        { name: "Kubernetes Crash Course", link: "https://www.youtube.com/watch?v=X48VuDVv0do" },
      ],
    },
    {
      title: "7. Cloud Services",
      description: "Explore AWS, Azure or GCP for DevOps pipelines.",
      resources: [
        { name: "AWS DevOps Path", link: "https://aws.amazon.com/devops/learning-path/" },
        { name: "Azure DevOps Labs", link: "https://azuredevopslabs.com/" },
      ],
    },
    {
      title: "8. Monitoring & Logging",
      description: "Use Prometheus, Grafana, ELK stack for observability.",
      resources: [
        { name: "Prometheus + Grafana", link: "https://prometheus.io/docs/visualization/grafana/" },
        { name: "ELK Stack Tutorial", link: "https://www.elastic.co/what-is/elk-stack" },
      ],
    },
  ];

  const placementResources = [
    {
      title: "Top DevOps Interview Questions",
      link: "https://www.geeksforgeeks.org/devops-interview-questions/",
    },
    {
      title: "DevOps Scenario-Based Qs",
      link: "https://www.geeksforgeeks.org/devops/devops-interview-questions/",
    },
    {
      title: "AWS DevOps Questions",
      link: "https://www.geeksforgeeks.org/cloud-computing/aws-interview-questions/",
    },
    {
      title: "CI/CD Interview Prep",
      link: "https://www.geeksforgeeks.org/devops/what-is-ci-cd/",
    },
  ];

  const projectIdeas = [
    {
      title: "1. CI/CD Pipeline for Node.js App",
      description: "Build and deploy using GitHub Actions + Heroku/AWS.",
    },
    {
      title: "2. Dockerized MERN Stack App",
      description: "Containerize full-stack app using Docker Compose.",
    },
    {
      title: "3. Kubernetes Cluster for Blog App",
      description: "Use Minikube or AWS EKS to deploy scalable blog app.",
    },
    {
      title: "4. Monitoring System",
      description: "Implement Prometheus + Grafana to monitor a service.",
    },
    {
      title: "5. GitOps with ArgoCD",
      description: "Implement GitOps deployment using ArgoCD and Kubernetes.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white p-6 font-sans">
      <h1 className="text-4xl font-bold mb-6 text-pink-400 animate-pulse">DevOps Roadmap</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {roadmapSteps.map((step, index) => (
          <div
            key={index}
            className="bg-black border border-pink-600 shadow-lg p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-pink-600"
          >
            <h2 className="text-xl font-semibold text-pink-400 mb-2">{step.title}</h2>
            <p className="text-gray-300 mb-2">{step.description}</p>
            <ul className="list-disc ml-5 text-sm text-pink-200 space-y-1">
              {step.resources?.map((res, i) => (
                <li key={i}>
                  <a
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-pink-400"
                  >
                    {res.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Placement Section */}
      <h2 className="text-3xl font-bold mb-4 text-pink-300 underline underline-offset-4">📘 Placement Preparation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {placementResources.map((res, index) => (
          <a
            key={index}
            href={res.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black border border-pink-500 text-white p-5 rounded-xl hover:shadow-pink-500 hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-lg font-bold text-pink-400">{res.title}</h3>
            <p className="text-sm mt-2 text-gray-300">Click to explore →</p>
          </a>
        ))}
      </div>

      {/* Project Section */}
      <h2 className="text-3xl font-bold mb-4 text-pink-300 underline underline-offset-4">🚀 DevOps Project Ideas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectIdeas.map((proj, index) => (
          <div
            key={index}
            className="bg-black border border-pink-500 p-6 rounded-xl hover:shadow-pink-500 hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-pink-400">{proj.title}</h3>
            <p className="text-gray-300 mt-2">{proj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevOps;
