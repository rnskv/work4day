import React, { Component } from "react";

class Post extends Component {
    render() {
        const { post } = this.props;
        return (
            <div className="vacancies-post">
                <img src={ post.group.photo100 } className="vacancies-post__photo"/>
                <div className="vacancies-post__information">
                    <div className="vacancies-post__information_title">
                        { post.whatNeed }
                    </div>
                    <div className="vacancies-post__information_description">
                        { post.description }
                    </div>
                    <div className="vacancies-post__information_text">
                        { post.text }
                    </div>
                </div>
                <div className="vacancies-post__group">
                    <div className="vacancies-post__group_title">Найдено в группе</div>
                    <img src={ post.group.photo100 } className="vacancies-post__group_photo"/>
                    <div className="vacancies-post__group_name">{ post.group.name }</div>
                    <div className="vacancies-post__group_raite">
                        <button className="vacancies-post__group_like">
                            <i className="far fa-thumbs-up"></i>
                        </button>
                        <button className="vacancies-post__group_dislike">
                            <i className="far fa-thumbs-down"></i>
                        </button>
                    </div>
                    <button className="vacancies-post__group_button">Откликнуться</button>
                </div>
            </div>
        );
    }
}

export default Post;