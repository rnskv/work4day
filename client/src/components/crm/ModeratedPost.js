import React, { Component } from "react";
import categories from '../../configs/categories';

class ModeratedPost extends Component {
    updateAction = async (e) => {
        const whoNeed = this.refs.whoNeed.value;
        const whyNeed = this.refs.whyNeed.value;
        const text = this.refs.text.value;
        const categoryId = this.refs.categoryId.value;
        const salary = this.refs.salary.value;
        const description = this.refs.description.value;
        const title = this.refs.title.value;
        const isModerated = true;

        await fetch('http://localhost:800/vacancies/'+this.props.post.id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                set: {whoNeed, whyNeed, text, categoryId, salary, isModerated, description, title}
            })
        });
    };

    render() {
        const { post } = this.props;
        return (
            <form>
                <div className="moderated-post">
                    <label className="moderated-post__label">
                        Текст поста
                        <textarea ref="text" className="moderated-post__textarea" defaultValue={post.text} />
                    </label>

                    <label className="moderated-post__label">
                        Кто нужен*
                        <textarea ref="whoNeed" placeholder="Администратор" className="moderated-post__input" required/>
                    </label>

                    <label className="moderated-post__label">
                        Для чего нужен*
                        <textarea ref="whyNeed" placeholder="Выполнять свою работу" className="moderated-post__input" required/>
                    </label>

                    <label className="moderated-post__label">
                        Заголовок*
                        <textarea ref="title" placeholder="Выполнить работу" className="moderated-post__input" required/>
                    </label>

                    <label className="moderated-post__label">
                        Описание*
                        <textarea ref="description" placeholder="Краткое описание" className="moderated-post__input" required/>
                    </label>

                    <label className="moderated-post__label">
                        Категория
                        <select ref="categoryId">
                            <option value={0}>IT</option>
                            <option value={1}>Разное</option>
                            <option value={2}>Дизайн</option>
                            <option value={3}>Хуй проссыш чо</option>

                            {
                                Object.keys(categories).map((categoryId, index) => {
                                    return <option value={categoryId}>{ categories[categoryId] }</option>
                                })
                            }
                        </select>
                    </label>

                    <label ref="salary" className="moderated-post__label">
                        Ожидаемая зп
                        <input placeholder="0" className="moderated-post__input" required/>
                    </label>

                    <label className="moderated-post__label">
                        Название группы
                        <input placeholder={post.group.name} className="moderated-post__input"/>
                    </label>

                    <label className="moderated-post__label">
                        Аватар группы
                        <img className="moderated-post__photo" src={post.group.photo100}/>
                        <input placeholder={post.group.photo100} className="moderated-post__input"/>
                    </label>

                    <label className="moderated-post__label">
                        Ожидаемая зп
                        <input placeholder="1000$" className="moderated-post__input"/>
                    </label>


                    <button className="moderated-post__button" onClick={this.updateAction}>Опубликовать</button>
                    <button className="moderated-post__button moderated-post__button--remove">Удалить</button>
                </div>
            </form>
        );
    }
}

export default ModeratedPost;