import React from 'react';
import AntdIcon from '@ant-design/icons-react';
import { Card } from 'antd';
import axios from 'axios';


const { Meta } = Card;

class CandidateCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: []
    }
  }
  componentWillMount() {
    axios.get('http://localhost:8000/api/candidateInfoPage')
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
        {this.state.candidates.map((candidate) => {
          return (
            <Card
              hoverable
              style={{ width: '23%', height: '370px', margin: '10px auto 15px', textAlign: 'center', borderRadius: '3px' }}
            >
              <div style={{ height: '200px' }}>
                <img alt={'test'} style={{ margin: '10px auto 10px', maxHeight: '200px', maxWidth: '100%' }} src={candidate.photoUrl} />
              </div>
              <div className="candidate-card-name" style={{ color: 'black', fontSize: '22px', marginBottom: '10px', marginTop: '20px' }}>{candidate.firstName}<br />{candidate.lastName} </div>
              <div className="candidate-card-party" style={{ fontSize: '18px' }}>{candidate.party}</div>
            </Card>
          )
        })}
      </div>
    )
  }
}
export default CandidateCards;