import React, { Component } from "react";

class Vacancy extends Component {
    state = {
        isShowFullText: false
    };

    toggleFullText = () => {
        const { isShowFullText } = this.state;

        this.setState({
            isShowFullText: !isShowFullText
        })
    };

    render() {
        const { vacancy } = this.props;
        const { isShowFullText } = this.state;
        const isLongText = vacancy.text.length > 100;

        const slicesText = isLongText ? vacancy.text.slice(0, 99) + '...' : vacancy.text;

        return (
            <div className="vacancies__vacancy">
                <div className="vacancies__group">
                    <img className="vacancies__img" src={vacancy.group.photo100} />
                    <div className="column">
                        <div className="vacancies__group_name">{ vacancy.group.name }</div>
                        <div className="vacancies__date">{ vacancy.date }</div>
                    </div>
                    <a href={'https://vk.com/'+vacancy.group.screenName+'?w=wall-'+vacancy.group.id+'_'+vacancy.postId}>Перейти к посту</a>
                </div>
                <div className="vacancies__text">
                    { isShowFullText ? vacancy.text : slicesText }
                    { isLongText
                        ? <button onClick={this.toggleFullText}>
                            { !isShowFullText ? 'читать текст' : 'закрыть текст'}
                        </button>
                        : null }
                </div>
            </div>
        );
    }
}

export default Vacancy;




