import React from "react";
import { Row, Layout, Button } from "antd";

import { logout } from "models/user";

const Header = () => {
    const [menuHover, setMenuHover] = React.useState(true);
    return (
        <Layout.Header onMouseEnter={() => setMenuHover(true)} onMouseLeave={() => setMenuHover(false)} className={menuHover ? "menu-thick" : ""}>
            {menuHover && (
                <Row type="flex" justify="end" align="middle">
                    <Button onClick={logout}>Logout</Button>
                </Row>
            )}
        </Layout.Header>
    )
};

export default Header;