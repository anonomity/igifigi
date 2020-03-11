import React, {Component} from 'react';
import '../css/blogPost.css';
import PersonIcon from '@material-ui/icons/Person';
class BlogPost extends Component {
    render(){
        return(
            <div className="post" >
            <div className="aviBox">
            <PersonIcon/>
                <h1  className="blogName"><strong>{this.props.name}</strong></h1>
            </div>
            
                <p className="blogText">{this.props.msg}</p>
                <p className="blogText">{this.props.time}</p>
            </div>
        );
    }
}

export default BlogPost;