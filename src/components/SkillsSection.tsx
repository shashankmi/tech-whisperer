
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Users, TrendingUp, Cog, Brain, Rocket } from 'lucide-react';

const skillCategories = [
  {
    category: "Technical Leadership",
    icon: Code,
    color: "text-blue-600",
    skills: [
      { name: "System Architecture", level: 95 },
      { name: "Cloud Technologies", level: 90 },
      { name: "DevOps & CI/CD", level: 85 },
      { name: "Technical Strategy", level: 95 }
    ]
  },
  {
    category: "Sales & Training",
    icon: TrendingUp,
    color: "text-green-600",
    skills: [
      { name: "Technical Sales", level: 90 },
      { name: "Curriculum Development", level: 95 },
      { name: "Sales Enablement", level: 88 },
      { name: "Presentation Skills", level: 92 }
    ]
  },
  {
    category: "Team Building",
    icon: Users,
    color: "text-purple-600",
    skills: [
      { name: "Talent Acquisition", level: 90 },
      { name: "Team Leadership", level: 95 },
      { name: "Mentoring", level: 92 },
      { name: "Culture Building", level: 88 }
    ]
  },
  {
    category: "Product Innovation",
    icon: Rocket,
    color: "text-orange-600",
    skills: [
      { name: "Market Analysis", level: 85 },
      { name: "Product Strategy", level: 90 },
      { name: "Go-to-Market", level: 88 },
      { name: "Innovation Management", level: 92 }
    ]
  }
];

const certifications = [
  "AWS Solutions Architect Professional",
  "Certified Scrum Master (CSM)",
  "PMP - Project Management Professional",
  "Google Cloud Professional",
  "Microsoft Azure Expert",
  "Certified Sales Professional (CSP)"
];

const technologies = [
  "Python", "JavaScript", "React", "Node.js", "AWS", "Azure", "Docker", 
  "Kubernetes", "Terraform", "Jenkins", "Git", "SQL", "NoSQL", "Microservices",
  "API Design", "GraphQL", "Redis", "Elasticsearch", "MongoDB", "PostgreSQL"
];

export const SkillsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Expertise Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Skills & Competencies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive skill set spanning technical excellence, business acumen, and leadership capabilities
          </p>
        </div>

        {/* Core Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <IconComponent className={`w-8 h-8 ${category.color}`} />
                    <h3 className="text-2xl font-bold text-slate-900">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-slate-700">{skill.name}</span>
                          <span className="text-sm text-slate-500">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications & Technologies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Brain className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-slate-900">Certifications</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="justify-start p-3 text-sm">
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technologies */}
          <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Cog className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-slate-900">Technologies</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="text-sm hover:bg-blue-50 transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
