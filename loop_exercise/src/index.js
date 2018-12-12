import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';

const colorArray = [
  "red",
  "lightblue",
  "pink",
  "yellow",
  "brown",
  "magenta"
];

class HelloWorld extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: "ROSYBROWN"
    };
  }

  componentDidMount() {
    let colorPos = 0;
    setInterval(() => {
      if(colorArray.length - 1 > colorPos) {
        this.setState({
          color : colorArray[colorPos]
        });
        colorPos++;
      } else {
        this.setState({
          color : colorArray[colorPos]
        });
        colorPos = 0;
      }
    }, 1000)
  }

  changeColor(e) {
    this.setState({
      color: e.target.value
    })
  }

  render() {
    // console.log(this.state);
    const stylesObj = {
      background: this.state.color
    };

    return (
      <div id="hello-world" style={stylesObj} className="container">
        <div className="box">
          <h2>Hello, World!</h2>
          <p>Set a background colour <small>(Name or #HEX value)</small></p>
          <p>Uncomment the componentDidMount() method to make the colours auto cycle.</p>
          <br />
          <input value={this.state.color} onChange={this.changeColor.bind(this)} />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    )
  }
}



