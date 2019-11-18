import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import Page404 from "./Page404";

import {
  Alert,
  Button,
  ButtonGroup,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  InputGroup,
  InputGroupAddon,
  Container,
  Row,
  Col
} from "reactstrap";
const Login = props => {
  return (
    <Router>
      <div className="form_co">
        <div className="registration-form">
          <Container>
            <Row className="">
              <Col xs="12" sm="12"></Col>
            </Row>
          </Container>
        </div>
        <Switch>
          <Route exact path="/Register">
            <Register />
          </Route>
          <Route exact path="/ForgotPassword">
            <ForgotPassword />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Login;
