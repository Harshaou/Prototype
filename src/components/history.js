import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import music from '../img/music.svg'
import history from '../img/history.svg'
import './css/peoples.css'

class History extends Component {

    state = {
        songs: [
            { id: uuidv4(), name: "Elton - Heavy dirty soul", ago: "2h ago"},
            { id: uuidv4(), name: "Bruno Mars - Fairy Local", ago: "6h ago"},
            { id: uuidv4(), name: "Suicide - StressedOut", ago: "18h ago"},
            { id: uuidv4(), name: "Orpheus - Revolving minds", ago: "32h ago"}
        ]
    }


    render() {
        console.log(this.props);
        
        return (
            <div className="live-main-container">
                <Header />
            <div className="live-menu-box">
                <Link to="/history" className="swipe-bar">
                <h4 className="history-bar">Last 48 hours of history </h4>
                </Link>
           
            <img className="person-profile" src={history} alt="Logo" />
            <h2 className="profile-name">{this.props.match.params.name}</h2>
            <div className=""> 
                <ul className="">
                {this.state.songs.map(song => (
                    <li key={song.id}>
                        <Link to="" className="menu-box-tab">
                        <div className="live-content">
                            <div className="history-div">
                            <h4 className="history-keywords">
                            <img className="music-svg" src={music} alt="logo" />
                            {song.name}
                            </h4>
                            <div className="ago">{song.ago}</div>
                        </div>
                        </div>
                        </Link>
                    </li>
                ))}
                </ul>
            </div>
            </div>
            </div>
        );
    }
}

export default History;
