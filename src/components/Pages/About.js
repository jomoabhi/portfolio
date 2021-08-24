import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import Hello from './animation';
// import { web } from 'webpack';
export default class About extends Component {
  state = {
    web: {
      l1: '',
      l2: '',
      l3: '',
      l4: '',
      l5: '',
      l6: '',
      l7: '',
    },
  };

  showcontent = (e) => {
    e.preventDefault();
    const { l1, l2, l3 } = this.state;
    // let web1 = ['React', 'NodeJs'];
    this.setState({
      l1: 'Reactjs',
      l2: 'Nodejs',
      l3: 'Expressjs',
      l4: 'MongoDB',
    });
    // console.log(web1);
  };

  hidecontent = (e) => {
    e.preventDefault();
    const { web } = this.state;
    this.setState({ l1: '', l2: '', l3: '', l4: '' });
  };
  showcontent1 = (e) => {
    e.preventDefault();
    const { l5, l6, l7 } = this.state;
    // let web1 = ['React', 'NodeJs'];
    this.setState({
      l5: 'C++',
      l6: 'Java',
      l7: 'Python',
    });
    // console.log(web1);
  };

  hidecontent1 = (e) => {
    e.preventDefault();
    const { web } = this.state;
    this.setState({ l5: '', l6: '', l7: '' });
  };

  render() {
    const { l1, l2, l3, l4, l6, l5, l7 } = this.state;
    return (
      <Container>
        <Row style={{ justifyContent: 'center' }}>
          <Col>
            <Card className="Skill" style={{ width: '100%' }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>
                  Web Development{' '}
                  <span style={{ color: 'orange' }}>{'{ }'}</span>
                </Card.Title>

                <Button
                  onMouseOver={this.showcontent.bind(this)}
                  onTouchStart={this.showcontent.bind(this)}
                  onTouchMove={this.hidecontent.bind(this)}
                  // onTouchEnd={this.hidecontent.bind(this)}
                  // onClick={this.showcontent.bind(this)}
                  onMouseLeave={this.hidecontent.bind(this)}
                  variant="outline-warning"
                >
                  Touch here
                </Button>

                <ListGroup className="skill2">
                  {' '}
                  {/* <ListGroup.Item>No style</ListGroup.Item>
                  <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                  <ListGroup.Item variant="secondary">Secondary</ListGroup.Item> */}
                  <ListGroup.Item variant="success">{l1}</ListGroup.Item>
                  <ListGroup.Item variant="danger">{l2}</ListGroup.Item>
                  <ListGroup.Item variant="warning">{l3}</ListGroup.Item>
                  <ListGroup.Item variant="info">{l4}</ListGroup.Item>
                  {/* <ListGroup.Item variant="light">Light</ListGroup.Item>
                  <ListGroup.Item variant="dark">Dark</ListGroup.Item> */}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          {/* </Row>
        <Row style={{ justifyContent: 'center', marginBottom: '3rem' }}> */}
          <Col>
            <Card className="Skill" style={{ width: '100%' }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>
                  Data Structures and Algorithms{' '}
                  <span style={{ color: 'orange' }}>{'<>'}</span>{' '}
                  {/* <span style={{ color: 'orange' }}>{'{ }'}</span> */}
                </Card.Title>

                <Button
                  onMouseOver={this.showcontent1.bind(this)}
                  onTouchStart={this.showcontent1.bind(this)}
                  onMouseLeave={this.hidecontent1.bind(this)}
                  variant="outline-warning"
                >
                  Touch Here
                </Button>
                <ListGroup className="skill2">
                  {/* <ListGroup.Item>No style</ListGroup.Item>
                  <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                  <ListGroup.Item variant="secondary">Secondary</ListGroup.Item> */}
                  <ListGroup.Item variant="success">{l5}</ListGroup.Item>
                  <ListGroup.Item variant="danger">{l6}</ListGroup.Item>
                  <ListGroup.Item variant="warning">{l7}</ListGroup.Item>
                  {/* <ListGroup.Item variant="info">{l4}</ListGroup.Item> */}
                  {/* <ListGroup.Item variant="light">Light</ListGroup.Item>
                  <ListGroup.Item variant="dark">Dark</ListGroup.Item> */}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
