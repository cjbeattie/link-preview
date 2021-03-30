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

    // const [data, setData] = useState({
    //     title: "React JS - React Tutorial for Beginners",
    //     description: "React JS Tutorial - Get up & running with React JS: the most popular JavaScript library in the world! 🔥 Want to master React? Get my React mastery course: http://bit.ly/2KVl2A3 👉 Subscribe for more videos like this: https://goo.gl/6PYaGF Want to learn more from me? Check out my blog and courses: Courses: https://codewithmosh.com Blog: https://programmingwithmosh.com Facebook: https://www.facebook.com/programmingwithmosh/ Twitter: https://twitter.com/moshhamedani TABLE OF CONTENT 00:00 Introduction 01:14 What is React 05:48 Setting Up the Development Environment 09:27 Your First React App 16:03 Hello World 22:26 Components 24:06 Setting Up the Project 26:15 Your First React Component 31:38 Specifying Children 35:56 Embedding Expressions 40:49 Setting Attributes 46:36 Rendering Classes Dynamically 50:57 Rendering Lists 54:58 Conditional Rendering 1:01:04 Handling Events 1:03:56 Binding Event Handlers 1:08:34 Updating the State 1:10:51 What Happens When State Changes 1:12:58 Passing Event Arguments 1:17:31 Composing Components 1:21:18 Passing Data to Components 1:24:31 Passing Children 1:27:44 Debugging React Apps 1:31:55 Props...",
    //     image: "https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
    //     url: "https://www.youtube.com/watch?v=Ke90Tje7VS0"
    // });

    const handleClick = (link, e) => {
        e.preventDefault();

        console.log("clicked!", link);

        axios
            .get(`http://api.linkpreview.net/?key=${process.env.REACT_APP_API_KEY}&q=${link}`)
            .then((res) => {
                console.log("success! ", res)
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
                    <Col xs={10}>
                        <Input handleClick={handleClick} />
                        <PreviewDisplay data={data} error={error} />
                    </Col>
                </Row>

            </Container>

        </>
    )
}

export default Content;