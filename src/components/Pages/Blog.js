import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import conpic from './images/cont.png';
import '../../App.css';
import wpic from './images/weather.png';
import wpic1 from './images/task.png';
export default class Blog extends React.Component {
  state = {
    des: '',
    des2: '',
    des3: '',
  };

  showBody = (id, e) => {
    e.preventDefault();
    console.log(id);
    if (id == 1) {
      this.setState({ des: 'yes' });
    } else if (id == 2) {
      this.setState({ des2: 'yes' });
    } else if (id == 3) this.setState({ des3: 'yes' });
  };

  hideBody = (id, e) => {
    e.preventDefault();
    if (id == 1) this.setState({ des: '' });
    else if (id == 2) this.setState({ des2: '' });
    else if (id == 3) this.setState({ des3: '' });
  };
  render() {
    const { des, des2, des3 } = this.state;
    let id;
    return (
      <Container>
        <Row>
          <Col className="projectCard">
            <Card
              // {id=1}
              onMouseOver={this.showBody.bind(this, 1)}
              onTouchStart={this.showBody.bind(this, 1)}
              onTouchMove={this.hideBody.bind(this, 1)}
              onMouseLeave={this.hideBody.bind(this, 1)}
              className="Skill"
              style={{ width: '100%', marginBottom: '3rem' }}
            >
              <h2 className="projDes">FrontEnd Project</h2>
              <Card.Title className="projTitle">Contact Manager</Card.Title>
              <Card.Img
                style={{ cursor: 'pointer', padding: '1rem' }}
                variant="top"
                src={conpic}
              />
              {des && (
                <Card.Body>
                  <p
                    className="des2"
                    style={{ fontSize: '2rem', color: 'darkgrey' }}
                  >
                    This is a Contact Manager App which is Created using
                    Reactjs.
                  </p>
                  <a href="https://jomoabhi.github.io/ContactManager/#/">
                    {' '}
                    <Button variant="outline-warning">
                      {' '}
                      See Project{' '}
                    </Button>{' '}
                  </a>
                </Card.Body>
              )}
            </Card>
          </Col>

          <Col className="projectCard">
            <Card
              onMouseOver={this.showBody.bind(this, 3)}
              onTouchStart={this.showBody.bind(this, 3)}
              onTouchMove={this.hideBody.bind(this, 3)}
              onMouseLeave={this.hideBody.bind(this, 3)}
              className="Skill"
              style={{ width: '100%', marginBottom: '3rem' }}
            >
              <h2 className="projDes">Full-Stack Project</h2>
              <Card.Title className="projTitle">Task-Manager App</Card.Title>
              <Card.Img
                style={{ cursor: 'pointer', padding: '1rem' }}
                variant="top"
                src={wpic1}
              />
              {des3 && (
                <Card.Body>
                  <p
                    className="des2"
                    style={{ fontSize: '2rem', color: 'darkgrey' }}
                  >
                    This is a Task Manager Web-Appliaction.It is created using
                    Html,Css,JavaScript,Nodejs,MongoDB
                  </p>
                  <a href="https://jomotes75-task-manager.herokuapp.com/">
                    {' '}
                    <Button variant="outline-warning">
                      {' '}
                      See Project{' '}
                    </Button>{' '}
                  </a>
                </Card.Body>
              )}
            </Card>
          </Col>

          <Col className="projectCard">
            <Card
              onMouseOver={this.showBody.bind(this, 2)}
              onTouchStart={this.showBody.bind(this, 2)}
              onTouchMove={this.hideBody.bind(this, 2)}
              onMouseLeave={this.hideBody.bind(this, 2)}
              className="Skill"
              style={{ width: '100%', marginBottom: '3rem' }}
            >
              <h2 className="projDes">Backend Project</h2>
              <Card.Title className="projTitle">Weather App</Card.Title>
              <Card.Img
                style={{ cursor: 'pointer', padding: '1rem' }}
                variant="top"
                src={wpic}
              />
              {des2 && (
                <Card.Body>
                  <p
                    className="des2"
                    style={{ fontSize: '2rem', color: 'darkgrey' }}
                  >
                    This is a Weather App which is Created using Nodejs.
                  </p>
                  <a href="https://abhinav-weatherapp.herokuapp.com/">
                    {' '}
                    <Button variant="outline-warning">
                      {' '}
                      See Project{' '}
                    </Button>{' '}
                  </a>
                </Card.Body>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
