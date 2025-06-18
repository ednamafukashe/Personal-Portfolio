import React from 'react';
import { Link } from 'react-router-dom';

export const NavAlert = () => {
  return (
    <section className="nav-alert">
      <span>
        🚀 Looking to hire a Software Developer? Please review{' '}
        <Link to="https://www.canva.com/design/DAGqssfNTTs/Iy44d5aREsfPuOnzKLSPKg/edit?utm_content=DAGqssfNTTs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">my resume</Link> and projects. 🚀
      </span>
    </section>
  );
};
