import React from 'react';
import { Award, Briefcase, Code, Users } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { portfolioData } from '../data/mock';


const About = () => {
  const { about } = portfolioData;

  const highlightIcons = {
    'Experience': Briefcase,
    'Specialization': Code,
    'Focus': Users,
    'Certification': Award
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition-opacity"></div>
              <img
                src={portfolioData.about.image}
                alt="Profile"
                className="relative w-80 h-110 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {about.description}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {about.highlights.map((highlight, index) => {
                const Icon = highlightIcons[highlight.label];
                return (
                  <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-shadow bg-slate-50">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center space-y-2">
                        {Icon && <Icon className="text-blue-500" size={32} />}
                        <div>
                          <p className="text-2xl font-bold text-slate-900">{highlight.value}</p>
                          <p className="text-sm text-gray-600">{highlight.label}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
