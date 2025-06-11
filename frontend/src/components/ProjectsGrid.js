import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../portfolioData';

const ProjectsGrid = () => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    if (filter === 'featured') {
      setFilteredProjects(projectsData.filter(p => p.is_featured));
    } else {
      setFilteredProjects(projectsData);
    }
  }, [filter]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          My Projects
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Here are some of the projects I've worked on.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
              filter === 'all' ? 'bg-primary-600 text-white' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            All Projects ({projectsData.length})
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
              filter === 'featured' ? 'bg-primary-600 text-white' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Featured
          </button>
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg mb-4">
            No featured projects found.
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsGrid;