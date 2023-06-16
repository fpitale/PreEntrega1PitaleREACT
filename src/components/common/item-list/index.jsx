import { Col, Row } from "react-bootstrap";
import { Item } from "../Item";

const ItemList = ({ items }) => {
  return (
    <Row>
      {items.map((item) => (
        <Col key={item.id}>
          <Item
            name={item.name}
            description={item.description}
            id={item.id}
            categoryId={item.categoryId}
            onItemClicked={item.onItemClicked}
            textButton={item.textButton}
            precio={item.precio}
            images={[item.images]}
          />
        </Col>
      ))}
    </Row>
  );
};

export { ItemList };
