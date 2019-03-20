import React from "react";
import { Form, Icon, Button, Row, Col } from "antd";
import TextField from "../components/TextField";

class SignUp extends React.Component {
  state = {
    userName: "",
    password: "",
    confirmPassword: "",
    error: ""
  };

  render() {
    const { userName, password, confirmPassword, error } = this.state;
    return (
      <div>
        <Row>
          <Col span={12} offset={6}>
            <div>
              <h1 className="display-2">Signup Form</h1>
            </div>
            <Form className="login-form">
              <TextField
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
                value={userName}
                onChange={event => {
                  this.setState({ userName: event.target.value });
                }}
              />
              <TextField
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
                value={password}
                onChange={event => {
                  this.setState({ password: event.target.value });
                }}
              />
              <TextField
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={event => {
                  this.setState({ confirmPassword: event.target.value });
                }}
              />
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  onClick={() => {
                    if (password !== confirmPassword) {
                      this.setState({ error: "Cannot Register" });
                    } else {
                      this.setState({ error: null });
                      // post().then(res=>)
                    }
                  }}
                >
                  Confirm SignUp
                </Button>
              </Form.Item>
            </Form>
            <p> {error} </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SignUp;
