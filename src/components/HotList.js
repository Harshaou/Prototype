import React, { Component } from 'react';
import Header from './Header';
import {Link} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import './css/app.css'
import './css/peoples.css'

class HotList extends Component {

    state = {
        pathName: this.props.location.pathname,
        songs: [
            {points: 8, name: "Elton - Heavy dirty soul", duration: "3:58"},
            {points: 8, name: "Bruno Mars - Fairy Local", duration: "3:34"},
            {points: 7, name: "Suicide Squad - StressedOut", duration: "2:14"},
            {points: 6, name: "Adele - Lane Boy", duration: "3:54"},
            {points: 6, name: "Invites - Tear in My Heart", duration: "5:04"},
            {points: 5, name: "Jhon Lennon - Ride", duration: "3:10"},
            {points: 4, name: "Invites - The Judge", duration: "1:54"},
            {points: 4, name: "Invites - Tear in My Heart", duration: "5:04"}
        ]
    }
    
    render() { 
        return (
            <div className="main-container">
                <Header route={this.state.pathName}/>
                <div className="live-menu-box">
                <h4 style={{paddingTop: '10px'}} className="listeners-count">Best out of your circle</h4>
            <div className=""> 
                <ul className="">
                {this.state.songs.map(song => (
                    <li key={uuidv4()}>
                        <Link to="" className="menu-box-tab">
                        <div className="live-content">
                            <h4 className="hotlist-peoples-contact"><span style={{'marginLeft': '10px'}}
                            className="icon fontawesome-arrow-up">{song.points}</span>
                            <span className="songName" style={{'marginLeft': '18px','marginRight': '0px'}}>{song.name}</span>
                            <span className="song-duration">{song.duration}</span></h4>
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

export default HotList;
