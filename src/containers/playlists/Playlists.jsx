import React from "react";
import { useStore } from "effector-react";
import { Row, Col, Typography} from "antd";
import background from 'images/playlistexample.jpg';

const Playlists = () => {
    // TODO: from Music service!!!
    const tempPlaylists = [
        {
            id: "1",
            name: "Master of puppets",
            private: false,
        },
        {
            id: "2",
            name: "Joji Slowdive",
            private: true,
        }
    ];

    return (
        <Row type="flex" justify="start" align="middle">
            <Col>
                <Row type="flex" justify="center" align="middle">
                    {tempPlaylists.length && tempPlaylists.map(item => (
                    <Col span={6} key={item.id} className="playlist">
                        {item.private && <i title="Private album" className="fa fa-2x fa-lock playlist-private"></i>}
                        <Row type="flex" justify="center" align="middle" className="playlist-title">
                            <Typography.Title ellipsis level={4}>{item.name}</Typography.Title>
                        </Row>
                    </Col>))}
                </Row>
            </Col>
        </Row>
    )
};


export default Playlists;