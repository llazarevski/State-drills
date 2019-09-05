import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            count : 0,
        };
        console.log('constructor')
      }
      componentDidMount() {
        this.interval = setInterval(() => {
            console.log('setInterval')
            this.setState(
                { count: this.state.count + 1 }
            , 1000)
        })
        }
      componentWillUnmount() {
        clearInterval(this.interval)
      }
    
      render() {
        console.log('render')
        if (count = 8) {
            return (
                <div>
                  <p> BOOM!!!!</p>
                </div> 
             )} else if (count % 2 == 0){
        return (
          <div>
            <p> Tick</p>
          </div>
        )} else {
            return (
            <div>
            <p> Tick</p>
          </div> 
            )
        } 
      }


}

export default Bomb