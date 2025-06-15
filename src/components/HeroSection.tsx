
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Linkedin, Github } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-slate-600/5" />
      
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium bg-white/50 backdrop-blur-sm border-blue-200">
            20+ Years in Technology Excellence
          </Badge>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent leading-tight">
          Senior IT Professional
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          Transforming technical expertise into business success through 
          <span className="font-semibold text-blue-700"> sales training</span>, 
          <span className="font-semibold text-blue-700"> strategic recruitment</span>, and 
          <span className="font-semibold text-blue-700"> product innovation</span>
        </p>
        
        <div className="mb-12">
          <p className="text-lg text-slate-500 mb-8">
            Two decades of bridging the gap between cutting-edge technology and market-driven solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              View Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="p-3">
                <Mail className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="p-3">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="p-3">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
            <div className="text-slate-700 font-medium">Years Experience</div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-slate-700 font-medium">Successful Launches</div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-slate-700 font-medium">Teams Trained</div>
          </div>
        </div>
      </div>
    </section>
  );
};
