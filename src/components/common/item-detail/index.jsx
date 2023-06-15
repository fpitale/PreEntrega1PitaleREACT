import { Card, Col, Row } from "react-bootstrap";
import { Itens } from "../../../services/Itens";
const ItemDetail = ({ id, name, description, precio }) => {
  return (
    <Row>
      <Col>
        <Card key={id}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>${precio}</Card.Text>
            {/* <Button variant="primary"
              onClick={onItemClicked} 
            > {textButton} </Button> */}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export { ItemDetail };
