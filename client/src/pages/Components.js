import React, { Component } from "react";
import { observer } from 'mobx-react';
import styled from 'reshadow';

import Select from '../components/common/Select';
import Button from '../components/common/Button';
import Heading from '../components/common/Heading';

@observer
class Components extends Component {
    render() {
        return styled`
            Select {
                margin: 10px;
            }
            
            Button {
                margin: 12px;
            }
            
            content {
                background: #b3b3b3;
                padding: 50px;
            }
        `(
            <content>
                <Heading size={'l'}>Кнопки</Heading>

                <Button color="white" size={"s"}>Белая кнопка</Button>
                <Button color="blue" size={"m"}>Синяя кнопка</Button>
                <Button color="white" size={"l"}>Белая кнопка</Button>

                <Heading size={'l'}>Селекты</Heading>

                <Select
                    id={'firstSelect'}
                    value={1}
                    onChange={ (value) => { console.log(value) } }
                    options={
                        [
                            {
                                value: 1,
                                text: 'Первый пункт'
                            },
                            {
                                value: 2,
                                text: 'Второй пункт'
                            }
                        ]
                    }
                    fieldSize={'m'}
                />
                <Select
                    id={'secondSelect'}
                    value={1}
                    text={'Нажми что бы выбрать'}
                    onChange={ (value) => { console.log(value) } }
                    options={
                        [
                            {
                                value: 1,
                                text: 'Первый пункт'
                            },
                            {
                                value: 2,
                                text: 'Второй пункт'
                            }
                        ]
                    }
                    fieldSize={'b'}
                />
                <Select
                    id={'thirdSelect'}
                    value={1}
                    text={'Нажми что бы выбрать'}
                    onChange={ (value) => { console.log(value) } }
                    options={
                        [
                            {
                                value: 1,
                                text: 'Первый пункт'
                            },
                            {
                                value: 2,
                                text: 'Второй пункт'
                            }
                        ]
                    }
                    fieldSize={'s'}
                />
            </content>
        );
    }
}

export default Components;