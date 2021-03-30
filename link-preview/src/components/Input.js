import { Form, Button, Col } from 'react-bootstrap';
import { useState } from 'react';


const Input = (props) => {

    const [text, setText] = useState("Enter link");

    return (
        <>
            <Form className="mt-4">
                <Form.Label>Learn Content URL</Form.Label>
                <Form.Row>
                    <Col className="mt-2">
                        <Form.Control
                            type="text"
                            placeholder={text}
                            onChange={(e) =>
                                setText(e.target.value)}
                        />
                    </Col>
                    <Col md="auto" className="mt-2">
                        <Button
                            variant="info"
                            type="submit"
                            onClick={(e) =>
                                props.handleClick(text, e)}>
                            Preview Link
                        </Button>
                    </Col>
                </Form.Row>
            </Form>
        </>
    )
}

export default Input;

