import React from 'react';
import buymeacoffee from '../images/buymeacoffee.png';

export const Widget = () => {
  return (
    <a
      href="coff.ee/mafukasheen"
      target="_blank"
      rel="noreferrer"
      className="widget"
      title="Buy Me A Coffee?"
    >
      <img src={buymeacoffee} alt="buy me a coffee" className="widget-img" />
    </a>
  );
};
