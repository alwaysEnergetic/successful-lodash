import React from "react";
import reactDom from "react-dom";

function CompareTemp(props) {
  const temp = props.celsi; 
  console.log(temp);
  if (temp == '') return null;
  else if(temp > 100) {
    return <h1> the water would boil. </h1>
  } else {
    return <h1> the water would not boil. </h1>
  }
}
class MyFinal extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: '' };
  }
  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }
  render() {
    const temperature = this.state.temperature;
    return(
      <fieldset>
        <legend> input the temperature! </legend>
        <input
          value = { temperature }
          onChange = { this.handleChange } 
          />
        <CompareTemp celsi = { temperature } />

      </fieldset>
    ) 
  }

}


reactDom.render(<MyFinal />, document.getElementById("root"));
