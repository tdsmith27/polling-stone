import React, { Component } from 'react';
import './App.css';
import VoterInfoDetail from './components/VoterInfoDetail.js'

const api = `http://localhost:8000/api/example`


class App extends Component {
  constructor () {
    super()
    this.state = { seaCreatures: [] }
  }

  componentDidMount() {
    fetch(api)
      .then(res => res.json())
      .then(seaCreatures => {
        this.setState({ seaCreatures: seaCreatures.data })
      })
  }

  render() {
    return (
      <>
        <h1>Welcome to Blue Ocean</h1>
        <ul>
          {this.state.seaCreatures.map((seaCreature, i) => <li key={i}>{seaCreature}</li>)}
        </ul>
        <VoterInfoDetail />
      </>
    );
  }
}

export default App;
