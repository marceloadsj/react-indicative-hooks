import React from 'react';

import NavLogo from '../atoms/NavLogo';
import NavButton from '../atoms/NavButton';
import NavLinks from '../molecules/NavLinks';

export default function Nav() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-darkest p-3 fixed w-screen">
      <NavLogo />

      <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
        <NavLinks />

        <NavButton />
      </div>
    </nav>
  );
}
