import React from 'react';
import react from '../images/skills/react.svg';
import airtable from '../images/airtable.svg';

export const Footer = () => {
  // states
  // const [date, setDate] = React.useState(2021);

  // useEffect
  // React.useEffect(() => {
  //   setDate(new Date().getFullYear());
  // }, []);

  // jsx
  return (
    <footer id="footer" className="footer">
      <div className="section-center">

        <p className="footer-text-2">
          Created with&nbsp;
          <span className="footer-img-block">
            <img src={react} alt="react-js" className="footer-img" />
            &nbsp;
            <img src={airtable} alt="airtable" className="footer-img" />
          </span>
          &nbsp;by&nbsp;
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            title="My Twitter Account"
          >
            Edna
          </a>
        </p>
      </div>
    </footer>
  );
};
