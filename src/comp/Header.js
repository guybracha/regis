import React, { useContext } from 'react';
import { FaBeer } from 'react-icons/fa'; // ייבוא האייקון
import { UserContext } from './UserContext';

const Header = () => {
  const { userName } = useContext(UserContext);

  return (
    <header style={{ display: 'flex', alignItems: 'center' }}>
      <FaBeer size={30} color="green" style={{ marginRight: '10px' }} /> {/* אייקון הלוגו */}
      <h1>{userName ? `שלום, ${userName}!` : 'טופס הרשמה'}</h1>
    </header>
  );
};

export default Header;
