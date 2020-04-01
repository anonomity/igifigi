import React, { Component } from "react";
import BlogPost from "../components/BlogPost";
import "../css/blogPost.css";
import EmptyBlogPost from "../components/EmptyBlogPost";

class blog extends Component {
  state = {
    name: "Type your name",
    msg: "Type message",
    time: "Type the current time (HH:MM DD.MM.YYYY)",
    posting: [
      {
        id: 1,
        name: "Ig",
        msg: "dsafasdf",
        time: "asdfa"
      },
      {
        id: 2,
        name: "Jackie",
        msg: "plz no C#",
        time: "10/56*89-98"
      },
      {
        id: 3,
        name: "Janka",
        msg: "dnmskafhwsejkfhkawsehfbasehnfjksehfjSDH;fASWEdhqwuirhWUIOHuig new, PREETY HORSE!",
        time: "14:09 12.09.2020"
      }
    ],
    isRendered: false
  };
  
  postBlog = () => {
    const whatever = [
      ...this.state.posting
    ];
    whatever.push({
      name: this.state.name,
      msg: this.state.msg,
      time: this.state.time
    })
    this.setState({
      posting: whatever
    })
  };
  changeNameState = event => {
    this.setState({
      name: event.target.value
    });

  };
  changeMsgState = event => {
    this.setState({
      msg: event.target.value
    });
  };
  changeTimeState = event => {
    this.setState({
      time: event.target.value
    });
  };
  renderIt = () => {
    this.setState({
      isRendered: true
    });
  };
  render() {
    
    let Bposts = this.state.posting.map(post => {
      return <BlogPost name={post.name} msg={post.msg} time={post.time} />;
    });
    

    return (
      <div style={{ marginTop: "100px" }}>
        {Bposts}
        {/* <button onClick={this.renderIt} style={{marginLeft: "auto", marginRight:"auto", display: "block"}}>CLICK ME</button> */}
        <div className="post">
          
          
          <input
            className="inputs"
            type="sumbit"
            value={this.state.name}
            onChange={this.changeNameState}
          ></input>
          <input
            className="inputs"
            type="sumbit"
            value={this.state.msg}
            onChange={this.changeMsgState}
          ></input>
          <input
            className="inputs"
            type="sumbit"
            value={this.state.time}
            onChange={this.changeTimeState}
          ></input>
          <button onClick={this.postBlog} className="inputs">
            POST
          </button>
        </div>
      </div>
    );
  }
}

export default blog;
