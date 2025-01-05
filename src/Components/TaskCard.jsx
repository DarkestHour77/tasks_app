import { Button } from "react-bootstrap"
import Card from "react-bootstrap/Card"

export default function TaskCard(props){

    // console.log(props.item,props.id)
    
    return(
        <div>
        <Card>
            
                <Card.Body>
                    <div>{props.id}</div>
                    <Card.Title>{props.item.name}</Card.Title>
                    <Card.Subtitle>{props.item.date}</Card.Subtitle>
                    <Card.Text>{props.item.description}</Card.Text>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                    <Button onClick={() => {props.del(props.id)}}>Done</Button>
                </Card.Body>
        </Card>
        </div>
    )
}