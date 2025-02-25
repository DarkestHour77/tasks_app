import Form from 'react-bootstrap/Form'
import { Row, Col, Button } from 'react-bootstrap'
import { useState } from 'react'

export default function Task({prop}){

const formData = {
    taskName:"",
    date:"",
    description:""
}
const [formValue,setFormValue] = useState({formData});

const formSubmit= (e)=>{
    e.preventDefault()
    // console.log(e)
    let data = new FormData(e.target);
    // console.log(data)
    let formObject = Object.fromEntries(data.entries());
    // console.log(prop,formObject)
    prop(formObject)
}



    return(
        <div className='form'>
            <Form onSubmit={formSubmit}>
                <Row>
                    <Col>
                        <Form.Group >
                            <Form.Label >
                                Task Name
                            </Form.Label>
                            <Form.Control name='name' type='text' value={formValue.taskName}  />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Date</Form.Label>
                            <Form.Control name='date' type='date' value={formValue.date} />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group>
                    <Form.Label>Descrption</Form.Label>
                    <Form.Control name='description' as='textarea' rows={3} value={formValue.description} />
                </Form.Group>
               <Button type='submit'>Submit</Button>  
            </Form>
        </div>
    )
}