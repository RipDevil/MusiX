import { createStore, createStoreObject, createEvent, createEffect } from "effector";
import { callApi } from 'utils/ApiUtils';
import { replaceHost, } from 'utils/utils';

const init = {
    isFetching: false,
    error: null,
    config: {}
};

const $config = createStore(init);

const fetchConfig = createEffect({
    handler: () => new Promise((resolve, reject) => {
        try {
            const url = `/config.json`;
            const response = callApi({ url });
            // FIXME: make it w/o delay
            setTimeout(() => {resolve(response);}, 1500);
        }
        catch (error) {
            setTimeout(() => {reject(error);}, 1500);
        }
    })
});

$config
    .on(fetchConfig.pending, (state, pending) => { return { ...state, isFetching: pending } })
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