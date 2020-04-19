import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import person from '../img/user1.png'
import historyBlack from '../img/history-black.svg'
import './css/peoples.css'

class Profile extends Component {

    state = {
        songs: [
            { id: uuidv4(), name: "Elton - Heavy dirty soul", duration: "3:58"},
            { id: uuidv4(), name: "Bruno Mars - Fairy Local", duration: "3:34"},
            { id: uuidv4(), name: "Suicide Squad - StressedOut", duration: "2:14"},
            { id: uuidv4(), name: "Adele - Lane Boy", duration: "3:54"}
        ]
    }


    render() {
        console.log(this.props);
        
        return (
            <div className="live-main-container">
                <Header />
            <div className="live-menu-box">
                <Link to="/history" className="swipe-bar">
                <h4 className="swipe-keywords">Swipe bottom to see History </h4>
                <img className="historyBlack" src={historyBlack} alt="Logo" />
                </Link>
           
            <img className="person-profile" src={person} alt="Logo" />
            <h2 className="profile-name">{this.props.match.params.name}</h2>
            <div className=""> 
                <ul className="">
                {this.state.songs.map(song => (
                    <li key={song.id}>
                        <Link to="" className="menu-box-tab">
                        <div className="live-content">
                            <h4 className="peoples-contact"><img className="person" src={person} alt="Logo" />
                            {song.name}
                            <span className="song-duration-profile">{song.duration}</span></h4>
                        </div>
                        </Link>
                    </li>
                ))}
                <div className="profile-private">
                <h4 className="private-collection">Request private <br></br> collections</h4>
                </div>
                </ul>
            </div>
            </div>
            </div>
        );
    }
}

export default Profile;
