import React from 'react';
import Card from 'react-bootstrap/Card';
import { Header, InputDiv } from './HomeStyle';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Services = () => {
  const serviceData = [
    { title: "Website Design", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Website Maintenance", content: "Praesent semper dui sit amet dapibus vestibulum." },
    { title: "Website Hosting", content: "Integer id ante fringilla, efficitur tellus eu, tempor sapien." }
  ];

  return (
    <div>
      <Header>
        <div>
          <h4>Subscribe To Our Newsletter</h4>
        </div>
        <div>
          <InputDiv placeholder='Enter Email...' type="text" />
          <button className='btn btn-warning'>Search</button>
        </div>
      </Header>
      
      <div style={{ marginTop: "7rem", display: "flex" }}>
        <div style={{ marginLeft: "7rem", flex: "1" }}>
          <h1>Services</h1>
          {serviceData.map((service, index) => (
            <Card
              bg="secondary"
              key={index}
              text="white"
              style={{ width: '100%', marginBottom: "1rem" }}
            >
              <Card.Header>{service.title}</Card.Header>
              <Card.Body>
                <Card.Text>
                  {service.content}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>

        <div style={{ flex: "1" }}>
          <Form style={{ width: "35%", marginLeft: "5rem", color:"white", backgroundColor:"blue", padding:"1rem", borderRadius:"3px" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="warning" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Services;