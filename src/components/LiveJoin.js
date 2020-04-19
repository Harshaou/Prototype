import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import cartoon from '../img/cartoon.jpg'
import clap from '../img/clap.svg'
import comment from '../img/comment.svg'
import join from '../img/join.svg'
import playlistOne from '../img/playlistOne.svg'
import './css/peoples.css'
import Toggle from './Toggle'

class LiveJoin extends Component {

    state = {
        songs: [
            { id: uuidv4(), name: "nn", duration: "3:34"}
        ]
    }

    

    render() {
        console.log(this.props);
        
        return (
            <div className="live-main-container">
                <Header />
            <div className="live-menu-box">
            <div className="bar-top-live">
                <Toggle />
            </div>

            <div className="join-live-div">
            <img className="join-live" src={join} alt="Logo" />
            <h2 className="join-p">You are enjoying adil roshan's live</h2>
            </div>   
            
            <div className="playlist-live-div">
            <span className="sp-private">Private</span>
            <img onClick={() => alert("Added to Private Collection")} className="playlistTwo" src={playlistOne} alt="Logo" />
            </div>
            
            <img className="cartoon" src={cartoon} alt="Logo" />
            <div className=""> 
                <ul className="">
                {this.state.songs.map(song => (
                    <li key={song.id}>
                        <Link to="" className="menu-box-tab">
                        <div className="live-song">
                            <h2 className="profile-name-live">{this.props.match.params.name} - 3:42</h2>
                        </div>
                        </Link>
                        <div className="song-bar-div">
                <h3 className="song-bar">
                    <img className="comment" src={comment} alt="Logo" />
                    <span id="next" className="icon fontawesome-step-backward"></span>
                    <span id="play" className="icon fontawesome-play"></span>
                    <span id="prev" className="icon fontawesome-step-forward"></span>
                    <img className="clap" src={clap} alt="Logo" />
                    </h3>
                </div>
                    </li>
                ))}
                </ul>
            </div>
            </div>
            </div>
        );
    }
}

export default LiveJoin
