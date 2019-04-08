import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {getAllMedia, getFilesByTag} from './util/MediaAPI';
import Front from './views/Front';
import Single from './views/Single';
import Nav from './components/Nav';
import Login from './views/Login';
import Profile from './views/Profile';
import Logout from './views/Logout';
import Grid from "@material-ui/core/Grid/Grid";

class App extends Component {

    state = {
        picArray: [],
        user: null,
    };

    setUser = (user) => {
        // hae profiilikuva ja liitä se user-objektiin
        getFilesByTag('profile').then((files) => {
            const profilePic = files.filter((file) => {
                let outputFile = null;
                if (file.user_id === this.state.user.user_id) {
                    outputFile = file;
                }
                return outputFile;
            });
            this.setState((prevState) => {
                return {
                    user: {
                        ...prevState.user,
                        profilePic: profilePic[0],
                    },
                };
            });
        });
        this.setState({user});
    };

    setUserLogout = (user) => {
        this.setState({user});
    };
    checkLogin = () => {
        return this.state.user !== null;
    };

    componentDidMount() {
        getAllMedia().then((pics) => {
            console.log(pics);
            this.setState({picArray: pics});
        });
    }

    render() {
        return (
            <Router basename='/~mikkoir/react-project3'>
                <div className='container'>
                    <Grid container spacing={24}>
                    <Grid item xs={3} sm={3}>
                    <Nav checkLogin={this.checkLogin}/>
                    </Grid>
                    <Grid item xs={6}>
                    <Route  path="/home" render={(props) => (
                        <Front {...props} picArray={this.state.picArray}/>
                    )}/>

                    <Route path="/single/:id" component={Single}/>

                    <Route path="/profile" render={(props) => (
                        <Profile {...props} user={this.state.user}/>
                    )}/>

                    <Route exact path="/" render={(props) => (
                        <Login {...props} setUser={this.setUser}/>
                    )}/>

                        <Route path="/logout" render={(props) => (
                            <Logout {...props} setUserLogout={this.setUserLogout}/>
                        )}/>
                    </Grid>
                    </Grid>
                </div>
            </Router>
        );
    }
}

export default App;
