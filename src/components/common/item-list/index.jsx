import { Col, Row } from "react-bootstrap";
import { Item } from "../Item";
import "./item-list.css";

const ItemList = ({ items }) => {
  return (
    <Row>
      {items.map((item) => (
        <Col key={item.id} className="Item-estilo">
          <div className="item">
            {" "}
            {/* Adicione a classe "item" aqui */}
            <Item
              name={item.name}
              /* description={item.description} */
              id={item.id}
              categoryId={item.categoryId}
              onItemClicked={item.onItemClicked}
              textButton={item.textButton}
              precio={item.precio}
              images={[item.images]}
            />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export { ItemList };
