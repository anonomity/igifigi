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
    saveBlog = () => {
        this.setState({
            name: "Ignacy",
            msg: "GHGHhg",
            time: "07:82 54.78.9999",
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
                <input className="inputs"></input>
                <input className="inputs"></input>
                <input className="inputs"></input>
                <button onClick={this.saveBlog} className="inputs">SAVE</button>
            </div>
                
            </div>
        );
    }
}

export default blog;