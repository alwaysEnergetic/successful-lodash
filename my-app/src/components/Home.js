import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions';

const Home = (props) => {
    const history = useHistory();
    const [inputValue, setInputValue] = useState('');

    const handleClick = () => {
      console.log(inputValue);
        props.handleSubmitValue(inputValue);
        let path = `/show`;
        history.push(path);
    };

    function handleChange(event) {
      setInputValue(event.target.value);
    }
    return (
        <div>
            <h1> Please input Name!</h1>
            <input type="text" value = {inputValue} onChange = {handleChange} /> 
            <button type="button" onClick={handleClick}>
                Go to show
            </button>
        </div>
    );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    name: state.name.name
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmitValue: (name) => { dispatch(actions.submitValue(name))},
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (Home);
