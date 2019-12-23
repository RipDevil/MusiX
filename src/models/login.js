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

const $form = createStoreObject({ login: $login, password: $password, name: $name, lastname: $lastname, canLog: $canLog});

const clearForm = createEvent();
const logInEnabled = createEvent();
const setIsRegister = createEvent();

const auth = createEffect({
    handler: ({ signIn, params }) => {
        const localConfig = $config.getState().config;
        const url = signIn ? localConfig.links.register : localConfig.links.login;
        const config = {
            method: 'POST',
            data: {
                ...params
            },
        }
        return authApi({url, config});
    }
});

const loginApi = createApi($login, apiFactory());
const passwordApi = createApi($password, {...apiFactory(),
    changed: (_, val) => {
        val = val.replace(/\W*/g, '');
        return val.length < 8 ? init(val, "Yours password is too weak! It should be at least 8 characters long") : init(val);
    }});
const nameApi = createApi($name, apiFactory());
const lastnameApi = createApi($lastname, apiFactory());

$canLog.on(logInEnabled, (_, payload) => Boolean(payload));
$isRegister.on(setIsRegister, (_, payload) => Boolean(payload));

$form.watch((state, payload) => {
    console.log("Login form state: ", state);
    // TODO: separate login and register
    if (state.isRegister) {
        logInEnabled(state.login.value && state.password.value && !state.password.error && state.name.value && state.lastname.value);
    } else {
        logInEnabled(state.login.value && state.password.value && !state.password.error);
    }
    
});

$form
    .on(setIsRegister, () => {
        nameApi.clear();
        lastnameApi.clear();
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
    $isRegister,
    setIsRegister
}

