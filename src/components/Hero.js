import React from 'react';
import heroImg from '../images/hero/heroo.svg';
import { AppContext } from '../context';
import { FaCode, FaEnvelope } from 'react-icons/fa';

export const Hero = () => {
  // function from context
  const { smoothScroll } = React.useContext(AppContext);

  // jsx
  return (
    <header id="home">
      <div className="banner">
        <div className="banner-container section-center">
          {/* hero-info */}
          <article className="hero-info">
            <h1 id="my-name">
              hey,<span> i'm edna</span>
            </h1>
            <p>
              A Software Developer with 3+ years of experience. Currently,
              working as a Software Developer at Gateway Stream,
              where I specialize in developing highly optimized software
              solutions and web applications.
            </p>
            <div className="hero-btn-container">
              <a
                href="#projects"
                className="btn hero-btn"
                onClick={(e) => smoothScroll(e)}
                title="My Latest Works"
              >
                projects <FaCode className="fa" />
              </a>
              <a
                href="mailto:mafukasheedna@gmail.com"
                className="btn hero-btn"
                title="Email Me Now"
              >
                contact <FaEnvelope className="fa" />
              </a>
            </div>
          </article>

          {/* hero-image */}
          <article className="hero-img">
          <img
            src={heroImg}
            alt="Hero"
            className="hero-image"
            style={{ width: '800px', height: 'auto', marginLeft: '-250px' }}
          />
          </article>
        </div>
      </div>
    </header>
  );
};
