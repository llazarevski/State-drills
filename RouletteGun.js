import React from 'react';

class RouletteGun extends React.Component{
    state = {
        chamber: null,
        spinningTheChamber: false,
      };
    
render (){
    return (
        <div>
            <p></p>
            <button>
              Pull the trigger!
            </button>
        </div>
    )
}
}

export default RouletteGun