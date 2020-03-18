import React, {Component} from 'react';
import BlogPost from "../components/BlogPost";
import '../css/blogPost.css';
import EmptyBlogPost from "../components/EmptyBlogPost";

class blog extends Component {
    state = {
        name: "Type your name",
        msg: "Type message",
        time: "Type the current time (HH:MM DD.MM.YYYY)",
    }
    resetBlog = () => {
        this.setState({
            name: "Type your name",
            msg: "Type message",
            time: "Type the current time (HH:MM DD.MM.YYYY)",
        })
    }
    changeNameState = (event) => {
        this.setState({
            name : event.target.value
        })
    }
    changeMsgState = (event) => {
        this.setState({
            msg : event.target.value
        })  
    }
    changeTimeState = (event) => {
        this.setState({
            time : event.target.value
        })  
    }

    render(){
        return(
            <div>
                <h1>blog</h1>
                <BlogPost name="Igi" msg="Hello!" time="19:00 06.03.2007" />
                <BlogPost name="Jackie" msg="plz no c++
                :-)" time="06:00 29.02.2020"/>
                <BlogPost name="Magda" msg="Welcome to Catty Corner Clubhouse" />
                <BlogPost name="Janka" msg="akjsdfhskldjfkaljdgnklajdngklsjdgfjkdfnjskndfs
                nfgnsdkfjgsakjsdfhskldjfkaljdgnklajdngklsjdgfjkdfnjskndfsnfgnsdkfjgsakjsd
                fhskldjfkaljdgnklajdngklsjdgfjkdfnjskndfsnfgnsdkfjgsakjsdfhskldjfkaljdgnkl
                ajdngklsjdgfjkdfnjskndajdngklsjdgfjkdfnjskndfsnfgnsd
                kfjgsakjsdfhskldjfkaljdgnklajdngklsjdgfjkdfnjskndfsnfgnsdkfjgsakjsdfhskldjf
                kaljdgnklajdngklsjdgffsnfgnsdkfjgsakjsdfhskldjfkaljdgnklajdngklsjdgfjkdfn
                jskndfsnfgnsdkfjgsakjsdfhskldjfkaljdgnklajdngklsjdgfjkdfnjskndfsnfgnsdkfjg
                sakjsdfhskldjfkaljdgnklajdngklsjdgfjkdfnjskndfsnfgnsdkfjgsakjsdfhskldjfkal
                jdgnklajdngklsjdgfjkdfnjskndfsnfgnsdkfjgsakjsdfhskldjfkaljdgnklajdngklsjdgf
                jkdfnjskndfsnfgnsdkfjgsakjsdfhskldjfkaljdgnkljkdfnjskndfsnfgnsdkfjgsakjsdfhs
                fjkdfnjskndfsnfgnsdkfjgsakjsdfhskldjfkaljdgnklajdngklsjdgfjkdfnjskndfsnfgnsd
                kfjgsakjsdfhskldjfkaljdgnklajdngklsjdgfjkdfnjskndfsnfgnsdkfjgsakjsdfhskldjfkalj
                dgnklajdngklsjdgfjkdfnjskndfsnfgnsdkfjgsakjsdfhskldjfkaljdgnklajdngklsjdgfjkd
                fnjskndfsnfgnsdkfjgsakjsdfhskldjfkaljdgnklajdngklsjdgfjkdfnjskndfsnfgnsdkfjgsa
                kjsdfhskldjfkaljdgnklajdngklsjdgfjkdfnjskndfsnfgnsdkfjgsakjsdfhskldjfkaljdgnkl
                ajdngklsjdgfjkdfnjskndfsnfgnsdkfjgsakjsdfhskldjfkaljdgnklajdngklsjdgfjkdfnjsknd
                fsnfgnsdkfjgsakjsdfhskldjfkaljdgnklajdngklsjdgfjkdfnjskndfsnfgnsdkfjgsakjsdfhskl
                djfkaljdgnklajdngklsjdgfjkdfnjskndfsnfgnsdkfjgsakjsdfhskldjfkaljdgnklajdngklsjdg
                fjkdfnjskndfsnfgnsdkfjgsakjsdfhskldjfkaljdgnklajdn
                gklsjdgfjkdfnjskndfsnfgnsdkfjgsakjsdfhskldjfkaljdgnklajdngklsjdgfjkdfnjsk
                ndfsnfgnsdkfjgsakjsdfhskldjfkaljdgnklajdngklsjdgfjkdfnjskndfsnfgnsdkfjgs" time="16:232323123 24.33.2020"/>
                <BlogPost name="Julia" msg="i like billie eyelash" time="16:00 24.33.2020"/>
                <BlogPost name={this.state.name} msg={this.state.msg} time={this.state.time}/>
                <div className="post">
                <input className="inputs" type="sumbit" value = {this.state.name} onChange = {this.changeNameState}></input>
                <input className="inputs" type="sumbit" value = {this.state.msg} onChange = {this.changeMsgState}></input>
                <input className="inputs" type="sumbit" value = {this.state.time} onChange = {this.changeTimeState}></input>
                <button onClick={this.resetBlog} className="inputs">RESET</button>
            </div>
                
            </div>
        );
    }
}

export default blog;