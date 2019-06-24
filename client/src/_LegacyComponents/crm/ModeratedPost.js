import React, { Component } from 'react';
import { observer } from 'mobx-react';

import CrmStore from '../../stores/Crm';
import FilterStore from '../../stores/Filter';

@observer
class ModeratedPost extends Component {
  updateAction = async e => {
    const whoNeed = this.refs.whoNeed.value;
    const text = this.refs.text.value;
    const categoryId = this.refs.categoryId.value;
    const salary = this.refs.salary.value;
    const description = this.refs.description.value;
    const title = this.refs.title.value;
    const isModerated = 1;
    const id = this.props.post.id;

    CrmStore.vacancies.moderate({
      id,
      whoNeed,
      text,
      categoryId,
      salary,
      description,
      title,
      isModerated,
    });

    e.preventDefault();

    // await fetch('http://localhost:800/vacancies/'+this.props.post.id, {
    //     method: 'PATCH',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         set: {whoNeed, whyNeed, text, categoryId, salary, isModerated, description, title}
    //     })
    // });
  };

  removeAction = id => async e => {
    e.preventDefault();
    await fetch('http://localhost:800/vacancies/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    location.reload();
  };

  render() {
    const { post } = this.props;
    const categories = FilterStore.categories.list;
    return (
      <form>
        <div className="moderated-post">
          <label className="moderated-post__label">
            Текст поста
            <textarea ref="text" className="moderated-post__textarea" defaultValue={post.text} />
          </label>

          <label className="moderated-post__label">
            Кто нужен*
            <textarea ref="whoNeed" placeholder="Администратор" className="moderated-post__input" required />
          </label>

          <label className="moderated-post__label">
            Заголовок*
            <textarea ref="title" placeholder="Выполнить работу" className="moderated-post__input" required />
          </label>

          <label className="moderated-post__label">
            Описание*
            <textarea ref="description" placeholder="Краткое описание" className="moderated-post__input" required />
          </label>

          <label className="moderated-post__label">
            Категория
            <select ref="categoryId">
              {categories.map((category, index) => {
                return (
                  <option key={index} value={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </label>

          <label ref="salary" className="moderated-post__label">
            Ожидаемая зп
            <input placeholder="0" className="moderated-post__input" required />
          </label>

          <label className="moderated-post__label">
            Название группы
            <input placeholder={post.group.name} className="moderated-post__input" />
          </label>

          <label className="moderated-post__label">
            Аватар группы
            <img className="moderated-post__photo" src={post.group.photo100} />
            <input placeholder={post.group.photo100} className="moderated-post__input" />
          </label>

          <label className="moderated-post__label">
            Ожидаемая зп
            <input placeholder="1000$" className="moderated-post__input" />
          </label>

          <button className="moderated-post__button" onClick={this.updateAction}>
            Опубликовать
          </button>
          <button
            className="moderated-post__button moderated-post__button--remove"
            onClick={this.removeAction(post.id)}
          >
            Удалить
          </button>
        </div>
      </form>
    );
  }
}

export default ModeratedPost;
