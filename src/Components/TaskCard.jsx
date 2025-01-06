import { Button, Col, Row } from "react-bootstrap"
import Card from "react-bootstrap/Card"

export default function TaskCard(props){

    // console.log(props.item,props.id)
    
    return(
        <div className="insidecard">
        <Card className="card">
            
                <Card.Body>
                   <Row>
                       <Col>
                            <Card.Title as="h3" >{props.item.name}</Card.Title>
                       </Col>
                       <Col>
                            <Card.Subtitle as="h3">{props.item.date}</Card.Subtitle>
                       </Col>
                   </Row>
                    <Card.Text as="h5">{props.item.description}</Card.Text>
                    <Button>Edit</Button>
                    <Button onClick={() => {props.del(props.id)}}>Delete</Button>
                    <Button >Done</Button>
                </Card.Body>
        </Card>
        </div>
    )
}