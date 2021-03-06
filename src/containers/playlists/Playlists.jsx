import React from "react";
import { useStore } from "effector-react";
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Col, Typography, Input } from "antd";

import { $playlists, createPlaylist, deletePlaylist } from 'models/playlists'
import { $config } from 'models/appConfig';
import { tidyString } from 'utils/utils';
import { DEFAULT_ALBUM_NAME, NEW_ALBUM_NAME } from 'consts/utils';

const Playlists = () => {
    const playlists = useStore($playlists);
    const { config } = useStore($config);

    const [naName, setNaName] = React.useState(NEW_ALBUM_NAME);
    const [naPrivacy, setNaPrivacy] = React.useState(false);

    const inputOnBlur = () => setNaName(tidyString(naName, DEFAULT_ALBUM_NAME.replace(/{number}/i, playlists.length + 1)));
    const inputOnChange = e => setNaName(e.target.value);
    const submitNewPlaylist = e => {
        if (e.keyCode === 13) {
            setNaName(tidyString(naName, DEFAULT_ALBUM_NAME.replace(/{number}/i, playlists.length + 1)));
            createPlaylist({ name: naName, description: "todo", internal: naPrivacy })
                .then(() => {
                    setNaName(NEW_ALBUM_NAME);
                    setNaPrivacy(false);
                });
        }
    };
    const handleDeletePlaylistClick = pid => {
        deletePlaylist(pid)
            .then(() => {
                // here I can check if something from this album is playing and stop it... I guess
            })
    }

    return (
        <Row type="flex" justify="start" align="middle">
            <Col>
                <Row type="flex" justify="start" align="middle">
                    <i onClick={() => setNaPrivacy(!naPrivacy)} title="Set privacy" className={`fa fa-2x fa-lock playlist-privacy ${naPrivacy ? "private" : ""}`} />
                    <Col span={6} className="playlist playlist-new">
                        <Row type="flex" justify="center" align="middle" className="playlist-title">
                            <Input maxLength={30} className="new-playlist-name" onKeyDown={submitNewPlaylist} onChange={inputOnChange} onBlur={inputOnBlur} value={naName} />
                        </Row>
                    </Col>
                    {playlists.length > 0 && playlists.map(item => (
                        <section key={item.id}>
                            {item.internal && <i title="Private album" className="fa fa-2x fa-lock playlist-privacy private"></i>}
                            <i title={`Delete "${item.name}"`} onClick={() => handleDeletePlaylistClick(item.id)} className="fa fa-2x fa-times playlist-delete"></i>
                            <LinkContainer exact to={config.links.playlist.replace(/:pid/g, item.id)}>
                                <Col span={6} className="playlist">
                                    <Row type="flex" justify="center" align="middle" className="playlist-title">
                                        <Typography.Title title={item.name} ellipsis level={4}>{item.name}</Typography.Title>
                                    </Row>
                                </Col>
                            </LinkContainer>
                        </section> ))}
                </Row>
            </Col>
        </Row>
    )
};


export default Playlists;