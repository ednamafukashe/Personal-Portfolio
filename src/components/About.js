import React from 'react';
import aboutImg from '../images/about/about-img.PNG';
import { Skills } from './Skills';

export const About = () => {
  // state
  const [age, setAge] = React.useState(20);

  React.useEffect(() => {
    setAge(
      Math.floor((new Date() - new Date('1994-11-25').getTime()) / 3.15576e10)
    );
  }, []);

  // jsx
  return (
    <section id="about" className="section about">
      <div className="section-title">
        <h2>
          <span>about</span> me
        </h2>
        <div className="underline"></div>
      </div>

      <div className="section-center about-center">
        {/* about-img  */}
        <article>
          <div className="about-img">
            <img
              src={aboutImg}
              alt="Edna"
              className="about-image"
              loading="lazy"
            />
          </div>
        </article>

        <article className="about-info">
          <p>
            {/* text */}
            I'm <strong>Edna</strong>, a <span>{age}</span> year old
            <strong> Software Developer</strong> with 4+ years of experience.
            I work with Javascript and its endless list of frameworks, primarily
            with <strong>Svelte.js</strong>, <strong>React.js</strong>,{' '}
            and <strong>Node.js</strong>.
            <br />
            <br />
            I also work as a <strong>
            Freelance Advanced AI Data Trainer
            </strong>{' '}
            <br />
            When I'm not coding, I love cooking and posting my content on Tik Tok. I also
            love to take walks in the park with my baby. 
          </p>

          {/* stack */}
          <Skills />
        </article>
      </div>
    </section>
  );
};
