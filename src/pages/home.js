import React, {Component} from 'react';

import '../css/home.css';

class home extends Component {
    // function handleClick(){
    //     console.log("test");
    // }
    render(){
   
        return(
            <div className="home">
                <h1>home</h1>
                {/* <button onClick={()=>{this.handleClick}}>click me!</button> */}
            </div>
        );
    }
}

export default home;