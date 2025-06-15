
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Users2, Lightbulb, Target, Award, BarChart3 } from 'lucide-react';

const contributions = [
  {
    category: "Sales Training Excellence",
    icon: GraduationCap,
    color: "bg-blue-500",
    items: [
      {
        title: "Technical Sales Bootcamp",
        description: "Developed comprehensive 6-week program bridging technical concepts with sales methodology",
        impact: "Improved technical product sales by 45%",
        participants: "200+ sales professionals"
      },
      {
        title: "Solution Architecture Training",
        description: "Created specialized curriculum for enterprise solution selling",
        impact: "Reduced sales cycle by 30%",
        participants: "150+ account executives"
      }
    ]
  },
  {
    category: "Strategic Recruitment",
    icon: Users2,
    color: "bg-green-500",
    items: [
      {
        title: "Technical Talent Pipeline",
        description: "Established systematic approach to identifying and nurturing technical talent",
        impact: "Reduced time-to-hire by 60%",
        participants: "500+ candidates screened"
      },
      {
        title: "Cultural Fit Assessment",
        description: "Developed framework ensuring technical hires align with company values",
        impact: "Improved retention rate to 95%",
        participants: "100+ successful placements"
      }
    ]
  },
  {
    category: "Product Innovation",
    icon: Lightbulb,
    color: "bg-purple-500",
    items: [
      {
        title: "Market-Driven Development",
        description: "Led ideation process combining technical feasibility with market demand",
        impact: "5 products reached market leadership",
        participants: "Cross-functional teams of 50+"
      },
      {
        title: "Launch Strategy Framework",
        description: "Created repeatable methodology for successful product launches",
        impact: "100% success rate on major launches",
        participants: "Multiple product teams"
      }
    ]
  }
];

export const ContributionsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Core Contributions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Driving Business Impact
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Leveraging technical expertise to create measurable business outcomes across sales, talent, and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {contributions.map((contribution, index) => {
            const IconComponent = contribution.icon;
            return (
              <div key={index} className="space-y-6">
                {/* Category Header */}
                <div className="text-center">
                  <div className={`${contribution.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{contribution.category}</h3>
                </div>

                {/* Contribution Items */}
                <div className="space-y-4">
                  {contribution.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="bg-white/80 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-lg font-semibold text-slate-900">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-slate-700 mb-4 leading-relaxed">{item.description}</p>
                        
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Target className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium text-green-700">{item.impact}</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-medium text-blue-700">{item.participants}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Impact Summary */}
        <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="text-center mb-8">
            <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Cumulative Impact</h3>
            <p className="text-slate-600">Measurable outcomes across all contribution areas</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">350+</div>
              <div className="text-sm text-slate-700">Professionals Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">600+</div>
              <div className="text-sm text-slate-700">Candidates Evaluated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-sm text-slate-700">Products Launched</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">$50M+</div>
              <div className="text-sm text-slate-700">Revenue Impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
