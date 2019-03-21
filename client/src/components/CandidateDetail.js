import React, {Component} from 'react';
import BiographicCard from './CandidateDetailComponents/BiographicCard.js'
import PolicyBlock from './CandidateDetailComponents/PolicyBlock.js';
import Axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      details: null,
      bio: '',
      policies: []
    }
    this.candidateDictionary = {
      'Trump': 2,
      'Weld': 3,
      'Booker': 4,
      'Buttigieg': 5,
      'Castro': 6,
      'Delaney': 7,
      'Gabbard': 8,
      'Gillibrand': 9,
      'Harris': 10,
      'Hickenlooper Jr.': 11,
      'Inslee': 12,
      'Klobuchar': 13,
      'Messam': 14,
      "O'Rourke": 15,
      'Sanders': 16,
      'Warren': 17,
      'Williamson': 18,
      'Yang': 19,
      'Kokesh': 20,
      'McAfee': 21,
      'Supreme': 22,
      'Vohra': 23,
      'Hunter': 24,
      'Kroell': 25,
      'Schriner': 26
    };
    this.vote = this.candidateDictionary[this.props.candId] || Math.floor(Math.random()*25);
    this.server = process.env.SERVER || 'http://localhost:8000';
  };
  betterThanDemocracy() {
    Axios.get(`${this.server}/api/candidates/${this.vote}`)
      .then(data => this.setState({details: data.data[0]}) )
      .catch(err => console.log(err));

      Axios.get(`${this.server}/api/bios/${this.vote}`)
      .then(data => this.setState({bio: data.data[0]}))
      .catch(err => console.log(err));

      Axios.get(`${this.server}/api/policies/${this.vote}`)
        .then(data => this.setState({policies: data.data[0]}))
        .catch(err => console.log(err));
  }
  componentDidMount() {
    this.betterThanDemocracy();
  }
  render() {
    return (
      <div test-id='ancestor' style={{backgroundColor: '#C0C0C0', padding: '20px', width: '100%' }}>
        <BiographicCard 
          bio={this.state.bio} 
          details={this.state.details}
          policies={this.state.policies} 
        />
        <PolicyBlock policies={this.state.policies} candidate={this.trumpTest}/>
      </div>
    )
  };
};