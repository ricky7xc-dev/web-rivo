'use client';

import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header style={{ borderBottom: '1px solid #ccc', padding: '10px 0', marginBottom: '20px' }}>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <strong>Rivo</strong>
        <nav style={{ display: 'flex', gap: '15px' }}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
