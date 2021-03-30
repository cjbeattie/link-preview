import { Container, Row, Col, Image } from 'react-bootstrap';

const PreviewDisplay = (props) => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs="2"><Image src={props.data.image} fluid /></Col>
                    <Col xs="auto">
                        <h1>{props.data.title}</h1>
                        <p>{props.data.description}</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PreviewDisplay;