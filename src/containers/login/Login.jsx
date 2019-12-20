import React from "react";
import { useStore } from "effector-react";
import { Redirect, withRouter } from "react-router-dom";
import { Row, Col, Typography, Form, Input, Icon, Checkbox, Button } from "antd";

import { getRandomColor } from "utils/utils";
import { $config } from "models/appConfig";


const Login = ({ IsLoggedIn }) => {
    const [headerColor, setHeaderColor, GetRandomColor] = [...React.useState({ color: "#000" }), () => { getRandomColor(setHeaderColor) }];
    const { config } = useStore($config);
    const [signUp, setSignUp] = React.useState(false);

    return (
        <>
            {IsLoggedIn ? <Redirect to="/" /> : ''}
            <Row className="centrify" type="flex" justify="center" align="middle">
                <Col>
                    <Row type="flex" justify="center" align="middle">
                        <Typography.Title onMouseEnter={GetRandomColor} onClick={() => window.open(config.links.external_link)} style={headerColor} className="login-header" copyable={false}>Musi<sup><strong><i className="fa fa-times" aria-hidden="true"></i></strong></sup></Typography.Title>
                    </Row>

                    <Form onSubmit={(e) => { e.preventDefault(); }} className="login-form">
                        <Form.Item required>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Login"
                            />
                        </Form.Item>
                        <Form.Item required>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        {signUp &&
                            <>
                                <Form.Item required>
                                    <Input
                                        placeholder="Name"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Input
                                        placeholder="Last name"
                                    />
                                </Form.Item>
                            </>}
                        <Form.Item>
                            <Row type="flex" justify="end">
                                <Button onClick={() => { setSignUp(!signUp) }} type="link" htmlType="button">
                                    {!signUp ? "Sign Up" : "Sign In"}
                                </Button>

                                <Button type={signUp ? "danger" : "primary"} htmlType="submit">
                                    {signUp ? "Sign Up" : "Sign In"}
                                </Button>
                            </Row>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    );
}

export default withRouter(Login);