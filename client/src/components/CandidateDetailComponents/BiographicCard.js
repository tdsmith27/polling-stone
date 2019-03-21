import React, { Component } from 'react';
import { Card } from 'antd';
import Photo from './CandidatePhoto.js'

class BioCard extends Component {
  constructor(props) {
    super(props)
    // this.bioCardRef = React.createRef(this.containerNode);
    this.state = {
      height: 0,
      width: 0,
      bioCardRef: React.createRef(this.containerNode)
    }
    this.pStyle = {
      margin: 0
    };
    this.cardStyle = {
      width:"50%", 
      height: "600px", 
      display:"inline-block"
    };
  }
  destructure() {
   const { firstname, nickname, lastname, birthday, twitter, campaign, bio } = this.props.candidate;
   this.setState({
     firstname: firstname,
     nickname: nickname,
     lastname: lastname,
     birthday: birthday,
     twitter: twitter,
     campaign: campaign,
     bio: bio
   })
  }
  //This function, along with with the ref to which it points,
  //were the bulk of an attempt to get the picture size automatically
  //based on the size of the card on this page. 
  measure() {
    const {clientWidth, clientHeight} = this.state.bioCardRef.current.container;
    this.setState({
      width: clientWidth,
      height: clientHeight,
    })
  }
  componentDidMount() {
    this.destructure();
    this.measure();
    console.log(this.state.bioCardRef.current.container.clientHeight)
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.bioCardRef !== this.state.bioCardRef) {
    }
  }
  render() {
    return(
      <>
        <Card 
        title={this.props.details ? `${this.props.details.firstName} ${this.props.details.lastName}`: null}  
        style={this.cardStyle} 
        ref={this.state.bioCardRef}
        >
          <p>{this.props.bio ? this.props.bio.bio : null}</p>
          <p>{this.props.details ? this.props.details.party : null}</p>
          <p style={this.pStyle}>{this.props.details ? this.props.details.birthDate : null}</p>
          <p style={this.pStyle}>Twitter <a href={this.props.details ? `http://twitter.com/${this.props.details.twitter}` : null}>@{this.props.details ? this.props.details.twitter: null}</a></p>
          <p style={this.pStyle}><a href={this.props.details ? `${this.props.details.campaignLink}` : null}>{this.props.details ? this.props.details.campaignLink: null}</a></p>
        </Card>
        <Photo 
        image={this.props.details ? this.props.details.photoUrl : null} 
        maxHeight={this.state.height} 
        maxWidth={this.state.width}/>
      </>
    )
  }
};

export default BioCard;