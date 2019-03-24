import React, { Component } from 'react';
import Table from './Components/Table';
import './App.css';

class App extends Component {

    state = {
        picArray: [],
    };


    componentDidMount(){

        fetch('test.json').then((response)=>
        {
            return response.json();
        }).then((json)=>{
            this.setState({picArray: json.data});
            console.log(json);
        })


    }


    render() {
    return (
        <div className="container">
            <Table picArray={this.state.picArray}/>
        </div>
    );
  }
}


export default App;
