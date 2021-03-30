import { Container, Row, Col, Image } from 'react-bootstrap';

const PreviewDisplay = (props) => {
    return (
        <>
            <Container fluid className="mt-4">
                {props.error ?
                    <Row className="vh-100">
                    </Row>
                    :
                    <Row className="vh-100 align-content-start">
                        <Col xs={4}>
                            <Image src={props.data.image} fluid />
                        </Col>
                        <Col>
                            <h1>{props.data.title}</h1>
                            <p style={{ wordBreak: "break-word" }}>{props.data.description}</p>
                        </Col>
                    </Row>}
            </Container>
        </>
    )
}

export default PreviewDisplay;