import React from 'react';
import { navLinks } from '../constants/index.js';

const NavBar = () => {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      padding: '10px 20px'
    }}>
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        justifyContent: 'space-between'
      }}>
        <img 
          src="/logo.svg" 
          alt="Apple Logo" 
          style={{
            height: '30px',
            width: 'auto'
          }}
        />
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          gap: '20px'
        }}>
          {navLinks.map(({label}) => (
            <li key={label}>
              <a 
                href={`#${label.toLowerCase()}`} 
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '400',
                  transition: 'opacity 0.3s',
                  ':hover': {
                    opacity: 0.7
                  }
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="Search" />
          </button>
          <button>
            <img src="/cart.svg" alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;