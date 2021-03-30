import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';


const Input = (props) => {

    const [text, setText] = useState("Enter link");

    return (
        <>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Learn Content URL</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={text}
                        onChange={(e) =>
                            setText(e.target.value)}
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    onClick={(e) =>
                        props.handleClick(text, e)}>
                    Preview Link
                </Button>
            </Form>
        </>
    )
}

export default Input;

