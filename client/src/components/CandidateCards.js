import React from 'react';
import { Router, Link } from "@reach/router";
import { Card } from 'antd';
import axios from 'axios';
import CandidateDetail from './CandidateDetail.js'

const CandidateRouter = (props) => (
  <>
    <Router primary={false}>
      <CandidateCards path="/" />
      <CandidateDetail path="candidatedetails/:candId" />
    </Router>
  </>
)

class CandidateCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: []
    }
    this.server = process.env.SERVER || 'http://localhost:8000'
  }
  componentWillMount() {
    axios.get(`${this.server}/api/candidateInfoPage`)
      .then((info) => {
        this.setState({
          candidates: info.data,
        })
      })
      .catch((err) => {
        console.log('Error fetching candidate card info from API')
      })
  }
  render() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', 'backgroundColor': 'black' }}>
        {this.state.candidates.map((candidate, i) => {
          return (
            <Link to={`candidatedetails/${candidate.lastName.toLowerCase()}`} style={{width:'23%',margin: '10px auto 10px'}} key={i}>
            <Card
              hoverable
              style={{ width: '100%', height: '370px', margin: '10px auto 15px', textAlign: 'center', borderRadius: '3px' }}
            >
              <div style={{ height: '200px' }}>
                <img alt={'test'} style={{ maxHeight: '200px', maxWidth: '100%' }} src={candidate.photoUrl} />
              </div>
              <div className="candidate-card-name" style={{ color: 'black', fontSize: '22px', marginBottom: '10px', marginTop: '20px' }}>{candidate.firstName}<br />{candidate.lastName} </div>
              <div className="candidate-card-party" style={{ fontSize: '18px' }}>{candidate.party}</div>
            </Card>
            </Link>
          )
        })}
      </div>
    )
  }
}
export default CandidateRouter;