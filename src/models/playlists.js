import { createStore, createEffect} from "effector";

import { $config } from "models/appConfig";
import { callApi } from 'utils/ApiUtils';

const $playlists = createStore([]);

const getPlaylists = createEffect({
    handler: () => {
        const { config } = $config.getState();
        return callApi({url: config.links.playlists, config: {method: "GET"}});
    }
});

$playlists
    .on(getPlaylists.done, (_, {result}) => result.data.content)

export {
    $playlists,
    getPlaylists
};