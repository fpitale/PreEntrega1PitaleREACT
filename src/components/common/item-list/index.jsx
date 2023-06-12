import {Card, Button} from 'react-bootstrap';



const ItemList = ({ itens }) => {

    return itens.map((item) => (
        <Card key={item.name}>
         <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Button variant="primary"> Ver detalle </Button>
          
         </Card.Body>
          </Card>
         )) 
}

export {ItemList}