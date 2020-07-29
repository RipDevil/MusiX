import React from "react";
import { useStore } from "effector-react";

import Loading from "containers/loading/Loading";
import { fetchConfig } from 'effects';
import { $config } from 'stores';

const AppConfig = ({ children }) => {
    const { isFetching, content: config, error }  = useStore($config);

    React.useEffect(() => {
        fetchConfig();
    }, []);

    return isFetching ? <Loading /> : (error || !config ? <div>{`Config not loaded with error: ${error}`}</div> : children);
};

export default AppConfig;