import React, { useState } from "react";
import { useStore } from "effector-react";
import { Redirect, withRouter } from "react-router-dom";
import { Row, Col, Typography, Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { getRandomColor } from "utils/utils";
import { $config } from "stores";

const Login = ({ IsLoggedIn }) => {
    const { content: links } = useStore($config);
    const [headerColor, setHeaderColor, GetRandomColor] = [...useState({ color: "#000" }), () => getRandomColor(setHeaderColor)];
    const [isRegister, setRegister] = useState(false);

    const onSubmit = (result) => {
        console.log('result :>> ', result);
    };

    return (
        <>
            {IsLoggedIn ? <Redirect to="/" /> : ''}
            <Row className="centrify" type="flex" justify="center" align="middle">
                <Col>
                    <Row type="flex" justify="center" align="middle">
                        <Typography.Title
                            title="GitHub"
                            onMouseEnter={GetRandomColor}
                            onClick={() => window.open(links.external_link)}
                            style={headerColor}
                            className="login-header"
                            copyable={false}
                        >
                            Musi<sup><strong><i className="fa fa-times" aria-hidden="true"></i></strong></sup>
                        </Typography.Title>
                    </Row>

                    {isRegister && <Row type="flex" justify="start" align="middle"><Typography.Text>Sign up</Typography.Text></Row>}

                    <Form onFinish={onSubmit} onFinishFailed={GetRandomColor} className="login-form">
                        <Form.Item name="login" rules={[{required: true}]}>
                            <Input
                                prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Login"
                            />
                        </Form.Item>
                        <Form.Item name="password" rules={[{required: true}, {min: 5, max: 30, type: "string"}]}>
                            <Input
                                prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        {isRegister &&
                            <>
                                <Form.Item name="name" rules={[{required: true}, {min: 1, max: 30, type: "string"}]}>
                                    <Input placeholder="Name" />
                                </Form.Item>
                                <Form.Item name="lastname" rules={[{required: true}, {min: 1, max: 30, type: "string"}]}>
                                    <Input placeholder="Last name" />
                                </Form.Item>
                            </>}
                        <Form.Item>
                            <Row type="flex" justify="end">
                                <Button onClick={() => { setRegister(!isRegister); GetRandomColor(); }} type="link" htmlType="button">
                                    {!isRegister ? "Sign Up" : "Sign In"}
                                </Button>

                                <Button type={isRegister ? "danger" : "primary"} htmlType="submit" disabled={false}>
                                    {isRegister ? "Sign Up" : "Sign In"}
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