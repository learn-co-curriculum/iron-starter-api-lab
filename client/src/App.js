import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      campaigns: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/campaigns')
        .then(response => response.json())
        .then(campaigns => this.setState({ campaigns }));
  } 

  render() {
    const campaignCardStyle = {
      border: '1px solid #00d8ff',
      margin: '16px',
      padding: '16px',
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Iron Starter</h1>
        </div>
        <div className="App-intro">
          <h2>Current Campaigns</h2>
          {this.state.campaigns.map(campaign => (
            <div key={campaign.id} style={campaignCardStyle}>
              <h3>{campaign.title}</h3>
              <h4>Goal: {campaign.goal}</h4>
              <h4>Pledged: {campaign.pledged}</h4>
              <p>{campaign.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
