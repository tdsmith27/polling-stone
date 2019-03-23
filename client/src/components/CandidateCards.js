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
      <div style={candidateCardDivStyle}>
        {this.state.candidates.map((candidate, i) => {
          return (
            <Link to={`candidatedetails/${candidate.lastName.toLowerCase()}`} style={linkStyle} key={i}>
            <Card
              hoverable
              style={cardStyle}
            >
              <div style={imageDivStyle}>
                <img alt={'test'} style={imageStyle} src={candidate.photoUrl} />
              </div>
              <div className="candidate-card-name" style={candidateCardNameStyle}>{candidate.firstName}<br />{candidate.lastName} </div>
              <div className="candidate-card-party" style={candidateCardPartyStyle}>{candidate.party}</div>
            </Card>
            </Link>
          )
        })}
      </div>
    )
  }
}

const candidateCardDivStyle = {
  display: 'flex', 
  flexWrap: 'wrap', 
  width: '100%', 
  backgroundColor: 'black' 
};

const linkStyle = {
  width:'23%',
  margin: '10px auto 10px'
};

const cardStyle = {
  width: '100%', 
  height: '370px', 
  margin: '10px auto 15px', 
  textAlign: 'center', 
  borderRadius: '3px' 
};

const imageDivStyle = {
  height: '200px'
};

const imageStyle = {
  maxHeight: '200px', 
  maxWidth: '100%'
};

const candidateCardNameStyle = {
  color: 'black', 
  fontSize: '22px', 
  marginBottom: '10px', 
  marginTop: '20px' 
};

const candidateCardPartyStyle = {
  fontSize: '18px'
};

export default CandidateRouter;