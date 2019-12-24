import React from "react";
import { useStore } from "effector-react";
import { Col, Row, Layout, Button, Progress, Slider } from "antd";

import { VOLUME } from "consts/utils";
import { $config } from "models/appConfig";

const MusicPlayer = () => {
    const { config } = useStore($config);
    const [playing, _setPlaying, setPlaying] = [...React.useState(false), () => _setPlaying(!playing)];
    const [played, setPlayed] = React.useState(0); // in %
    const [volume, _setVolume, setVolume] = [...React.useState(parseInt(localStorage.getItem(VOLUME))), volume => {
        localStorage.setItem(VOLUME, volume);
        _setVolume(volume);
    }];
    const [showInfo, setShowInfo] = React.useState(false);
    const [showVolume, setShowVolume] = React.useState(false);
    return (
        <>
        <Layout.Footer onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)} className={`song-info ${showInfo ? "song-info-big" : "song-info-small"}`}>
            {showInfo && "Test song - name"}
        </Layout.Footer>
        <Layout.Footer onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
            <Row type="flex" justify="start" align="middle" style={{height: "100%"}}>
                <Col>
                    <Button type="link"><i className="fa fa-fast-backward"></i></Button>
                    <Button type="link" onClick={setPlaying}><i className={`fa fa-${playing ? "stop" : "play"}`}></i></Button>
                    <Button type="link"><i className="fa fa-fast-forward"></i></Button>
                </Col>
                <Col span={20}>
                    <Row>
                        <Progress strokeWidth={5} strokeColor={"#9bd2ff"} showInfo={false} percent={played}/>
                    </Row>
                </Col>
                <Col>
                    {showVolume && (
                        <div onMouseEnter={() => setShowVolume(true)} onMouseLeave={() => setShowVolume(false)} className="volume-container">
                            <Slider defaultValue={volume} onAfterChange={value => setVolume(value)} vertical/>
                        </div>
                    )}
                    <Button onMouseEnter={() => setShowVolume(true)} onMouseLeave={() => setShowVolume(false)} type="link"><i className={`fa fa-chevron-${showVolume ? "down" : "up"}`}></i></Button>
                </Col>
                <Col>
                    <Button title="GitHub" onClick={() => window.open(config.links.external_link)} type="link"><i style={{color: "red"}} className="fa fa-spin fa-lg fa-star"></i></Button>
                </Col>
            </Row>
        </Layout.Footer>
        </>
    );
}

export default MusicPlayer;