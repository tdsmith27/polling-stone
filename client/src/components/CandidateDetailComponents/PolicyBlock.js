import React from 'react';
import PolicyCard from './PolicyCard.js';

const PolicyBlock = (props) => {
  const { abortion, lgbtAdoption, gunControl, equalPay, climateChange, gayMarriage, borderWall, plannedParrenthood } = props.policies;
  const policies = [abortion, lgbtAdoption, gunControl, equalPay, climateChange, gayMarriage, borderWall, plannedParrenthood];
  const policyNames = ['Abortion', 'LGBT Adoption', 'Gun Control', 'Equal Pay', 'Climate Change', 'Gay Marriage', 'Border Wall', 'Planned Parenthood'];

  const divStyle = {
    display: 'inline-flex',
    flexWrap: 'wrap'
  }
  return (
    <div style={divStyle}>
      {policies.map((el, ind) => <PolicyCard key={ind} title={policyNames[ind]} policy={el} />)}
    </div>
  )
};

export default PolicyBlock;