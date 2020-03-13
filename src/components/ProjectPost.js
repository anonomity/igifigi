import React, {Component} from 'react';
import '../css/project.css';

class ProjectPost extends Component {
    render(){
        return(
            <div className="project" >
            
            
                <p className="ss">{this.props.msg}</p>
                <p className="ss">{this.props.time}</p>
            </div>
        );
    }
}

export default ProjectPost;