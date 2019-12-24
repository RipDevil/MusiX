import React from "react";

import WithLayout from "containers/layout/Layout";

import { logout } from "models/user"

const MainPage = () => {

    return (
        <>
            <div>Musix</div>
            <button onClick={logout}>logout</button>
        </>
    )
}

export default WithLayout(MainPage);

