import React from "react";

import { Row, Col, Typography } from "antd";
import sorry1 from '../../images/notFound/404.jpg';

// TODO: implement 3 random weresorry pics
const NotFound = () => {
    return (
        <Row className="centrify" type="flex" justify="center" align="middle">
            <Col>
                <Row type="flex" justify="center" align="middle">
                    <Typography.Title className="header-404">404</Typography.Title>
                </Row>
                <Row type="flex" justify="center" align="middle">
                    <Typography.Title ellipsis disabled>Page not found, we're sorry</Typography.Title>
                </Row>
                <Row type="flex" justify="center" align="middle">
                        <img style={{
                        height: "300px",
                        width: "auto"
                    }} src={sorry1} alt="And for this" />
                </Row>
            </Col>
        </Row>
    );
};

export default NotFound;