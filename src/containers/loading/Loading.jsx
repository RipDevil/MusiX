import React from "react";
import {Row, Col} from "antd";

const Loading = () => {
    return (
        <Row className="centrify" type="flex" justify="center" align="middle">
          <Col>
              <i className="fa fa-circle-o-notch fa-spin fa-5x fa-fw loading-color"></i>
          </Col>
        </Row>
    )
};

export default Loading;