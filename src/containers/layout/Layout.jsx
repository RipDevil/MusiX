import React from "react";
import { Layout } from "antd";

import Header from "containers/layout/Header";
import MusicPlayer from "containers/player/MusicPlayer";

const WithLayout = Component => {
    return () => (
        <Layout id="wrapper">
            <Header />
            <Layout.Content className="p-3">
                    <Component />
            </Layout.Content>
            <MusicPlayer />
        </Layout>
    );
}

export default WithLayout;