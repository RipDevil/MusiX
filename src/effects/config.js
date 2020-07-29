import { createEffect } from 'effector';
import { callApi } from 'utils/ApiUtils';
import { replaceHost } from 'utils/utils';

const fetchConfig = createEffect('config fetch');

fetchConfig.use(async () => {
    const url = '/config.json'; // i.e. path
    const result = await callApi({ url });
    return result;
});

const changePaths = fetchConfig.done.map(({ result: {data} }) => replaceHost(data));
const configError = fetchConfig.fail.map(({ error }) => error);

export {
    fetchConfig,
    changePaths,
    configError
};