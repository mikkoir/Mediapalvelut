import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Table from './Components/table';
import {getAllMedia} from "./utils/MediaAPI";
import Nav from "./Components/Nav";
import Home from "./views/Home";
import Profile from "./views/Profile";
import Single from "./views/Single";

class App extends Component {

    apiUrl = 'http://media.mw.metropolia.fi/wbma/media/';

    state = {
        picArray: [],
    };

    componentDidMount() {
        getAllMedia().then(pics => {
            this.setState({picArray: pics})
        })
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <Nav/>
                    <Route exact path="/" render={(props) => (
                        <Home {...props} picArray={this.state.picArray}/>
                    )}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/single" component={Single}/>

                </div>
            </Router>
        );
    }
}

export default App;