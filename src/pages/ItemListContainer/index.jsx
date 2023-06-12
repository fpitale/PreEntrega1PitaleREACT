 import { useEffect,  useState  } from "react"; 
import { useParams, useNavigate } from "react-router-dom";
import { getItens } from "../../services/Itens";
import {Card, Button, Container} from 'react-bootstrap';
import { ItemList } from "../../components/common";





const ItemListContainer = () => {
    const { catId } = useParams();
    const navigate = useNavigate()

    const [itens, setItens] = useState([]) 

    useEffect(() => {
        getItens().then((data) => {
            setItens(data)
        }) 
    }, []) 


   return(
    
    <>
    <Container> 
      <ItemList itens={itens} />
         </Container>
    </>
   )  
};

export {ItemListContainer};

