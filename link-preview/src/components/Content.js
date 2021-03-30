import Input from './Input';
import PreviewDisplay from './PreviewDisplay';
import { useState } from 'react';
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';

const Content = () => {

    const [error, setError] = useState(false);
    const [data, setData] = useState({
        title: "",
        description: "",
        image: "",
        url: ""
    });

    const handleClick = (link, e) => {
        e.preventDefault();

        console.log("clicked!", link);

        axios
            .get(`http://api.linkpreview.net/?key=${process.env.REACT_APP_API_KEY}&q=${link}`)
            .then((res) => {
                setData(res.data);
                setError(false);
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            });
    };

    return (
        <>
            <Container>
                <Row>
                    <Col md={10}>
                        <Input handleClick={handleClick} error={error} />
                        <PreviewDisplay data={data} error={error} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Content;