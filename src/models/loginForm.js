// TODO: refactor a bit
// I think, that it'd be better
// apis stores etc
import { createStore, createStoreObject, createApi, createEffect, createEvent } from "effector";
import { authApi, callApi } from 'utils/ApiUtils';

import { $config } from "models/appConfig";

const init = (def, error = null) => Object({ value: def, error: error });

const apiFactory = () => Object({
    changed: (_, val) => init(val.replace(/\W*/g, '')),
    error: (_, error) => init('', error),
    clear: () => init('')
})

const $login = createStore(init(""));
const $password = createStore(init(""));
const $name = createStore(init(""));
const $lastname = createStore(init(""));
const $canLog = createStore(false);
const $isRegister = createStore(false);

const $form = createStoreObject({ login: $login, password: $password, name: $name, lastname: $lastname, canLog: $canLog, isRegister: $isRegister});

const clearForm = createEvent();
const logInEnabled = createEvent();
const setIsRegister = createEvent();

const auth = createEffect({
    handler: ({ signIn, params }) => {
        !signIn && delete params.name && delete params.lastname;
        const localConfig = $config.getState().config;
        const url = signIn ? localConfig.links.register : localConfig.links.login;
        const config = {
            method: 'POST',
            data: JSON.stringify({
                ...params
            }),
        }
        return authApi({url, config});
    }
});

const loginApi = createApi($login, apiFactory());
const passwordApi = createApi($password, {...apiFactory(),
    changed: (_, val) => {
        val = val.replace(/\W*/g, '');
        return val.length < 6 ? init(val, "Yours password is too weak! It should be at least 8 characters long") : init(val);
    }});
const nameApi = createApi($name, apiFactory());
const lastnameApi = createApi($lastname, apiFactory());

$canLog.on(logInEnabled, (_, payload) => Boolean(payload));
$isRegister.on(setIsRegister, (_, payload) => Boolean(payload));

$form.watch((state, payload) => {
    // console.log("Login form state: ", state);
    logInEnabled(state.login.value && state.password.value && !Boolean(state.password.error) && (state.isRegister ? Boolean(state.name.value && state.lastname.value) : true));
});

$form
    .on(setIsRegister, () => {
        nameApi.clear();
        lastnameApi.clear();
        logInEnabled(false);
    })
    .reset(clearForm)
    .reset(auth.done);

export {
    loginApi,
    passwordApi,
    nameApi,
    lastnameApi,
    $form,
    auth,
    setIsRegister
}

