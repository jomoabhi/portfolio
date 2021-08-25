import React from 'react';
import mypic from './images/sizemini_93.png';
import { Link } from 'react-router-dom';
import mycv from './cv/Abhinavyadavcv.pdf';
import Hello from './animation';
import { Container, Row, Col } from 'react-bootstrap';
export const Home = () => {
  const a = ['Developer', 'DSA Enthusiast', 'Machine-Learning Enthusiast'];
  return (
    <Container>
      <Row>
        <Col sm={6}>
          {' '}
          <h3 className="des1 card-title">Hey!</h3>
          <span className="des2"> I'm Abhinav, a</span>
          <div className="container1">
            <Hello s1={a} />
          </div>
          {/* <br /> */}
          <a href={mycv} download>
            <button className="button-1" role="button">
              .DownloadCV()
            </button>
          </a>
          <div>
            <Link to="/Contact">
              {' '}
              <button className="button-1" role="button">
                .HireMe()
              </button>
            </Link>
          </div>
        </Col>
        <Col sm={6}>
          <img
            src={mypic}
            alt="Card"
            style={{
              height: '600px',
              maxWidth: '350px',
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};
