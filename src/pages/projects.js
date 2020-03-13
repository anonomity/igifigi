import React, {Component} from 'react';

class projects extends Component {
    render(){
        return(
            <div className="project">
            
                <p className="blogText">{this.props.msg}</p>
                <p className="blogTime">{this.props.time}</p>
            </div>
        );
    }
}

export default projects;