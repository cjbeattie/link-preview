import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import { Route, Switch } from "react-router-dom";
import ExamplePage2 from './components/ExamplePage2'
import ExamplePage3 from './components/ExamplePage3'
import ExamplePage4 from './components/ExamplePage4'

function App() {
  return (
    <Container fluid className="vh-100" >
      <Row className="h-100">
        <Col md={2} style={{ backgroundColor: "#5bc0de" }}>
          <Sidebar />
        </Col>
        <Col>
          <Switch>
            <Route exact path="/">
              <Content />
            </Route>
            <Route path="/example_page_2">
              <ExamplePage2 />
            </Route>
            <Route path="/example_page_3">
              <ExamplePage3 />
            </Route>
            <Route path="/example_page_4">
              <ExamplePage4 />
            </Route>
            <Route>
              This is an invalid link.
          </Route>
          </Switch>
        </Col>
      </Row >
    </Container >
  );
}

export default App;
