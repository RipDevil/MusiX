import { createStore, createStoreObject, createApi, createEffect, createEvent } from "effector";
import { ID_TOKEN } from "consts/utils";

const $login = createStore("");
const $logged = createStore(false);

const $user = createStoreObject({
    login: $login,
    isLogged: $logged
});

const userLogged = createEvent();
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

// $user.watch((a,b) => {
//     console.log("User store", a);
// })

export {
    userLogged,
    logout,
    $user
};

