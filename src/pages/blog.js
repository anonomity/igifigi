import React, {Component} from 'react';
import BlogPost from "../components/BlogPost";

class blog extends Component {
    render(){
        return(
            <div>
                <h1>blog</h1>
                <BlogPost name="igi" msg="hi" time="19:00 24.39.2029" />
                <BlogPost name="Jackie" msg="plz no c++" time="06:00 30.02.2020"/>
                <BlogPost name="Magda" msg="Welcome to Catty Corner Clubhouse" />
                <BlogPost name="Janka" msg="akjsdfhskldjfkaljdgnklajdngklsjdgfjkdfnjskndfsnfgnsdkfjgs" time="16:232323123 24.33.2020"/>
                <BlogPost name="Julia" msg="i like billie eyelash" time="16:00 24.33.2020"/>
        
                
            </div>
        );
    }
}

export default blog;