import { createStore, createEffect } from "effector";

import { $config } from "models/appConfig";
import { callApi } from 'utils/ApiUtils';

const $playlists = createStore([]);

const getPlaylists = createEffect({
    handler: () => {
        const { config } = $config.getState();
        return callApi({ url: config.links.playlists, config: { method: "GET" } });
    }
});

const createPlaylist = createEffect({
    handler: (data) => {
        const { config } = $config.getState();
        return callApi({ url: config.links.get_playlists, config: { method: "POST", data: JSON.stringify(data) } });
    }
});

$playlists
    .on(getPlaylists.done, (_, { result }) => result.data.content)
    // .on(createPlaylist.done, (_, { result }) => )

export {
    $playlists,
    getPlaylists,
    createPlaylist
};