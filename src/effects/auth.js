import { createEffect } from 'effector';

import { $config } from 'stores';
import { authApi } from 'utils/ApiUtils';

const auth = createEffect('authentication');

auth.use(async ({ params, isRegister = false }) => {
    const { register, login } = $config.getState().content;
    const url = isRegister ? register : login;
    const config = {
        method: 'POST',
        data: JSON.stringify(params)
    };

    const result = await authApi({url, config});
    return result;
});

const authError = auth.fail.map(({ error }) => error);

export {
    auth,
    authError
};