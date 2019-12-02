import React from 'react';
import './App.css';

import { Button, Row, Col } from "antd"
import "antd/dist/antd.css";

function App() {
  return (
    <>
      <Row align="middle" type="flex" justify="center">
        <Col>
            <Row style={{marginTop:"50%"}} type="flex" justify="center">
              <h1>MA</h1>
            </Row>
            <Row type="flex" justify="center">
              <Button onClick={() => {
                alert("Clicked!");
              }} type="default">BUTTON</Button>  
            </Row>     
        </Col>          
      </Row>
    </>
    
  );
}

export default App;
