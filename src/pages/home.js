import React, {Component} from 'react';

import '../css/home.css';

class home extends Component {
    // function handleClick(){
    //     console.log("test");
    // }
    state = {
        isPressed: false
    }
    showTitle = () => {
        this.setState({
            isPressed: true
        })
    }
    
    render(){
        let X = null;
        if(this.state.isPressed){
            X = <h1 style={{fontFamily: "Titillium Web"}}>WELCOME!</h1>
        }
        return(
            <div className="home">
                {X}
                <h1>home</h1>
                <button onClick={this.showTitle}>CLICK ME! (please) NOW!!!</button>
                {/* <button onClick={()=>{this.handleClick}}>click me!</button> */}
            </div>
        );
    }
}

export default home;