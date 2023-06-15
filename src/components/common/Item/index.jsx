import { Card, Container } from "react-bootstrap";

const Item = ({ id, name, description, onItemClicked, textButton, precio, images }) => {
  return (
    <Card key={id}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{precio.toString()}</Card.Text>
        <div className="image-container">
          <img src={images[0]} alt={name} />
        </div>
       {/*  <Button variant="primary" onClick={onItemClicked}>
          {textButton}
        </Button> */}
      </Card.Body>
    </Card>
  );
};

export { Item };