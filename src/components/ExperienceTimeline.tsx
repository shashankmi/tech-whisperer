
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, TrendingUp, Users, Rocket } from 'lucide-react';

const timelineData = [
  {
    period: "2020 - Present",
    title: "Senior Technology Strategist",
    company: "Innovation Leader",
    description: "Leading cross-functional teams in product ideation to market success, driving sales enablement programs, and spearheading recruitment initiatives for high-growth tech teams.",
    achievements: ["5 successful product launches", "300% increase in sales team efficiency", "Built 3 engineering teams"],
    icon: Rocket,
    color: "bg-blue-500"
  },
  {
    period: "2015 - 2020",
    title: "Technical Sales Director",
    company: "Growth Catalyst",
    description: "Bridged technical complexity with sales strategy, developed comprehensive training programs, and established recruitment frameworks for technical roles.",
    achievements: ["Trained 200+ sales professionals", "40% improvement in technical sales", "Reduced hiring time by 60%"],
    icon: TrendingUp,
    color: "bg-green-500"
  },
  {
    period: "2010 - 2015",
    title: "Senior Software Architect",
    company: "Technical Foundation",
    description: "Built scalable systems while mentoring teams, contributing to talent acquisition strategies, and laying groundwork for sales-technical alignment.",
    achievements: ["Architected 10+ enterprise systems", "Mentored 50+ developers", "Established technical standards"],
    icon: Users,
    color: "bg-purple-500"
  },
  {
    period: "2004 - 2010",
    title: "Software Engineering Lead",
    company: "Early Career Excellence",
    description: "Rapid progression from individual contributor to team leadership, demonstrating early aptitude for combining technical skills with business acumen.",
    achievements: ["Led 5 major projects", "Built first technical team", "Established coding standards"],
    icon: Calendar,
    color: "bg-orange-500"
  }
];

export const ExperienceTimeline = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Career Journey
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Two Decades of Innovation
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From technical implementation to strategic leadership, a journey of continuous growth and impact
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-green-200 via-purple-200 to-orange-200" />
          
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                      <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                          <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-lg text-blue-600 font-semibold">{item.company}</p>
                          </div>
                          <Badge variant="secondary" className="text-sm font-medium w-fit">
                            {item.period}
                          </Badge>
                        </div>
                        
                        <p className="text-slate-700 mb-6 leading-relaxed">{item.description}</p>
                        
                        <div className="space-y-2">
                          <h4 className="font-semibold text-slate-900 mb-3">Key Achievements:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {item.achievements.map((achievement, i) => (
                              <div key={i} className="bg-slate-50 rounded-lg p-3 text-sm text-slate-700 border border-slate-100">
                                {achievement}
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
