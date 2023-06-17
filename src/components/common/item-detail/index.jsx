import { Card, Col, Row } from "react-bootstrap";
import "./detail.css";
const ItemDetail = ({ id, name, description, precio, images }) => {
  console.log(precio);

  return (
    <Row>
      <Col>
        <Card key={id} className="estilosDetail">
          <Card.Body>
            <Card.Title className="name">{name}</Card.Title>
            <Card.Subtitle className="descr"> {description}</Card.Subtitle>
            <Card.Text className="precio">${precio}</Card.Text>
            <img src={images} alt="Item" />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export { ItemDetail };
