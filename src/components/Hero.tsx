
import { ArrowDownIcon, GitHubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex flex-col justify-center container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <p className="text-primary font-semibold mb-2">👋 Hello, I'm</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
            John Doe
            <span className="block mt-2 text-primary">Web Developer</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
            I create beautiful, functional, and responsive websites with modern technologies
            that help businesses grow and reach their goals.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <GitHubIcon size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <LinkedinIcon size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="mailto:hello@example.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <MailIcon size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end animate-fade-in">
          <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-primary to-primary/20 rounded-full blur-3xl opacity-20 absolute"></div>
          <div className="w-full max-w-md aspect-square rounded-2xl bg-secondary border border-border p-3 relative">
            <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDownIcon size={24} />
          <span className="sr-only">Scroll Down</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
