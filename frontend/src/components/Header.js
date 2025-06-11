import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { profileData } from '../portfolioData';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              My Portfolio
            </h1>
          </div>
          <div className="flex items-center space-x-6">
            {profileData.email && (
              <a
                href={`mailto:${profileData.email}`}
                className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                title={`Email: ${profileData.email}`}
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            )}
            {profileData.github_url && (
              <a
                href={profileData.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                title="GitHub Profile"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            )}
            {profileData.linkedin_url && (
              <a
                href={profileData.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                title="LinkedIn Profile"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;