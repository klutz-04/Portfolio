import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ title, description, subtitle, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {subtitle && (
        <p className="text-fuchsia-600 mb-2">{subtitle}</p>
      )}
      <p className="text-gray-600 mb-4">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-fuchsia-600 hover:text-fuchsia-800 font-medium"
        >
          View Publication →
        </a>
      )}
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  link: PropTypes.string
};

export default ProjectCard; 