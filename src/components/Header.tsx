import React from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
  category: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, category }) => {
  return (
    <header>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{category}</p>
    </header>
  );
};

export default Header;