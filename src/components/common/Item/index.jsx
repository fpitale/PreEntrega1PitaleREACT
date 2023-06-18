import { Card, Button } from "react-bootstrap";
import "./item.css";

const Item = ({
  id,
  name,
  description,
  onItemClicked,
  textButton,
  precio,
  images,
}) => {
  return (
    <div className="item-container">
      <Card key={id}>
        <Card.Body className="card">
          <Card.Title className="name">{name}</Card.Title>
          <Card.Text className="description">{description}</Card.Text>
          <Card.Text className="precio">{precio}</Card.Text>
          <div className="image-container">
            <img src={images[0]} alt={name} />
          </div>
          {
            <Button variant="primary" onClick={onItemClicked}>
              {textButton}
            </Button>
          }
        </Card.Body>
      </Card>
    </div>
  );
};

export { Item };
