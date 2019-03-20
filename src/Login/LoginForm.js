import React from "react";
import { Form, Icon, Button, Row, Col } from "antd";
import TextField from "../components/TextField";

class LoginForm extends React.Component {
  state = {
    userName: "",
    password: "",
    error: ""
  };

  render() {
    const { userName, password, error } = this.state;
    return (
      <Row>
        <Col span={12} offset={6}>
          <div>
            <h1 className="display-2">Login</h1>
          </div>
          <Form className="login-form">
            <TextField
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
              value={userName}
              onChange={event => {
                this.setState({ userName: event.target.value });
              }}
            />
            <TextField
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="password"
              value={password}
              onChange={event => {
                this.setState({ password: event.target.value });
              }}
            />

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={() => {
                  if (password !== password) {
                    this.setState({ error: "Cannot Login" });
                  } else {
                    this.setState({ error: null });
                  }
                }}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
          <p> {error} </p>
        </Col>
      </Row>
    );
  }
}

export default LoginForm;
