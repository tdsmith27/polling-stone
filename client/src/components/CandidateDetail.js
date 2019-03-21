import React, {Component} from 'react';
import './CandidateDetailComponents/CandidateDetail.css';
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
    this.trumpTest = {
      firstname: 'Donald',
      lastname: 'Trump',
      nickname: 'Donnie Boy',
      birthday: '1946-06-14',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/440px-Donald_Trump_official_portrait.jpg',
      campaign: 'https://www.donaldjtrump.com/',
      twitter: 'realDonaldTrump',
      party: 'Republican',
      bio: 'Donald J. Trump is the current President of the United States of America, and is seeking re-election under the Republican Party. Donald Trump was born and raised in Queens, New York City. He announced his bid for re-election on January 17, 2017. He has worked as a real-estate developer, businessman, and reality TV host.  Donald Trump’s primary platform is focused on: 1. Focusing on Immigration and building a border wall between the USA and Mexico, and 2. Changing how the US trades with other countries (Trade deals, Tariffs, Sanctions).',
      donors: 'N/A',
      policies: {
        abortion: 'Pro-Life',
        lgbtAdoption: 'Yes',
        gunControl: 'No',
        equalPay: 'No',
        climateChange: 'No',
        gayMarriage: 'Yes',
        borderWall: 'Yes',
        plannedParenthood: 'No'
      }
    }
    this.server = process.env.SERVER || 'http://localhost:8000'
  }
  //This function randomly selects an index location to simulate being selected from a page.
  betterThanDemocracy() {
    const vote = Math.floor(Math.random()*25)
    Axios.get(`${this.server}/api/candidates`)
      .then(data => this.setState({details: data.data[vote]}) )
      .catch(err => console.log(err))

      Axios.get(`${this.server}/api/bios`)
      .then(data => this.setState({bio: data.data[vote]}))
      .catch(err => console.log(err))

      Axios.get(`${this.server}/api/policies`)
        .then(data => this.setState({policies: data.data[vote]}))
        .catch(err => console.log(err))
  }
  componentDidMount() {
    this.betterThanDemocracy()
  }
  render() {
    return (
      <div test-id='ancestor' style={{backgroundColor: '#ECECEC', padding: '20px', width: '75%' }}>
        <BiographicCard 
          candidate={this.trumpTest} 
          bio={this.state.bio} 
          details={this.state.details}
          policies={this.state.policies} 
        />
        {/* <Photo image={this.trumpTest.photo} /> */}
        <PolicyBlock policies={this.state.policies} candidate={this.trumpTest}/>
      </div>
    )
  }
}