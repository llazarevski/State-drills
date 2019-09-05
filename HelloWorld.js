import React from 'react';

class HelloWorld extends React.Component{
  constructor(props) {
    super(props)
    this.state = { 
      who: 'world' 
    }
  };

  handleButtonClick = () => {
    console.log(this.state.who)
    this.setState({ who: this.state.who})
  }
    render () {
      return (
        <div>
            <button onClick = {() => this.setState({ who: 'world' })}>
              World
            </button>
            <button onClick={() => this.setState({ who: 'friend' })}>
              Friend
            </button>
            <button onClick={() => this.setState({ who: 'react' })}>
              React
            </button>
            <p> Hello, {this.state.who}</p>
        </div>   
      )};

}

export default HelloWorld