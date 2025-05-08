import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Linkedin, Mail, Award, BookmarkCheck, Trophy } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");

  // Profile information
  const profileInfo = {
    name: "Pulim Sai Santosh Reddy",
    title: "Aspiring Machine Learning Engineer & Full-Stack Enthusiast",
    image: "/lovable-uploads/91a19fa3-a908-4a76-abb4-bf3229b11b17.png",
    profileUrl: "https://saisantoshreddy.dev", // Keeping URL for reference but not displaying
    contacts: {
      linkedin: "https://www.linkedin.com/in/sai-santosh-reddy-pulim",
      github: "https://github.com/PSantoshReddy12205497",
      email: "saisantoshreddy27@gmail.com",
      mobile: "+91-6300094352"
    }
  };

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Alzheimer's Disease Prediction System",
      description:
        "Developed an AI-driven Alzheimer's Disease Prediction System. Designed a Streamlit-based UI for an intuitive and user-friendly experience using Support Vector Machine (SVM) with 93% accuracy. Deployed with IBM Cloud, Streamlit for accessibility, and real-time testing.",
      image: "/lovable-uploads/d5b4bc00-b24e-45ce-881f-3ee289a42c87.png",
      technologies: ["Python", "scikit-learn", "NumPy", "pandas", "TensorFlow", "Streamlit", "IBMCloud"],
      githubLink: "https://github.com/arpy8/Alzheimers_Prediction_System",
      liveLink: "#",
      date: "July 2024",
    },
    {
      id: 2,
      title: "E-Commerce Recommendation System",
      description:
        "Built a recommendation system using unsupervised algorithms (K-Means, DBSCAN) to improve e-commerce user targeting and satisfaction.",
      image: "/lovable-uploads/0f0cdf39-3f28-439e-82f2-2d5a227f1960.png",
      technologies: ["Python", "Machine Learning", "K-Means", "DBSCAN", "Streamlit"],
      githubLink: "https://github.com/Vaibhav67979/Ecommerce-product-recommendation-system",
      liveLink: "#",
      date: "November 2024",
    },
    {
      id: 3,
      title: "Cold Email Generator",
      description:
        "Developed a Streamlit application for generating cold emails based on skill requirements, powered by Llama-3, Groq API, Langchain, ChromaDB, and FastAPI.",
      image: "/lovable-uploads/c80f0006-00b3-4e29-890b-88b2877d5dd6.png",
      technologies: ["Python", "Groq", "Langchain", "ChromaDB", "Streamlit", "FastAPI"],
      githubLink: "https://github.com/codebasics/project-genai-cold-email-generator",
      liveLink: "#",
      date: "September 2024",
    },
  ];

  // Skills and highlights
  const skills = [
    { category: "Languages", value: "C++, JavaScript, Python, Java" },
    { category: "Frameworks", value: "HTML, CSS, Fast API, Docker" },
    { category: "Tools/Platforms", value: "MySQL, Streamlit, Github, TensorFlow, Langchain" },
    { category: "Soft Skills", value: "Problem-Solving, Team Player, Adaptability, Communication" },
  ];

  // Certifications and achievements
  const certifications = [
    { title: "IBM Certification – Machine Learning", date: "July 2024" },
    { title: "IBM Verification on Chatbot Building", date: "July 2024" },
    { title: "Generative AI by DeepLearning.ai", date: "Sept 2023" },
    { title: "100 Days of Code: Python Pro Bootcamp", date: "Sept 2023" }
  ];
  
  const achievements = [
    { title: "Hackerrank 5 Star Badge Python", date: "Jan 2024" },
    { title: "Top 10% at University (Academics and extra-curriculars)", date: "" }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-6 px-4 md:px-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">{profileInfo.name}</h1>
            <ul className="flex flex-wrap mt-2 gap-x-4 gap-y-1 text-base text-gray-700">
              <li className="flex items-center gap-1">
                <Linkedin size={18} className="text-blue-700" />
                <a href={profileInfo.contacts.linkedin} className="hover:underline" target="_blank">
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-1">
                <Github size={18} />
                <a href={profileInfo.contacts.github} className="hover:underline" target="_blank">
                  Github
                </a>
              </li>
              <li className="flex items-center gap-1">
                <Mail size={18} className="text-rose-700" />
                <a href={`mailto:${profileInfo.contacts.email}`} className="hover:underline">Email</a>
              </li>
              <li className="flex items-center gap-1">
                <span className="font-semibold text-gray-700">Mobile:</span>
                <span className="font-mono">{profileInfo.contacts.mobile}</span>
              </li>
            </ul>
          </div>
          <nav>
            <ul className="flex space-x-2 md:space-x-4">
              <li>
                <Button
                  variant={activeTab === "about" ? "default" : "ghost"}
                  onClick={() => setActiveTab("about")}
                >
                  About
                </Button>
              </li>
              <li>
                <Button
                  variant={activeTab === "projects" ? "default" : "ghost"}
                  onClick={() => setActiveTab("projects")}
                >
                  Projects
                </Button>
              </li>
              <li>
                <Button
                  variant={activeTab === "certifications" ? "default" : "ghost"}
                  onClick={() => setActiveTab("certifications")}
                >
                  Certifications
                </Button>
              </li>
              <li>
                <Button
                  variant={activeTab === "contact" ? "default" : "ghost"}
                  onClick={() => setActiveTab("contact")}
                >
                  Contact
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 md:px-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          {/* Tab Triggers */}
          <TabsList className="hidden">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          {/* About Tab */}
          <TabsContent value="about" className="space-y-8">
            <section className="bg-white rounded-lg shadow p-6 animate-fade-in">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3 flex flex-col items-center">
                  <Avatar className="w-40 h-40 border-4 border-violet-300 shadow hover:scale-105 transition-transform">
                    <AvatarImage src={profileInfo.image} alt="Profile" className="object-cover" />
                    <AvatarFallback>SSR</AvatarFallback>
                  </Avatar>
                  <div className="mt-4 text-center">
                    <h2 className="text-xl font-bold">{profileInfo.name}</h2>
                    <p className="text-base text-gray-600">{profileInfo.title}</p>
                    {/* Removed the displayed URL here */}
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="mb-6 text-gray-800">
                    Passionate developer experienced with machine learning, data science, and full-stack web development. I thrive at the intersection of technology and problem-solving, with a genuine love for scalable solutions and impactful engineering.
                  </p>
                  <h3 className="text-lg font-semibold mb-2 text-violet-800">Skills at a Glance:</h3>
                  <div className="mb-4">
                    <ul className="space-y-1">
                      {skills.map(s => (
                        <li key={s.category}><b className="font-medium">{s.category}:</b> <span className="text-gray-700">{s.value}</span></li>
                      ))}
                    </ul>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-violet-800 mt-4">Education:</h3>
                  <div>
                    <div className="flex justify-between text-base">
                      <span>Lovely Professional University <span className="italic text-sm">(Punjab, India)</span></span>
                      <span className="text-gray-600">Since September 2022</span>
                    </div>
                    <p className="text-gray-700 text-sm mb-1">Bachelor of Technology - Computer Science & Engineering: <b>CGPA: 7.03</b></p>
                    <div className="flex gap-6 text-sm text-gray-700 mb-1">
                      <span>Narayana Junior College <span className="italic">(2018-2020, 75%)</span></span>
                      <span>Narayana Olympiad School <span className="italic">(2017-2018, 100%)</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-8">
            <section className="bg-white rounded-lg shadow p-6 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4 text-violet-900">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <Card key={project.id} className="overflow-hidden border-2 border-violet-200 hover:shadow-lg transition-shadow">
                    <div className="relative h-48 bg-gray-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-xl font-semibold mb-2 text-violet-800">{project.title}</h3>
                      <span className="bg-violet-50 text-violet-900 px-2 py-1 rounded-full text-xs font-medium mb-2 inline-block">{project.date}</span>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-2 mt-2">
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            GitHub
                          </a>
                        </Button>
                        <Button size="sm" asChild>
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>
          
          {/* Certifications & Achievements */}
          <TabsContent value="certifications" className="space-y-8">
            <section className="bg-white rounded-lg shadow p-6 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6 text-violet-900">Certifications & Achievements</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Certifications */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <BookmarkCheck className="text-violet-700" size={24} />
                    <h3 className="text-xl font-semibold text-violet-800">Certifications</h3>
                  </div>
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <Card key={index} className="border-l-4 border-l-violet-500 hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex justify-between">
                            <h4 className="font-medium">{cert.title}</h4>
                            <span className="text-sm text-violet-600">{cert.date}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                {/* Achievements */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Trophy className="text-amber-600" size={24} />
                    <h3 className="text-xl font-semibold text-violet-800">Achievements</h3>
                  </div>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <Card key={index} className="border-l-4 border-l-amber-500 hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex justify-between">
                            <h4 className="font-medium">{achievement.title}</h4>
                            {achievement.date && (
                              <span className="text-sm text-amber-600">{achievement.date}</span>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Contact */}
          <TabsContent value="contact" className="space-y-8">
            <section className="bg-white rounded-lg shadow p-6 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4 text-violet-900">Contact Me</h2>
              <p className="text-gray-700 mb-6">
                Feel free to reach out for collaboration, mentorship, or just a conversation!
              </p>
              <div className="grid grid-cols-1">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Contact</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <Mail size={20} className="text-rose-700" />
                      <a href={`mailto:${profileInfo.contacts.email}`} className="text-blue-700 hover:underline">
                        {profileInfo.contacts.email}
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <Linkedin size={20} className="text-blue-700" />
                      <a
                        href={profileInfo.contacts.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline"
                      >
                        linkedin.com/in/sai-santosh-reddy-pulim
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <Github size={20} />
                      <a
                        href={profileInfo.contacts.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline"
                      >
                        github.com/PSantoshReddy12205497
                      </a>
                    </li>
                    {/* Removed the personal website URL from the display here */}
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Mobile:</span>
                      <span className="text-gray-800 font-mono">{profileInfo.contacts.mobile}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-6">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Pulim Sai Santosh Reddy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
