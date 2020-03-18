import React, {Component} from 'react';
import ProjectPost from "../components/ProjectPost";
import imgProject1 from "../images/WebProject.png";

class projects extends Component {
    render(){
        return(
            <div className="project">
                <h1>PROJECT</h1>
                <ProjectPost name= "Web React App (for free)" image={imgProject1} link="https://igifigi-a8959.firebaseapp.com/" linkName = "FREE HUGS!"/>
                
                <p className="blogTime">{this.props.time}</p>
                <ProjectPost/>
            </div>
        );
    }
}

export default projects;