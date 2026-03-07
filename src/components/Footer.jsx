import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Footer = () => {
  const { contact } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Name */}
          <h3 className="text-2xl font-bold">Renjini Radhakrishnan</h3>
          
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="text-gray-400 hover:text-blue-400 transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {currentYear} Renjini Radhakrishnan. All rights reserved.</p>
            <p className="mt-1">Built with React & FastAPI</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
