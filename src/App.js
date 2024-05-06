import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";
import ProtectedRoutes from "./ProtectedRoutes";
import Account from "./Account";

function App() {
  return (
    <>
      <Router>
        <Container>
          <Row>
            <Col className="text-center">
              <section id="navigation">
                <Link to="/">Home</Link>
                <Link to="/freec">Free Component</Link>
                <Link to="/authc">Auth Component</Link>
              </section>
            </Col>
          </Row>
        </Container>
        <Routes>
          <Route path="/" Component={Account} exact />
          <Route path="/freec" Component={FreeComponent} exact />
          <Route element={<ProtectedRoutes />}>
            <Route path="/authc" Component={AuthComponent} exact />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
