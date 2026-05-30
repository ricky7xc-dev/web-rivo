import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer style={{ borderTop: '1px solid #ccc', padding: '10px 0', marginTop: '20px' }}>
      <p>© {new Date().getFullYear()} Rivo. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
