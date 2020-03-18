import React, {Component} from 'react';
import '../css/projects.css';

class ProjectPost extends Component {
    render(){
        return(
            <div className="projectMain" >
            
            
                <h2 className="projectName">{this.props.name}</h2>
                <a href = {this.props.link} className="projectLink">{this.props.linkName}</a>
                <img src={this.props.image} className="projectImg"></img>
                
            </div>
        );
    }
}

export default ProjectPost;