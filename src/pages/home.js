import React, {Component} from 'react';

import '../css/home.css';
import cat1 from '../images/cat1.jpg'
import cat2 from '../images/cat2.jpg'
import cat3 from '../images/cat3.jpg'

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
        let Z = null, C = null, D = null;
        if(this.state.isPressed){
            X = <h1 style={{fontFamily: "Titillium Web"}}>WELCOME!</h1>
            Z = <img src = {cat1} alt = "cute cat :)" style = {{width: "400px"}}/>
            C = <img src = {cat2} alt = "cute cat :)" style = {{width: "400px"}}/>
            D = <img src = {cat3} alt = "cute cat :)" style = {{width: "400px"}}/>

        }
        return(
            <div className="home">
                {X} {Z} {C} {D}
                <h1>home</h1>
                <button onClick={this.showTitle}>CLICK ME! (please) NOW!!!</button>
                
                
            </div>
        );
    }
}

export default home;