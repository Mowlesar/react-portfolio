import PropTypes from 'prop-types';

const Project = ({ title, description, imageUrl, projectUrl, repoUrl }) => {
  return (
    <div className="project">
      <img src={imageUrl} alt={`Screenshot of ${title}`} className="project-image"/>
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="project-link">Live Project</a>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">View Code</a>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  projectUrl: PropTypes.string,
  repoUrl: PropTypes.string.isRequired
};

export default Project;
