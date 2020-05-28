import React from 'react';
import './App.css';
import {Cards, Charts, Country} from './components';
import styles from './App.module.css';
import fetchData from './api/api.js';
import img from './images/image.png'
import Sentence from './components/Sentence/Sentence';

class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    //console.log(fetchData);
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
    //console.log(fetchData);
  }
 
  render(){
    return (
      <div className={styles.container}>
          <img className={styles.img} src={img} alt="COVID19" />
          <Sentence />
          <Cards data={this.state.data} />
          <Country handleCountryChange={this.handleCountryChange} />
          <Charts data={this.state.data} country={this.state.country}/>
      </div>
    );
  }
}

export default App;
