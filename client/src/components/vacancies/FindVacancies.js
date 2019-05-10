import React, { Component } from "react";

import '../../styles/Vacancies.css';

class FindVacancies extends Component {
    render() {
        return (
            <div className="vacancies vacancies--find">
                <h1 className="vacancies-title">Поиск работы</h1>
                <div className="vacancies-filter">
                    <h2>Категории</h2>
                    <ul className="vacancies-filter_items">
                        <li className="vacancies-filter_item">Разная работа</li>
                        <li className="vacancies-filter_item vacancies-filter_item--active">IT технологии</li>
                        <li className="vacancies-filter_item">Удаленная работа</li>
                        <li className="vacancies-filter_item">Маркетинг</li>
                    </ul>
                </div>
                <div className="vacancies-posts">
                    <h2>Объявления</h2>
                    <div className="vacancies-post">
                        <img src="https://pp.userapi.com/c850016/v850016836/1126ae/pZgqH1baVo0.jpg?ava=1" className="vacancies-post__photo"/>
                        <div className="vacancies-post__information">
                            <div className="vacancies-post__information_title">
                                Что нужно сделать
                            </div>
                            <div className="vacancies-post__information_description">
                                Краткое описание задания
                            </div>
                            <div className="vacancies-post__information_text">
                                Большое длинное описание задания из вконтакта с длиной, а лучше вот так.
                                ✨В день от 1ОООр, сразу к вам на cчёt!!! 👇 👇⚠Ne kosmetika ne bitkoin ne 6azy👍 👉
                                https://vk.com/photo-171374960_456239769 👇 👇 👇 🔥Net беготни i уrovorov 🔥Pp0gpamma
                                vse delaet za Vas👍 👉Вы otvechaete lyudyam i poluchaete npev0dy🤑
                            </div>
                        </div>
                        <div className="vacancies-post__group">
                            <div className="vacancies-post__group_title">Найдено в группе</div>
                            <img src="https://pp.userapi.com/c850016/v850016836/1126ae/pZgqH1baVo0.jpg?ava=1" className="vacancies-post__group_photo"/>
                            <div className="vacancies-post__group_name">Работа на день</div>
                            <div className="vacancies-post__group_raite">
                                <button className="vacancies-post__group_like"><i className="far fa-thumbs-up"></i></button>
                                <button className="vacancies-post__group_dislike"><i className="far fa-thumbs-down"></i></button>
                            </div>
                            <button className="vacancies-post__group_button">Откликнуться</button>
                        </div>
                    </div>
                    <div className="vacancies-post">
                        <img src="https://pp.userapi.com/c850016/v850016836/1126ae/pZgqH1baVo0.jpg?ava=1" className="vacancies-post__photo"/>
                        <div className="vacancies-post__information">
                            <div className="vacancies-post__information_title">
                                Что нужно сделать
                            </div>
                            <div className="vacancies-post__information_description">
                                Краткое описание задания
                            </div>
                            <div className="vacancies-post__information_text">
                                Большое длинное описание задания из вконтакта с длиной, а лучше вот так.
                                ✨В день от 1ОООр, сразу к вам на cчёt!!! 👇 👇⚠Ne kosmetika ne bitkoin ne 6azy👍 👉
                                https://vk.com/photo-171374960_456239769 👇 👇 👇 🔥Net беготни i уrovorov 🔥Pp0gpamma
                                vse delaet za Vas👍 👉Вы otvechaete lyudyam i poluchaete npev0dy🤑
                            </div>
                        </div>
                        <div className="vacancies-post__group">
                            <div className="vacancies-post__group_title">Найдено в группе</div>
                            <img src="https://pp.userapi.com/c850016/v850016836/1126ae/pZgqH1baVo0.jpg?ava=1" className="vacancies-post__group_photo"/>
                            <div className="vacancies-post__group_name">Работа на день</div>
                            <div className="vacancies-post__group_raite">
                                <button className="vacancies-post__group_like"><i className="far fa-thumbs-up"></i></button>
                                <button className="vacancies-post__group_dislike"><i className="far fa-thumbs-down"></i></button>
                            </div>
                            <button className="vacancies-post__group_button">Откликнуться</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FindVacancies;




