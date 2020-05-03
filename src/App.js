import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Data from './Data.js';

export default class App extends Component {

 
      state = {
      data: [],
      actualCountry: "Slovakia"
    }

getData(){
  axios.get("https://api.covid19api.com/summary")
  .then(res =>  this.setState({data: res.data.Countries}))
  .catch( err => console.log(err))
}

componentDidMount = () =>{
  this.getData();
}
getCurrentCountry = (e) => {
  const krajina = e.target.value;
  this.setState({actualCountry: krajina})
}



  render(){
    const {data} = this.state;
    const dataList = data.length === "" ? null : data.map(  option =>  <option key={option.Country} value={option.Country}>{option.Country}</option>); 
    
    return(
      <div className="App">
      <div className="overlay"></div>
      <h1 className="nadpis">COVID -19 TRACKER</h1>
      <select id="selection" value={this.state.actualCountry} onChange={this.getCurrentCountry}>
      {dataList}
      </select>
        <Data aktualnaKrajina ={this.state.actualCountry}
        info = {this.state.data}/>
      </div>
    )
  }
}


