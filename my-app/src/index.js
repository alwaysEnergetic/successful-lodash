import React from "react";
import ReactDOM from "react-dom";

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "ford",
            model: "mustang",
            year: 1923,
            color: "red",
        };
    }
    changeColor = () => {
      if(this.state.color === 'red'){
        this.setState({ color: "blue" }); 
      } else {
        this.setState({ color: "red" }); 
      }
    };

    render() {
        console.log(this.props);
        return (
            <div>
                <h2>I am a {this.state.color}!</h2>
                <p> I am a student </p>
                <button type="button" onClick={ this.changeColor }> Change Color</button>
            </div>
        );
    }
}

ReactDOM.render(<Car />, document.getElementById("root"));
