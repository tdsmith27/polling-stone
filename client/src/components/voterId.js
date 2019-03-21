import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { Select } from 'antd';
import StateId from './stateId'

import 'antd/dist/antd.css';

const VoterId = () => {
  const Option = Select.Option;

  let [states, setStates] = useState([]);
  let [choice, setChoice] = useState("Alabama");
  const children = [];

  useEffect(() => {
    const api = 'http://localhost:8000/api/voter';
    Axios
      .get(api)
      .then((results) => {
        let sorted = results.data.sort()
        setStates(sorted);
      })
     .catch((err) => console.log('error', err))
  }, [])


  for (let i = 0; i < states.length; i++) {
    children.push(<Option key={states[i]}>{states[i]}</Option>);
  }
  
  function handleChange(value) {
    setChoice(value)

  }

  return (
    <>
      <Select
        size={'large'}
        defaultValue={choice}
        onChange={handleChange}
        style={{ width: 200 }}
      >
        {children}
      </Select>
      <StateId usaState={choice}/>
    </>
  )
}

export default VoterId;