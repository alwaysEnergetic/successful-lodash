import React from "react";
import reactDom from "react-dom";

function MyFunction(props) {
    const temp = props.temp;
    console.log(temp)
    if (!temp) { return ""; }
    else if (temp > 100) {
            return <h1> The water would boil. </h1>;
        } else {
            return <h1> The water would not boil. </h1>;
        }
    }


class MyResult extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { temperature: "" };
    }

    handleChange(e) {
        this.setState({ temperature: e.target.value });
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend> Enter temperature: </legend>
                <input value={temperature} onChange={this.handleChange} />

                <MyFunction temp={parseFloat(temperature)} />
            </fieldset>
        );
    }
}

reactDom.render(<MyResult />, document.getElementById("root"));
