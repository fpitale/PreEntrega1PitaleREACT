/* import { Card, Col, Row } from "react-bootstrap";
import "./detail.css";
import { Link } from "react-router-dom";
const ItemDetail = ({ id, name, description, precio, images }) => {
  return (
    <Row>
      <Col>
        <Card key={id}>
          <Card.Body className="estilosDetail">
            <Card.Title className="nameD">{name}</Card.Title>
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
 */

import { Card, Col, Row } from "react-bootstrap";
import "./detail.css";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, name, description, precio, images }) => {
  return (
    <div>
      <Row>
        <Col>
          <Card key={id}>
            <Card.Body className="estilosDetail">
              <Card.Title className="nameD">{name}</Card.Title>
              <Card.Subtitle className="descr">{description}</Card.Subtitle>
              <Card.Text className="precio">${precio}</Card.Text>
              <img src={images} alt="Item" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/cart">
            <h2>Compras</h2>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export { ItemDetail };
