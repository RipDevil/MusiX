import React from "react";
import { useStore } from "effector-react";
import { Row, Col, Typography} from "antd";

import WithLayout from "containers/layout/Layout";
import Playlists from "containers/playlists/Playlists";
import { $user } from "models/user";

const MainPage = () => {
    let { login } = useStore($user);
    if (!Boolean(login)) {login = "<<USERNAME>>";}
    // TODO: check if there is at least  a one playlist
    return (
        <Row>
            <Col >
                {/* Here can be something */}
                <Playlists />
            </Col>
        </Row>
    )
}

export default WithLayout(MainPage);

