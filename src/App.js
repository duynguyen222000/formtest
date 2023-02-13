import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function App() {
  return (
    <div className="App">
      <Container>
        <h2>Create New Plan</h2>
        <Row>
          <Col className="mb-3" md={6}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Enter name"></Form.Control>
            </Form.Group>
          </Col>
          <Col className="mb-3" md={6}>
            <Form.Group>
              <Form.Label>Stripe Api Id</Form.Label>
              <Form.Control></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>Short Description</Form.Label>
              <Form.Control as="textarea" rows={6}></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="mb-3" md={6}>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control placeholder="Enter price"></Form.Control>
            </Form.Group>
          </Col>
          <Col className="mb-3" md={6}>
            <Form.Group>
              <Form.Label>Is Trial</Form.Label>
              <Form.Control placeholder="No"></Form.Control>
            </Form.Group>
          </Col>
          <Col className="mb-3" md={6}>
            <Form.Group>
              <Form.Label>Is Default</Form.Label>
              <Form.Control placeholder="No"></Form.Control>
            </Form.Group>
          </Col>
          <Col className="mb-3" md={6}>
            <Form.Group>
              <Form.Label>Word Limit</Form.Label>
              <Form.Control placeholder="Enter Word Limit"></Form.Control>
            </Form.Group>
          </Col>
          <Col className="mb-3" md={6}>
            <Form.Group>
              <Form.Label>Duration Type</Form.Label>
              <Form.Control placeholder="Monthly"></Form.Control>
            </Form.Group>
          </Col>
          <Col className="mb-3" md={6}>
            <Form.Group>
              <Form.Label>Customer Support</Form.Label>
              <Form.Control placeholder="No"></Form.Control>
            </Form.Group>
          </Col>
          <Col className="mb-3" md={6}>
            <Form.Group>
              <Form.Label>Select status</Form.Label>
              <Form.Control placeholder="Approved"></Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
