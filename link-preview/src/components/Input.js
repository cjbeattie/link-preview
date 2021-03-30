import { Form, Button, Col } from 'react-bootstrap';
import { useState } from 'react';


const Input = (props) => {

    const [text, setText] = useState("Enter link");

    return (
        <>
            <Form className="mt-4">

                {/* <Form.Group controlId="formBasicEmail"> */}
                <Form.Label>Learn Content URL</Form.Label>
                <Form.Row>
                    <Col>
                        <Form.Control
                            type="text"
                            placeholder={text}
                            onChange={(e) =>
                                setText(e.target.value)}
                        />
                    </Col>
                    <Col xs="auto">
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={(e) =>
                                props.handleClick(text, e)}>
                            Preview Link
                        </Button>
                    </Col>
                </Form.Row>

                {/* </Form.Group> */}

            </Form>
        </>
    )
}

export default Input;

