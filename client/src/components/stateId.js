import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Card, Col, Row } from "antd";
import Axios from "axios";

const myStyles = {
  height: "50vh",
  overflow: "scroll"
};

const StateId = props => {
  let [usaState, setUsaState] = useState(props.usaState);
  let [inPerson, setInPerson] = useState("In person details here");
  let [absentee, setAbsentee] = useState("Absentee details here");

  useEffect(() => {
    setUsaState(props.usaState)
    Axios
      .get(`http://localhost:8000/api/voterId/${usaState}`)
      .then(response => {
        setInPerson(response.data[0].in_person);
        setAbsentee(response.data[0].absentee);
      })
      .catch(error => {
        console.log(error);
      });
  });

  const renderText = (voter) => {
    return voter.split('\n').map((paragraph, i) => {
      return <p key={i}>{paragraph}</p>;
    });
  }

  return (
    <div style={{ background: "#ECECEC", padding: "30px" }}>
      <h1>{usaState}</h1>
      <Row gutter={16}>
        <Col span={12}>
          <Card title="In-person Voting" bordered={false} style={myStyles}>
            {renderText(inPerson)}
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Absentee Voting" bordered={false} style={myStyles}>
            <p>{renderText(absentee)}</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default StateId;
