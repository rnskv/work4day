import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Offer.shadow.css';
import Type from 'prop-types';

import Heading from 'src/components/common/Heading';
import Description from 'src/components/common/Description';
import Button from 'src/components/common/Button';

class Offer extends Component {
    static propTypes = {
        data: Type.object.isRequired
    };

    static defaultProps = {

    };

    constructor() {
        super();
    }

    render() {
        const { data } = this.props;
        console.log(data);
        return styled(styles)(
            <content>
                <Heading hasMargin={false} size={'m'} color={'black'}>{ data.title }</Heading>
                <Description color={'grey'} size={'m'}>{ data.group.title }</Description>
                <Description color={'grey'} size={'m'}>{ data.location.city } - { data.location.area }</Description>
                <p>{ data.text }</p>
                <Button style={'link'} size={'m'}>Откликнуться</Button>
                <Button style={'link'} size={'m'}>Показать контакты</Button>
            </content>
        )
    }
}

export default Offer;