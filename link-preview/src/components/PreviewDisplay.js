import { Container, Row, Col, Image } from 'react-bootstrap';

const PreviewDisplay = (props) => {
    return (
        <>
            <Container fluid className="mt-5">
                {props.error ?
                    <Row>
                        <Col className="pl-0">
                            <p style={{ color: "red" }} className="mt-4">An error has occurred while trying to retrieve the Preview Link. Please try again later!</p>
                        </Col>
                    </Row>
                    :
                    <Row>
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