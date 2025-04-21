
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");

  const projects = [
    {
      id: 1,
      title: "Web Development Portfolio",
      description: "A responsive portfolio website built with React and TypeScript",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com/username/portfolio",
      liveLink: "https://portfolio.example.com",
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      description: "A data visualization dashboard with interactive charts",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Chart.js", "Firebase"],
      githubLink: "https://github.com/username/dashboard",
      liveLink: "https://dashboard.example.com",
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment integration",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubLink: "https://github.com/username/ecommerce",
      liveLink: "https://ecommerce.example.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-6 px-4 md:px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">My Portfolio</h1>
          <nav>
            <ul className="flex space-x-4">
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
          {/* About Tab */}
          <TabsList className="hidden">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-8">
            <section className="bg-white rounded-lg shadow p-6">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3">
                  <img
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"
                    alt="Profile"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-gray-700 mb-4">
                    Hello! I'm a passionate developer with expertise in web technologies. 
                    I love creating user-friendly applications and solving complex problems.
                  </p>
                  <h3 className="text-xl font-semibold mt-6 mb-3">Education</h3>
                  <div className="mb-4">
                    <div className="flex justify-between">
                      <h4 className="font-medium">Bachelor of Technology in Computer Science</h4>
                      <span className="text-gray-500">2018 - 2022</span>
                    </div>
                    <p className="text-gray-600">University Name</p>
                    <p className="text-gray-600">CGPA: 7.03</p>
                  </div>
                  <h3 className="text-xl font-semibold mt-6 mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "TypeScript", "React", "Node.js", "HTML", "CSS", "Tailwind"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-8">
            <section className="bg-white rounded-lg shadow p-6">
              <h2 className="text-3xl font-bold mb-6">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    <div className="relative h-48 bg-gray-200">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-2">
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

          {/* Contact Tab */}
          <TabsContent value="contact" className="space-y-8">
            <section className="bg-white rounded-lg shadow p-6">
              <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
              <p className="text-gray-700 mb-6">
                Feel free to reach out to me for collaboration or any questions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Email:</span>
                      <a href="mailto:example@email.com" className="text-blue-600 hover:underline">
                        example@email.com
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">LinkedIn:</span>
                      <a
                        href="https://linkedin.com/in/username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        linkedin.com/in/username
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">GitHub:</span>
                      <a
                        href="https://github.com/username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        github.com/username
                      </a>
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
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
