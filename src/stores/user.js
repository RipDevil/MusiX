import { createStore } from "effector";
import { createSimpleStore } from './libs';
import { authError, auth } from 'effects/auth';

console.log('auth :>> ', auth);
const $user = createStore(createSimpleStore());

$user
    .on(auth.pending, (state, pending) => ({ ...state, isFetching: pending}))
    .on(authError, (state, error) => ({ ...state, error}))
    .on(auth.done, (state, payload) => ({ ...state, content: payload }))
    .watch(info => console.log('USER :>>', info));

export {
    $user
};