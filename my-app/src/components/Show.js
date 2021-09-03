import React, { Component } from 'react';
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';


const Show = (props) => {
  const history = useHistory();
  console.log(props);
  const handleClick = () =>{ 
    let path = `/home`; 
    history.push(path);
  }

  return (
    <div>
      <h1> welcome {props.name} </h1>
      <button type="button" onClick={handleClick}>
        Go to Home
      </button>
    </div>
  );
}

  const mapStateToProps = (state) => {
    return {
      name: state.name.name
    };
  }
export default connect(mapStateToProps) (Show);