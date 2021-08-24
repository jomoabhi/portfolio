import React from 'react';
import '../App.css';
export default function footer() {
  return (
    <div>
      <div class="wrapper">
        <div class="icon facebook">
          <a
            href="https://www.linkedin.com/in/abhinav-yadav-437a401a6/"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            {' '}
            <div class="tooltip">Linkedin</div>
            <span>
              <i class="fab fa-linkedin"></i>
            </span>
          </a>
        </div>
        <div class="icon instagram">
          <a
            href="https://www.instagram.com/yadavji_____/"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            {' '}
            <div class="tooltip">Instagram</div>
            <span>
              <i class="fab fa-instagram"></i>
            </span>
          </a>
        </div>
        <div class="icon github">
          <a
            href="https://github.com/jomoabhi"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <div class="tooltip">Github</div>
            <span>
              <i class="fab fa-github"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
