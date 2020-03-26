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
        name: "Ig",
        msg: "dsafasdf",
        time: "asdfa"
      }
    ],
    isRendered: false
  };
  resetBlog = () => {
    this.setState({
      name: "Type your name",
      msg: "Type message",
      time: "Type the current time (HH:MM DD.MM.YYYY)"
    });
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
    let Bposts = null;
    if (this.state.isRendered) {
      Bposts = this.state.posting.map(post => {
        return <BlogPost name={post.name} msg={post.msg} time={post.time} />;
      });
    }

    return (
      <div style={{ marginTop: "100px" }}>
        {Bposts}
        <button onClick={this.renderIt} style={{marginLeft: "auto", marginRight:"auto", display: "block"}}>CLICK ME</button>
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
          <button onClick={this.resetBlog} className="inputs">
            RESET
          </button>
        </div>
      </div>
    );
  }
}

export default blog;
