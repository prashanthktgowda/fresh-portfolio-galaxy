
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between py-4">
        <a href="#home" className="text-xl md:text-2xl font-display font-bold text-primary">
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>Get In Touch</Button>
        </ul>

        {/* Mobile menu button */}
        <button
          className="block md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
            <ul className="flex flex-col container py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.name} className="w-full">
                  <a
                    href={link.href}
                    className="block py-2 font-medium text-foreground hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <Button className="w-full">Get In Touch</Button>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
