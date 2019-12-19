import React from 'react';
// import Loading from '../loading/Loading'
import { Row, Col } from "antd"


function App() {
  return (
      <Row className="centrify" type="flex" justify="center" align="middle">
        <Col>
            <i class="fa fa-circle-o-notch fa-spin fa-5x fa-fw loading-color"></i>
            {/* <i class="fa fa-check fa-4x fa-fw"></i> */}
        </Col>
      </Row>
  );
}

export default App;
