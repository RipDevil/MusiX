import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { Row, Col, Layout } from "antd";

const WithLayout = ({ isLogged, component }) => {

    return (
        <>
            {!isLogged && <Redirect to="/login" />}
            <Layout>
                <Layout.Header className="musix-header">Header</Layout.Header>
                    <Layout.Content>{component}</Layout.Content>
                <Layout.Footer className="musix-footer">Footer</Layout.Footer>
            </Layout>
        </>
    );
}

export default withRouter(WithLayout);