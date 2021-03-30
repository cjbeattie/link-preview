import { Form, Button } from 'react-bootstrap';

const Input = () => {
    return (
        <>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Learn Content URL</Form.Label>
                    <Form.Control type="text" placeholder="Enter link" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Preview Link
                </Button>
            </Form>
        </>
    )
}

export default Input;

