import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';



function App() {
  return (
    <Container fluid className="vh-100" >
      <Row className="h-100">
        <Col xs={2} style={{ backgroundColor: "#5bc0de" }}>
          <Sidebar />
        </Col>
        <Col >
          <Content />
        </Col>
      </Row>
    </Container >
  );
}

export default App;
