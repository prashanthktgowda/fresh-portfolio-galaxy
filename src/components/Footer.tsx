
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: "GitHub", 
      icon: <Github size={20} />, 
      url: "https://github.com" 
    },
    { 
      name: "LinkedIn", 
      icon: <Linkedin size={20} />, 
      url: "https://linkedin.com" 
    },
    { 
      name: "Twitter", 
      icon: <Twitter size={20} />, 
      url: "https://twitter.com" 
    },
    { 
      name: "Instagram", 
      icon: <Instagram size={20} />, 
      url: "https://instagram.com" 
    },
    { 
      name: "Mail", 
      icon: <Mail size={20} />, 
      url: "mailto:hello@example.com" 
    },
  ];

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-display font-bold text-primary mb-2">Portfolio</h3>
            <p className="text-muted-foreground">Crafting beautiful web experiences</p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                size="icon"
                variant="ghost"
                asChild
              >
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              </Button>
            ))}
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} John Doe. All rights reserved.
          </p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
