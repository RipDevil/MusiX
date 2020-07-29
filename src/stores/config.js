import { createStore } from "effector";
import { createSimpleStore } from './libs';
import { configError, changePaths, fetchConfig } from 'effects';

const $config = createStore(createSimpleStore());

$config
    .on(fetchConfig.pending, (state, pending) => ({ ...state, isFetching: pending}))
    .on(configError, (state, error) => ({ ...state, error}))
    .on(changePaths, (state, { links }) => ({ ...state, content: links }))
    .watch(info => console.log('CONFIG :>>', info));

export {
    $config
};