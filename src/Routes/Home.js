import React, {useEffect, useState} from 'react';
import { movieAPI } from '../API';
const Home = () => {

    const [nowPlaying, setNowPlaying] = useState([]);

    const getData = async () => {
        const [nowPlayingRes, nowPlayingErr] = await movieAPI.nowPlaying()
        setNowPlaying(nowPlayingRes);
    }

    useEffect(() => {
        getData()
    },[])

    return (
        <div>
            <h1>Home</h1>
            {nowPlaying.map(item => (
                <h1>{item.title}</h1>
            ))}
        </div>
    );
};

export default Home;