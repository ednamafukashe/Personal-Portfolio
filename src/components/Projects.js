import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaShareSquare,
  FaAngleDown,
  FaAngleUp,
} from 'react-icons/fa';
import { Loading } from '.';
import AIRTABLE_DATA from '../data/airtableData';
import PropTypes from 'prop-types';

export const Projects = () => {
  const [projects, setProjects] = useState();
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    let projects = AIRTABLE_DATA.featuredProjects;
    projects = projects.sort((a, b) => a.title.localeCompare(b.title));
    setProjects(projects);
    setLoading(false);
  };

  SingleProject.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.string.isRequired,
    github: PropTypes.string,
    isClientWork: PropTypes.bool,
  };

  useEffect(() => {
    fetchProjects();
  
  }, []);

  return (
    <section className="section projects" id="projects">
      {/* title */}
      <div className="section-title">
        <h2>
          latest <span>works</span>
        </h2>
        <div className="underline"></div>
      </div>

      {/* projects-center */}
      <div className="section-center projects-center">
        {loading ? (
          <Loading />
        ) : (
          <>
            {projects.map((project) => (
              <SingleProject key={project.id} {...project} />
            ))}
          </>
        )}
      </div>

      {/* all projects btn */}
      <div className="btn-container">
        <Link to="/projects" className="btn">
          view more <FaShareSquare className="fa" />
        </Link>
      </div>
    </section>
  );
};

const SingleProject = ({
  imgUrl,
  title,
  desc,
  stack,
  url,
  github,
  isClientWork,
}) => {
  const [showDesc, setShowDesc] = useState(false);

  // jsx
  return (
    <article className="project">
      {/* image */}
      <div className="project-img">
        <img
          src={imgUrl}
          alt={title}
          className="project-image"
          loading="lazy"
        />
      </div>
      <div className="project-details">
        {/* info */}
        <div className="project-info">
          <h3 className="project-title">{title}</h3>

          <button
            className="project-text-toggle"
            onClick={() => setShowDesc(!showDesc)}
          >
            Description{' '}
            {showDesc ? (
              <FaAngleUp className="fa" />
            ) : (
              <FaAngleDown className="fa" />
            )}
          </button>

          <p className={`project-text ${showDesc ? 'show-project-text' : ''}`}>
            {desc}
          </p>

          <div className="project-tools">
            {stack.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>

        {/* footer */}
        <div className="project-footer">
          <a href={url} target="_blank" rel="noreferrer" title="Live Site">
            <strong>
              <FaShareSquare className="fa" /> <span>live site</span>
            </strong>
          </a>
          {!isClientWork && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              title="GitHub Code"
            >
              <FaGithub className="fa" /> <span>source code</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
