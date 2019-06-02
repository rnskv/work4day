import React, { Component } from "react";
import Button from '../../common/Button';

class Post extends Component {
    render() {
        const { post } = this.props;
        return (
            <div className="vacancies-post">
                <img src={ post.group.photo100 } className="vacancies-post__photo"/>
                <div className="vacancies-post__information">
                    <div className="vacancies-post__information_title">
                        { post.title || 'Заголовок который потерялся :/' }
                    </div>
                    <div className="vacancies-post__information_description">
                        { post.description || 'Тут было описание, но его украли' }
                    </div>
                    <div className="vacancies-post__information_text">
                        { post.text || 'Пустой пост, думаю мы уволим модератора' }
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
                    <Button onClick={() => {
                        window.location = 'https://vk.com/'+post.group.screenName+'?w=wall-'+post.group.id+'_'+post.postId
                    }}>Откликнуться</Button>
                </div>
            </div>
        );
    }
}

export default Post;