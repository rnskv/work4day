import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Select.css';
import Type from 'prop-types';

class Select extends Component {
    static propTypes = {
        id: Type.number,
        value: Type.oneOfType([Type.string, Type.number]),
        text: Type.oneOfType([Type.string, Type.number]),
        defaultOption: Type.object,
        onChange: Type.func
    };

    constructor(props) {
        super();
        this.state = {
            value: props.value || '',
            text: props.text || '',
            opened: false
        };
    }

    componentWillMount() {
        if (!this.props.text) {
            //РЕФАКТОР
            const option = this.props.options.filter(option => option.value === this.props.value)[0];
            console.log(option);
            this.selectOption(option)
        }
    }
    getValue() {
        return this.state.value
    }

    toggleOpened() {
        const newOpenedState = !this.state.opened;
        this.setState({
            opened: newOpenedState
        })
    }

    selectOption(option) {
        console.log('select', option, this)
        this.setState({
            text: option.text,
            value: option.value
        })
    }

    handleButtonClick = () => {
        this.toggleOpened();
    };

    handleValueChange = () => {
        this.props.onChange(this.getValue())
    };

    handleOptionClick = (option) => () => {
        this.selectOption(option);
        this.handleValueChange();
        this.toggleOpened();
    };

    renderOptionsList() {
        return this.props.options.map(option => {
            return (
                <div
                    className="option"
                    key={option.value}
                    onClick={ this.handleOptionClick(option) }
                >
                    { option.text }
                </div>
            )
        })
    }

    render() {
        return (
            <div className="select">
                <input type="hidden" value={this.state.value} id={ this.props.id } />
                <div
                    onClick={ this.handleButtonClick }
                    onChange={ this.handleValueChange }
                >
                    { this.state.text }
                </div>

                <div hidden={ !this.state.opened }>
                    { this.renderOptionsList() }
                </div>

            </div>
        )
    }
}

export default (props) => styled(styles)(
    <Select {...props} />
);
