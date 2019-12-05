import React from 'react';
// import Loading from '../loading/Loading'
import { Row, Col } from "antd"


function App() {
  return (
      <Row type="flex" justify="center" align="middle">
        <Col span={4}>
          <i class="fa fa-circle-o-notch fa-spin fa-5x fa-fw"></i>
        </Col>
      </Row>
  );
}

export default App;
