import React, { Component } from 'react';
import { Route} from 'react-router-dom'
import HotList from './HotList';
import LiveStream from './LiveStream'
import Peoples from './Peoples';
import Profile from './Profile';
import LiveJoin from './LiveJoin';
import History from './history';


class App extends Component {

    render() {
        return (
            <div className="App">
                <Route exact path="/" component={HotList }/>
                <Route path="/live" component={LiveStream} />
                <Route path="/peoples" component={Peoples} />
                <Route path="/profile/:name" component={Profile} />
                <Route path="/history" component={History} />
                <Route path="/livejoin/:name" component={LiveJoin} />
            </div>
        );
    }
}

export default App;
