import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Clock, Laptop } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: <Trophy size={24} className="text-primary" />,
      value: "1+",
      label: "Years Experience"
    },
    {
      icon: <Users size={24} className="text-primary" />,
      value: "10+",
      label: "Projects Completed"
    },
    {
      icon: <Laptop size={24} className="text-primary" />,
      value: "2",
      label: "Internships"
    },
    {
      icon: <Clock size={24} className="text-primary" />,
      value: "24/7",
      label: "Support"
    },
  ];

  return (
    <section id="about" className="py-20 container">
      <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle mx-auto">
          Get to know me and my professional journey in Artificial Intelligence and Web Development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative animate-fade-in">
          <div className="bg-gradient-to-tr from-primary/40 to-primary/10 absolute -inset-4 -z-10 rounded-xl blur-xl"></div>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            alt="Developer workspace"
            className="w-full h-auto rounded-xl object-cover shadow-lg"
          />
        </div>

        <div className="animate-slide-in">
          <h3 className="text-2xl font-display font-bold mb-4">AI & Web Developer</h3>
          <p className="text-muted-foreground mb-6">
            I am a highly motivated Artificial Intelligence and Machine Learning student with a passion for innovation and leveraging AI to solve real-world problems. I specialize in creating visually appealing and functional websites while integrating AI-powered features.
          </p>
          <p className="text-muted-foreground mb-6">
            With hands-on experience in full-stack development, blockchain, and machine learning, I have worked on impactful projects like a Blood Donor Search Web Portal, Areca Nut Price Forecasting, and a Transparent Fund Allocation System.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="outline">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </Button>
            <Button asChild>
              <a href="#contact">Let's Talk</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {stats.map((stat, index) => (
          <Card key={index} className="hover-card">
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="mb-4 p-3 bg-primary/10 rounded-full">{stat.icon}</div>
              <h4 className="text-3xl font-bold font-display mb-1">{stat.value}</h4>
              <p className="text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default About;