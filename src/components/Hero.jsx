import React from 'react';
import { Github, Linkedin, Download, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { portfolioData } from '../data/mock';

const Hero = () => {
  const { hero } = portfolioData;

  const handleDownloadResume = () => {
    alert('Resume download functionality - PDF will be available soon!');
  };

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-slate-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4">
              {hero.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-400 mb-6">
              {hero.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              {hero.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-6 text-lg transition-all hover:scale-105 group"
              >
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button
                onClick={handleDownloadResume}
                size="lg"
                variant="outline"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold px-8 py-6 text-lg transition-all hover:scale-105"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
              <Button
                onClick={scrollToContact}
                size="lg"
                variant="outline"
                className="border-2 border-gray-400 text-gray-300 hover:bg-gray-700 hover:text-white font-semibold px-8 py-6 text-lg transition-all hover:scale-105"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6">
              <a
                href={hero.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={32} />
              </a>
              <a
                href={hero.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
