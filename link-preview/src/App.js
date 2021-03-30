import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';



function App() {
  return (
    <Container fluid style={{ height: '100vh' }} >
      <Row>
        <Col xs={2}><Sidebar /></Col>
        <Col ><Content /></Col>
      </Row>
    </Container>
  );
}

export default App;
