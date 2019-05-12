import React, { Component } from "react";

import Post from './Post';

import '../../../styles/Vacancies.css';

class Posts extends Component {
    render() {
        const { vacancies, next } = this.props;
        return (
            <div className="vacancies-posts">
                <h2>Объявления</h2>
                {
                    vacancies.map(post => {
                        return  <Post post={post} />
                    })
                }
                <button className="vacancies-button" onClick={next}>Показать следующие</button>
            </div>
        );
    }
}

export default Posts;