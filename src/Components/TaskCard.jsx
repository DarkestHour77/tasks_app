import Card from "react-bootstrap/Card"

export default function TaskCard({prop}){
    console.log(prop)
    return(
        <div>
        <Card>
            
                <Card.Body>
                    <Card.Title>{prop.name}</Card.Title>
                    <Card.Subtitle>{prop.date}</Card.Subtitle>
                    <Card.Text>{prop.description}</Card.Text>
                </Card.Body>
        </Card>
        </div>
    )
}