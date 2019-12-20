import React from "react";
import { useStore } from "effector-react";

import { isEmptyObj } from "utils/utils";
import Loading from "containers/loading/Loading";
import {
    $config,
    fetchConfig
} from 'models/appConfig';

const AppConfig = ({ children }) => {
    const { config, isFetching, error } = useStore($config);
    React.useEffect(() => {
        isEmptyObj(config) && !error && fetchConfig();
    });

    return isFetching ? <Loading /> : (error ? <div>{`Config not loaded with error: ${error}`}</div> : children);
};

export default AppConfig;