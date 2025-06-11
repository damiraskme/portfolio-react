import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const {
    id,
    title,
    description,
    image_url,
    github_url,
    demo_url,
    technologies_list,
    is_featured,
    created_at
  } = project;

  const [currentImgSrc, setCurrentImgSrc] = useState(image_url || '/logo192.png');

  useEffect(() => {
    setCurrentImgSrc(image_url || '/logo192.png');
  }, [image_url]);

  const handleError = () => {
    setCurrentImgSrc('/logo192.png');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short"
    });
  };

  return (
    <div className="card p-6 h-full flex flex-col animate-fade-in">
      {is_featured && (
        <div className="flex justify-end mb-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <FaStar className="w-3 h-3 mr-1" />
            Featured
          </span>
        </div>
      )}

      <div className="mb-4">
        <img
          src={currentImgSrc}
          alt={title}
          className="w-full h-48 object-cover rounded-lg bg-gray-100"
          onError={handleError}
        />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
        {title}
      </h3>

      <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
        {description}
      </p>

      {technologies_list && technologies_list.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies_list.map((tech, index) => (
              <span
                key={index}
                className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-3">
          {github_url && (
            <a
              href={github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              title="View on GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          )}
          
          {demo_url && (
            <a
              href={demo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary-600 transition-colors duration-200"
              title="View Live Demo"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
            </a>
          )}
        </div>
          {created_at && (
            <span className="text-xs text-gray-400">
              {formatDate(created_at)}
            </span>
          )}
      </div>
    </div>
  );
};

export default ProjectCard;