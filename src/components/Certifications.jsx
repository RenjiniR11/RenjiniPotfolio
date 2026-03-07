import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { portfolioData } from '../data/mock';

const Certifications = () => {
  const { certifications, education, training, languages } = portfolioData;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certifications */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Certifications</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert) => (
              <Card
                key={cert.id}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-white"
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className="flex justify-center">
                    <div className="p-3 bg-blue-500 rounded-full">
                      <Award className="text-white" size={32} />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">{cert.title}</h3>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                  <p className="text-sm text-blue-500 font-semibold">{cert.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education & Training Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education */}
          <div>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Education</h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">{education.degree}</h3>
                  <p className="text-blue-500 font-semibold">{education.university}</p>
                  <div className="flex justify-between items-center text-sm text-gray-600 pt-2">
                    <span>Year: {education.year}</span>
                    <span className="font-semibold">CGPA: {education.cgpa}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900">Higher Secondary</h3>
                  <p className="text-blue-500 font-semibold">{education.higherSecondary.school}</p>
                  <div className="flex justify-between items-center text-sm text-gray-600 pt-2">
                    <span>Year: {education.higherSecondary.year}</span>
                    <span className="font-semibold">{education.higherSecondary.percentage}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Training & Languages */}
          <div className="space-y-12">
            {/* Training */}
            <div>
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Training</h2>
                <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
              </div>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{training.organization}</h3>
                    <p className="text-sm text-gray-600">{training.period}</p>
                  </div>
                  <ul className="space-y-2">
                    {training.topics.map((topic, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Languages */}
            <div>
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Languages</h2>
                <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
              </div>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-3 justify-center">
                    {languages.map((lang, index) => (
                      <div
                        key={index}
                        className="px-6 py-3 bg-blue-50 text-blue-600 font-semibold rounded-lg border border-blue-200"
                      >
                        {lang}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
