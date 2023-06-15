import { Col, Row } from "react-bootstrap";
import { Item } from "../Item";

const ItemList = ({ itens }) => {
  return (
    <Row>
      {itens.map((item) => (
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