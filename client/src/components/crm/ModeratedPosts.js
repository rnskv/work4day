import React, { Component } from "react";
import ModeratedPost from './ModeratedPost';

class ModeratedPosts extends Component {
    render() {
        const { posts } = this.props;
        return (
            <React.Fragment>
                <div className="moderated-posts">
                    <h2>Модерация</h2>
                {
                    posts.map((data, index) => {
                        return (<ModeratedPost key={index} post={data}/>)
                    })
                }

                </div>
            </React.Fragment>
        );
    }
}

export default ModeratedPosts;