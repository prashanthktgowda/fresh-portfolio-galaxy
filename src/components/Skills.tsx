
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML5", proficiency: 95 },
        { name: "CSS3 / SCSS", proficiency: 90 },
        { name: "JavaScript", proficiency: 90 },
        { name: "TypeScript", proficiency: 85 },
        { name: "React.js", proficiency: 90 },
        { name: "Next.js", proficiency: 80 },
        { name: "Tailwind CSS", proficiency: 90 },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", proficiency: 85 },
        { name: "Express", proficiency: 80 },
        { name: "Python", proficiency: 75 },
        { name: "Django", proficiency: 70 },
        { name: "GraphQL", proficiency: 75 },
        { name: "RESTful APIs", proficiency: 90 },
      ],
    },
    {
      category: "Database & Tools",
      skills: [
        { name: "MongoDB", proficiency: 85 },
        { name: "PostgreSQL", proficiency: 80 },
        { name: "Firebase", proficiency: 85 },
        { name: "Git / GitHub", proficiency: 90 },
        { name: "Docker", proficiency: 70 },
        { name: "AWS", proficiency: 65 },
      ],
    },
    {
      category: "Design & Others",
      skills: [
        { name: "UI/UX Design", proficiency: 80 },
        { name: "Figma", proficiency: 85 },
        { name: "Adobe XD", proficiency: 80 },
        { name: "Responsive Design", proficiency: 95 },
        { name: "SEO Principles", proficiency: 75 },
        { name: "Agile / Scrum", proficiency: 85 },
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
