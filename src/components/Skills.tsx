
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML5", proficiency: 70 },
        { name: "CSS3 / SCSS", proficiency: 50 },
        { name: "JavaScript", proficiency: 45 },
        { name: "React.js", proficiency: 55 },
        { name: "Tailwind CSS", proficiency: 60 },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", proficiency: 50 },
        { name: "Express", proficiency: 40 },
        { name: "Python", proficiency: 75 },
        { name: "Django", proficiency: 70 },
        
        { name: "RESTful APIs", proficiency: 10 },
      ],
    },
    {
      category: "Database & Tools",
      skills: [
        { name: "MongoDB", proficiency: 65 },
        { name: "PostgreSQL", proficiency: 50 },
        { name: "Firebase", proficiency: 20 },
        { name: "Git / GitHub", proficiency: 90 },
        { name: "Docker", proficiency: 40 },
        { name: "AWS", proficiency: 20 },
      ],
    },
    {
      category: "Design & Others",
      skills: [
        { name: "UI/UX Design", proficiency: 50 },
        { name: "Adobe XD", proficiency: 20 },
        { name: "Responsive Design", proficiency: 50 },
         ],
    },
  ];

  return (
    <section id="skills" className="py-20 container">
      <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle mx-auto">
          A comprehensive overview of my technical skills and expertise in various technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={index} className="hover-card animate-fade-in">
            <CardContent className="p-6">
              <h3 className="text-xl font-display font-bold mb-6">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
