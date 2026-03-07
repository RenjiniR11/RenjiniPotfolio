import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { portfolioData } from '../data/mock';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200"></div>

            {experience.map((exp, index) => (
              <div key={exp.id} className="relative mb-12 last:mb-0">
                <div className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className="w-full md:w-5/12">
                    <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="space-y-3">
                          <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                          <p className="text-xl font-semibold text-blue-500">{exp.company}</p>
                          
                          <div className="flex flex-col gap-2 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <MapPin size={16} className="text-blue-500" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar size={16} className="text-blue-500" />
                              <span>{exp.period}</span>
                            </div>
                          </div>

                          <ul className="space-y-2 pt-4">
                            {exp.responsibilities.map((resp, respIndex) => (
                              <li key={respIndex} className="text-gray-700 flex items-start gap-2">
                                <span className="text-blue-500 mt-1">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-center justify-center w-2/12">
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
