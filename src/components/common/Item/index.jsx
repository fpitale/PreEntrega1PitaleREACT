import {Card, Button} from 'react-bootstrap';
/* import { useNavigate } from "react-router-dom";  */


const Item = ({id, name, description, onItemClicked, textButton, precio}) => {
    return (
        <Card key={name}>
         <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{precio}</Card.Text>
        <Button variant="primary"
      onClick={onItemClicked} 
         > {textButton} </Button>
        
          
         </Card.Body>
          </Card>
    )
}
export {Item}