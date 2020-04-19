import React, { Component } from 'react';
import Header from './Header';
import person from '../img/user1.png'
import './css/peoples.css'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


class Peoples extends Component {

    state = {
        width: '60px',
        pathName: this.props.location.pathname,
        songs: [
            { id: uuidv4(), listenerName:'Adil roshen', count: "4"},
            { id: uuidv4(), listenerName:'Archana haridas', count: "4"},
            { id: uuidv4(), listenerName:'Denis ram', count: "4"},
            { id: uuidv4(), listenerName:'Edwin charlie', count: "4"},
            { id: uuidv4(), listenerName:'Fathima umar', count: "3"},
            { id: uuidv4(), listenerName:'Sree lekha', count: "2"},
            { id: uuidv4(), listenerName:'Yaseen ahmed', count: "4"}
            
        ]
    }

    increaseWidth = () => {
        this.setState({width: '260px'})
        console.log(this.state.width);
        
    }

    ontouch = () => {
        this.setState({width: '60px'})
    }

    render() {    
        
        return (
            <div className="live-main-container">
                <Header route={this.state.pathName} />
            <div className="live-menu-box">
            <h4 className="listeners-count">
            <form className="form-search">
                <input onMouseLeave={this.ontouch} onMouseEnter={this.increaseWidth} 
                style={{width: this.state.width}} className="search-input" />
            </form> 
            </h4>
            <div className=""> 
                <ul className="">
                {this.state.songs.map(song => (
                    <li key={song.id}>
                        <Link to={`/profile/${song.listenerName}`} className="menu-box-tab">
                        <div className="live-content">
                            <h4 className="peoples-contact"><img className="person" src={person} alt="Logo" />
                            {song.listenerName}
                            <span className="peoples-collections">{song.count}</span></h4>
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

export default Peoples;
