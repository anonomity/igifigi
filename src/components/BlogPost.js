import React, {Component} from 'react';
import '../css/blogPost.css';
//import PersonIcon from '@material-ui/icons/Person';
//import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
class BlogPost extends Component {
    render(){
        return(
            <div className="post" >
            <div className="aviBox">
            <PersonOutlinedIcon style={{ fontSize: 70 }} />
                <h1  className="blogName"><strong>{this.props.name}</strong></h1>
            </div>
            
                <p className="blogText">{this.props.msg}</p>
                <p className="blogTime">{this.props.time}</p>
            </div>
        );
    }
}

export default BlogPost;