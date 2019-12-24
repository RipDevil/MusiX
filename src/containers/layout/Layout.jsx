import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { Row, Col, Layout } from "antd";

const WithLayout = Component => {
    return () => (
        <>
            {/* {!IsLogged && <Redirect to="/login" />} */}
            <Layout id="wrapper">
                <Layout.Header className="musix-header">Header</Layout.Header>
                    <Layout.Content>
                        <Component />
                    </Layout.Content>
                <Layout.Footer className="musix-footer">Footer</Layout.Footer>
            </Layout>
        </>
    );
}

export default WithLayout;