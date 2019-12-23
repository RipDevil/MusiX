import React from "react";
import { useStore } from "effector-react";
import { Redirect, withRouter } from "react-router-dom";
import { Row, Col, Typography, Form, Input, Icon, Button } from "antd";

import { getRandomColor } from "utils/utils";
import { $config } from "models/appConfig";

import {
    loginApi,
    passwordApi,
    nameApi,
    lastnameApi,
    $form,
    setIsRegister,
    auth } from "models/loginForm";


const Login = ({ IsLoggedIn }) => {
    const [headerColor, setHeaderColor, GetRandomColor] = [...React.useState({ color: "#000" }), () => { getRandomColor(setHeaderColor) }];
    const { config } = useStore($config);
    const formStore = useStore($form);
    const log = () => {
        // console.log(formStore);
        auth({ 
            signIn: formStore.isRegister, 
            params: {
                username: formStore.login.value,
                password: formStore.password.value,
                name: formStore.name.value,
                lastname: formStore.lastname.value
            }
        })
    };
    return (
        <>
            {IsLoggedIn ? <Redirect to="/" /> : ''}
            <Row className="centrify" type="flex" justify="center" align="middle">
                <Col>
                    <Row type="flex" justify="center" align="middle">
                        <Typography.Title onMouseEnter={GetRandomColor} onClick={() => window.open(config.links.external_link)} style={headerColor} className="login-header" copyable={false}>Musi<sup><strong><i className="fa fa-times" aria-hidden="true"></i></strong></sup></Typography.Title>
                    </Row>

                    {formStore.isRegister && <Row type="flex" justify="start" align="middle"><Typography.Text>Sign up</Typography.Text></Row>}

                    <Form onSubmit={(e) => { e.preventDefault(); }} className="login-form">
                        <Form.Item>
                            <Input
                                value={formStore.login.value}
                                onChange={(e) => loginApi.changed(e.target.value)}
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Login"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                value={formStore.password.value}
                                onChange={(e) => passwordApi.changed(e.target.value)}
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        {formStore.isRegister &&
                            <>
                                <Form.Item>
                                    <Input
                                        value={formStore.name.value}
                                        onChange={(e) => nameApi.changed(e.target.value)}
                                        placeholder="Name"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Input
                                        value={formStore.lastname.value}
                                        onChange={(e) => lastnameApi.changed(e.target.value)}
                                        placeholder="Last name"
                                    />
                                </Form.Item>
                            </>}
                        <Form.Item>
                            <Row type="flex" justify="end">
                                <Button onClick={() => { setIsRegister(!formStore.isRegister); }} type="link" htmlType="button">
                                    {!formStore.isRegister ? "Sign Up" : "Sign In"}
                                </Button>

                                <Button onClick={log} type={formStore.isRegister ? "danger" : "primary"} htmlType="submit" disabled={!formStore.canLog}>
                                    {formStore.isRegister ? "Sign Up" : "Sign In"}
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