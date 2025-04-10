import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/prashanthktgowda/repos");
        const data = await response.json();

        // Transform the data to match the existing structure
        const transformedProjects = data.map((repo) => ({
          id: repo.id,
          title: repo.name,
          description: repo.description || "No description available.",
          image: "https://res.cloudinary.com/dikoe9cct/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1744273931/projectimage_joz0lh.jpg", // Static image
          tags: repo.topics || [], // GitHub topics
          liveUrl: repo.homepage || "#", // Homepage URL if available
          repoUrl: repo.html_url, // Repository URL
        }));

        setProjects(transformedProjects);
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle mx-auto">
            Explore a collection of my recent work that showcases my skills and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden hover-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <h3 className="text-xl font-display font-bold">{project.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button size="sm" variant="outline" asChild>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github size={16} />
                    Code
                  </a>
                </Button>
                {project.liveUrl !== "#" && (
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            <a href="https://github.com/prashanthktgowda" target="_blank" rel="noopener noreferrer">
              View More Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;