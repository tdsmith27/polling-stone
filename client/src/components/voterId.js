import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Select } from "antd";
import StateId from "./stateId";
import "antd/dist/antd.css";
// require('dotenv').config()


const VoterId = () => {
  const Option = Select.Option;

  let [states, setStates] = useState([]);
  let [choice, setChoice] = useState("Alabama");

  useEffect(() => {
    const server = 'ec2-3-16-229-206.us-east-2.compute.amazonaws.com';
    const api = `http://${server}/api/voter`;
    Axios.get(api)
      .then(results => {
        let sorted = results.data.sort();
        setStates(sorted);
      })
      .catch(err => console.log("error", err));
  }, []);

  function handleChange(value) {
    setChoice(value);
  }

  return (
    <>
      <Select
        size={"large"}
        defaultValue={choice}
        onChange={handleChange}
        style={{ width: 200 }}>
        {states.map((ele, i) => {
          return <Option key={ele}>{ele}</Option>;
        })}
      </Select>
      <StateId usaState={choice} />
    </>
  );
};

export default VoterId;
