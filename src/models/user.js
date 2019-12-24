import { createStore, createStoreObject, createEvent } from "effector";

import { ID_TOKEN } from "consts/utils";

import { $playlists, getPlaylists } from "models/playlists";

const $login = createStore("");
const $logged = createStore(false);
const $error = createStore({});

const $user = createStoreObject({
    login: $login,
    isLogged: $logged,
    playlists: $playlists,
    error: $error
});

const userLogged = createEvent();
const error = createEvent();
const clearError = createEvent();
const getUsersPlaylists = userLogged.map(() => {
    getPlaylists()
        .catch(error);
});
const logout = createEvent();
const clearToken = logout.map(() => {
    localStorage.removeItem(ID_TOKEN);
})

// todo exp date
// const expirationLogin = createEffect({
//     handler: new Promise((resolve, reject) => {
//         setTimeout(logout, 1000 * 60 * 60 + 100)
//     })
// });

$user
    .on(userLogged, (state, {login, token}) => {
        localStorage.setItem(ID_TOKEN, token);

        return {
            ...state,
            login,
            isLogged: true
        }
    })
    .reset(logout);

$user.watch((a,b) => {
    console.log("User store", a);
})

$error
    .on(error, (_, payload) => payload)
    .reset(clearError)

export {
    userLogged,
    logout,
    $user
};

