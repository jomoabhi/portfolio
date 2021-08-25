import React from 'react';
import '../App.css';
export default function footer() {
  return (
    <div>
      <div className="wrapper">
        <div className="icon facebook">
          <a
            href="https://www.linkedin.com/in/abhinav-yadav-437a401a6/"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            {' '}
            <div className="tooltip">Linkedin</div>
            <span>
              <i className="fab fa-linkedin"></i>
            </span>
          </a>
        </div>
        <div className="icon instagram">
          <a
            href="https://www.instagram.com/yadavji_____/"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            {' '}
            <div className="tooltip">Instagram</div>
            <span>
              <i className="fab fa-instagram"></i>
            </span>
          </a>
        </div>
        <div className="icon github">
          <a
            href="https://github.com/jomoabhi"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <div className="tooltip">Github</div>
            <span>
              <i className="fab fa-github"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
