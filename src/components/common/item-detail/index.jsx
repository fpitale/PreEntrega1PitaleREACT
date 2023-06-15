
import { Card, Container } from "react-bootstrap";


const ItemDetail = ({ id, name, description, precio, images }) => {
  return (
    <Container>
      <Card key={id}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{precio.toString()}</Card.Text>
          <div className="image-container">
<img src={images} alt={name} />
</div>
          
        </Card.Body>
      </Card>
    </Container>
  );
};

export { ItemDetail };
