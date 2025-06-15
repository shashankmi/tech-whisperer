
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Star, Award, Target, Zap, Crown } from 'lucide-react';

const achievements = [
  {
    icon: Crown,
    title: "Innovation Leadership Award",
    year: "2023",
    description: "Recognized for driving 5 consecutive successful product launches with 100% market success rate",
    category: "Product Excellence",
    color: "bg-yellow-500"
  },
  {
    icon: Trophy,
    title: "Sales Training Excellence",
    year: "2022",
    description: "Developed training programs that improved technical sales performance by 45% across organization",
    category: "Training Impact",
    color: "bg-blue-500"
  },
  {
    icon: Star,
    title: "Recruitment Innovation",
    year: "2021",
    description: "Created talent acquisition framework reducing hiring time by 60% while improving retention to 95%",
    category: "Talent Excellence",
    color: "bg-green-500"
  },
  {
    icon: Award,
    title: "Technical Leadership",
    year: "2020",
    description: "Led digital transformation initiative resulting in $10M+ cost savings and 300% efficiency improvement",
    category: "Strategic Impact",
    color: "bg-purple-500"
  },
  {
    icon: Target,
    title: "Market Expansion",
    year: "2019",
    description: "Spearheaded entry into 3 new markets with 200% revenue growth in first year",
    category: "Business Growth",
    color: "bg-red-500"
  },
  {
    icon: Zap,
    title: "Process Innovation",
    year: "2018",
    description: "Revolutionized development workflows increasing team productivity by 250%",
    category: "Operational Excellence",
    color: "bg-orange-500"
  }
];

const stats = [
  { label: "Years of Excellence", value: "20+", icon: Trophy },
  { label: "Successful Launches", value: "50+", icon: Star },
  { label: "Professionals Trained", value: "350+", icon: Award },
  { label: "Revenue Impact", value: "$50M+", icon: Target }
];

export const AchievementsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-white/20 text-white">
            Recognition & Impact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Achievements & Awards
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Two decades of consistent excellence and measurable impact across technology, business, and leadership
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300">
                  <IconComponent className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                  <div className="text-3xl font-bold mb-2 text-blue-400">{stat.value}</div>
                  <div className="text-sm text-slate-300">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`${achievement.color} w-12 h-12 rounded-full flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="outline" className="border-white/20 text-white text-xs">
                      {achievement.year}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white">{achievement.title}</h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">{achievement.description}</p>
                  
                  <Badge variant="secondary" className="bg-white/10 text-blue-400 border-0">
                    {achievement.category}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Drive Your Next Success?</h3>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how two decades of experience in technology, sales training, and product innovation can accelerate your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
