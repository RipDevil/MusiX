import React from "react";
import { Row, Layout, Button } from "antd";

import { logout } from "models/user";

const Header = () => {
    const [menuHover, setMenuHover] = React.useState(false);
    return (
        <Layout.Header onMouseEnter={() => setMenuHover(true)} onMouseLeave={() => setMenuHover(false)} className={menuHover ? "menu-thick" : ""}>
            {menuHover ? (
                <Row type="flex" justify="end" align="middle">
                    <Button type="link" onClick={logout}>Logout</Button>
                </Row>
            ) : (
                <Row type="flex" justify="end" align="middle">
                    <i className="fa fa-chevron-down" style={{marginRight: "1rem"}}></i>
                </Row>
            )}
        </Layout.Header>
    )
};

export default Header;