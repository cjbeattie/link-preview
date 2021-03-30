import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';



function App() {
  return (
    <Container>
      <Row>
        <Col xs="2"><Sidebar /></Col>
        <Col xs="auto"><Content /></Col>
      </Row>
    </Container>
  );
}

export default App;
