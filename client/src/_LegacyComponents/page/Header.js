import React, { Component } from "react";

import '../../styles/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-left">
                    <div className="header-logo">
                        <div className="header-logo--first_letter">Work</div>
                        <div className="header-logo--second_letter">for</div>
                        <div className="header-logo--third_letter">Day</div>
                    </div>
                    <div className="header-about">
                        <a href="#">О нас</a>
                    </div>
                </div>

                <div className="header-right">
                    <button className="header-button">Добавить подработку</button>
                    <button className="header-button">Войти</button>
                </div>

                <div className="header-description">
                    <h1>Найдите подработку по вашему профилю</h1>
                    <h2>Это проще чем кажется</h2>
                </div>

                <div className="header-stats">
                    <div className="header-stat">
                        <div className="header-stat__top">
                            2923 человека
                        </div>
                        <div className="header-stat__bottom">
                            ищут исполнителя
                        </div>
                    </div>

                    <div className="header-stat">
                        <div className="header-stat__top">
                            356 заказов
                        </div>
                        <div className="header-stat__bottom">
                            за сегодня
                        </div>
                    </div>

                    <div className="header-stat">
                        <div className="header-stat__top">
                            12 групп
                        </div>
                        <div className="header-stat__bottom">
                            в вашем городе
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;