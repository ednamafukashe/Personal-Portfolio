import React from 'react';
import { Link } from 'react-router-dom';

export const NavAlert = () => {
  return (
    <section className="nav-alert">
      <span>
        🚀 Looking to hire a Software Developer? Please review{' '}
        <Link to="https://www.canva.com/design/DAGqtCsdgt8/FSntkdoEKrxBY9JJ_Gq47w/view?utm_content=DAGqtCsdgt8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3f64b87a39">my resume</Link> and projects. 🚀
      </span>
    </section>
  );
};
