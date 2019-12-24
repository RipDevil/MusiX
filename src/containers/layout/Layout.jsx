import React from "react";
import { Layout, Button } from "antd";

import Header from "containers/layout/Header";

const WithLayout = Component => {
    return () => (
        <Layout id="wrapper">
            <Header />
                <Layout.Content className="p-3">
                        <Component />
                </Layout.Content>
            <Layout.Footer >Here will be player</Layout.Footer>
        </Layout>
    );
}

export default WithLayout;