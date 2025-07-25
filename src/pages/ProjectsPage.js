import React, { useEffect, useState } from 'react';
import { Head, Loading, NavForPages, SingleProject } from '../components';
import AIRTABLE_DATA from '../data/airtableData';
import PropTypes from 'prop-types'; // ✅ Move this here

// COMPONENT
const ProjectsPage = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [categories, setCategories] = useState();
  const [projects, setProjects] = useState();
  const [loading, setLoading] = useState(true);

  const fetchProjects = () => {
    const projects = AIRTABLE_DATA.projects;
    setAllProjects(projects);
    setCategories([
      'all',
      ...new Set(projects.map((project) => project.stack)),
    ]);
    setProjects(projects);
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // UPDATE FILTER BTNS COLOR
  const updateFilterBtns = (e) => {
    document.querySelectorAll('.category-btn').forEach((btn) => {
      btn.classList.add('unactive');
    });
    e.target.classList.remove('unactive');
    e.target.classList.add('active');
  };

  // FILTER PROJECTS FUNCTION
  const filterProjects = (stack, e) => {
    updateFilterBtns(e);
    if (stack === 'all') {
      setProjects(allProjects);
    } else {
      const newProjects = allProjects.filter(
        (project) => project.stack === stack
      );
      setProjects(newProjects);
    }
  };

  // jsx
  return (
    <>
      <Head
        title={'Edna Mafukashe- Software Developer | Projects'}
        description={
          'This is a collection of some of my favorite projects. Built with a wide variety of tech including Sveltejs, React.js, Javascript, Nodejs, Git & GitHub, Figma, GraphQL, Redux, HTML, CSS & its frameworks, SEO Fundamentals, Headless CMSs, Python.'
        }
        image={'/covers/projects.png'}
      />

      <section className="page">
        {/* navbar */}
        <NavForPages />

        <div className="page-center projects-page">
          {/* title */}
          <div className="section-title page-title">
            <h2>
              my <span>projects</span>
            </h2>
            <div className="underline"></div>
            <p>
              I have worked on multiple projectsand have listed most of them.
              <br />
              If you are interested in seeing all my projects then please
              consider following me on{' '}
              <a href="https://github.com/ednamafukashe" title="My GitHub Profile">
                github
              </a>
              .
            </p>
          </div>

          {/* projects-center */}
          <div className="section-center projects-page-center">
            {loading ? (
              <Loading />
            ) : (
              <>
                <Categories
                  categories={categories}
                  filterProjects={filterProjects}
                />
                <Projects projects={projects} />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

const Categories = ({ categories, filterProjects }) => {
  return (
    <div className="category-btn-container">
      {categories.map((category, i) => (
        <button
          className="category-btn btn"
          data-category={category}
          key={i}
          onClick={(e) => filterProjects(category, e)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  filterProjects: PropTypes.func.isRequired,
};

// Projects Component
const Projects = ({ projects }) => {
  // sort by name
  projects = projects.sort((a, b) => a.title.localeCompare(b.title));

  // jsx
  return (
    <div className="projects-container">
      {projects.map((project) => (
        <SingleProject {...project} key={project.id} />
      ))}
    </div>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectsPage;
