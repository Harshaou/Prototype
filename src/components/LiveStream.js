import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import person from '../img/user1.png'
import music from '../img/music.svg'
import filter from '../img/filter-white.svg'
import './css/live.css'



class LiveStream extends Component {

    state = {
        pathName: this.props.location.pathname,
        songs: [
            {points: 8, listenerName:'Adil roshen', name: "Elton - Heavy dirty soul", duration: "3:58"},
            {points: 7, listenerName:'Archana haridas',name: "Bruno Mars - Fairy Local", duration: "3:34"},
            {points: 6, listenerName:'Edwin charlie',name: "Orpheus - Revolving minds", duration: "2:14"},
            {points: 6, listenerName:'Fathima umar',name: "Adele - Lane Boy", duration: "3:54"},
            {points: 5, listenerName:'Yaseen ahmed',name: "Invites - Tear in My Heart", duration: "5:04"},
            
        ]
    }

    render() {        
        return (
            <div className="live-main-container">
                <Header route={this.state.pathName} />
            <div className="live-menu-box">
                <h4 className="listeners-count">Listeners Count: 9
                <img className="filter" src={filter} alt="Logo" /></h4>
            <div className=""> 
                <ul className="">
                {this.state.songs.map(song => (
                    <li key={uuidv4()}>
                        <Link to={`/livejoin/${song.name}`} className="menu-box-tab">
                        <div className="live-content">
                            <h4 className="live-listener"><img className="person" src={person} alt="Logo" />{song.listenerName}
                            <span className="join">Join</span></h4>
                            <p className="live-listening"><img className="music" src={music} alt="Logo" />{song.name}
                            <span className="stream-duration">{' - ' +song.duration}</span></p> 
                            
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

export default LiveStream;
