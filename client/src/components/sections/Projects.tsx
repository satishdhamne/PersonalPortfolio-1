import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

// Projects data - easily add or modify projects here
const projects = [
  {
    title: " Netjets : Flight Booking Website",
    description: "Netjets was presented at the Reimagin  competition showcasing its innovative approach to web redesign.",
    image: "[Project Image URL]",
    technologies: ["HTML", "CSS", "GSAP", "JavaScript"],
    github: "https://github.com/satishdhamne/FliteBookingWeb",
    demo: "https://satishdhamne.github.io/FliteBookingWeb/",
  },
  {
    title: "PictureNest",
    description: "PictureNest is a personal gallery web application designed for users to upload, view, and manage their collection of images seamlessly.",
    image: "/attached_assets/pictureNest.png",
    technologies: ["JavaScript", "Express", "Node.js"],
    github: "https://github.com/satishdhamne/PictureNest",
    demo: "https://picturenest-3.onrender.com",
  },
  {
    title: "Autobot",
    description: " A Content Generator, Autobot, an advanced application that generates audio, video, and images using Replicate AI's API.",
    image: "[Project Image URL]",
    technologies: ["Typescript", "React.js", "Next.js"],
    github: "https://github.com/satishdhamne/minor_project",
    demo: "#",
  },
  {
    title: "Social Media App",
    description: "Focused solely on API development, ensuring seamless and scalable data interactions with MongoDB.",
    image: "[Project Image URL]",
    technologies: ["JavaScript", "Express", "Node.js", "MongoDB"],
    github: "https://github.com/satishdhamne",
    demo: "#",
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each one is carefully crafted to solve real-world problems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardTitle>{project.title}</CardTitle>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}