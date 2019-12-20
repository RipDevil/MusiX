import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Row, Col, Typography } from "antd";
import sorry1 from 'images/notFound/404.jpg';

// TODO: implement 3 random weresorry pics
const NotFound = () => {
    const [redirect, setRedirect] = useState(false);
    setTimeout(() => setRedirect(true), 8000);
    return (
        <>
            { redirect && <Redirect to="/" /> }
            <Row className="centrify" type="flex" justify="center" align="middle">
                <Col>
                    <Row type="flex" justify="center" align="middle">
                        <Typography.Title className="header-404">404</Typography.Title>
                    </Row>
                    <Row type="flex" justify="center" align="middle">
                        <Typography.Title ellipsis className="subHeader-404">Page not found, we're sorry</Typography.Title>
                    </Row>
                    <Row type="flex" justify="center" align="middle">
                            <img src={sorry1} className="weresorry-404" alt="And for this" />
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default NotFound;