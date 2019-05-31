import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Select.css';
import Type from 'prop-types';

class Select extends Component {
    static propTypes = {
        id: Type.oneOfType([Type.string, Type.number]).isRequired,
        value: Type.oneOfType([Type.string, Type.number]),
        options: Type.array,
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
        this.root = null;
        this.windowClickListener = null;
    }

    componentWillMount() {
        if (!this.props.text) {
            this.setDefaultValue();
        }

        this.windowClickListener = window.addEventListener('click', this.closeOptions)
    }

    componentWillUnmount() {
        window.removeEventListener(this.windowClickListener, this.closeOptions);
    }

    getValue() {
        return this.state.value
    }

    closeOptions = (event) => {
        if (event.target !== this.root.childNodes[1]) {
            this.setState({
                opened: false
            })
        }
    };

    toggleOpened() {
        const newOpenedState = !this.state.opened;
        this.setState({
            opened: newOpenedState
        })
    }

    setDefaultValue() {
        const option = this.props.options.filter(option => option.value === this.props.value)[0];
        console.log(option);
        this.selectOption(option)
    }

    selectOption(option, callback) {
        console.log('select', option, this)
        this.setState({
            text: option.text,
            value: option.value
        }, callback)
    }

    handleButtonClick = () => {
        this.toggleOpened();
    };

    handleValueChange = () => {
        this.props.onChange(this.getValue());

        if (this.root) {
            this.root.focus();
        }
    };

    handleOptionClick = (option) => () => {
        this.selectOption(option, () => {
            this.handleValueChange();
            this.toggleOpened();
        });
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
            <div className="select" ref={ (root) => { this.root = root }}>
                <input value={ this.state.value }
                       id={ this.props.id }
                       type="hidden"
                />
                <div className={'selectText'}
                    onClick={ this.handleButtonClick }
                    onChange={ this.handleValueChange }
                >
                    { this.state.text }
                </div>

                <div className={'selectList'} hidden={ !this.state.opened }>
                    { this.renderOptionsList() }
                </div>

            </div>
        )
    }
}

export default (props) => styled(styles)(
    <Select {...props} />
);
