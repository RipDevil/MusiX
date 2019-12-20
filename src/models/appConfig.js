import { createStore, createEffect } from "effector";
import { callApi } from 'utils/ApiUtils';
import { replaceHost, } from 'utils/utils';

const init = {
    isFetching: false,
    error: null,
    config: {}
};

const $config = createStore(init);

const fetchConfig = createEffect({
    handler: () => {
        return callApi({url: "/config.json"});
    }
});

$config
    .on(fetchConfig.pending, (state, pending) => Object({ ...state, isFetching: pending }))
    .on(fetchConfig.done, (_, { result: config }) => {
        return {
            isFetching: false,
            error: null,
            config: replaceHost(config)
        };
    })
    .on(fetchConfig.fail, (_, { error }) => {
        return {
            isFetching: false,
            error: error.message,
            config: {}
        };
    });

export {
    fetchConfig,
    $config
}