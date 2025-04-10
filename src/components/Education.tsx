import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const educationDetails = [
    {
      institution: "University of Visvesvaraya College of Engineering",
      degree: "B.Tech in Artificial Intelligence and Machine Learning",
      year: "2025",
      grade: "CGPA: 8.50",
    },
    {
      institution: "Govt. P.U College, Hosanagara",
      degree: "P.C.M.B",
      year: "2021",
      grade: "Percentage: 78.49%",
    },
    {
      institution: "Government High School Kanugodu, Hosanagara",
      degree: "SSLC",
      year: "2019",
      grade: "Percentage: 82.02%",
    },
  ];

  return (
    <section id="education" className="py-20 container">
      <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
        <h2 className="section-title">My Education</h2>
        <p className="section-subtitle mx-auto">
          A summary of my academic journey and achievements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationDetails.map((education, index) => (
          <Card key={index} className="hover-card animate-fade-in">
            <CardContent className="p-6">
              <h3 className="text-xl font-display font-bold mb-2">{education.institution}</h3>
              <p className="text-muted-foreground mb-2">{education.degree}</p>
              <p className="text-muted-foreground mb-2">{education.year}</p>
              <p className="text-muted-foreground font-medium">{education.grade}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Education;