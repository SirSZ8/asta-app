import { Col, Container, Row } from "react-bootstrap";

const LayoutWidget = ({ children, sizeColumn }) => {
  return (
    <Container className="mt-4">
      <Row className="d-flex justify-content-center align-items-center vh-100">
        <Col md={sizeColumn}>{children}</Col>
      </Row>
    </Container>
  );
};

export default LayoutWidget;
