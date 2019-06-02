import React, { Component } from "react";
import { observer } from 'mobx-react';
import styled from 'reshadow';

import Select from '../components/common/Select';
import Button from '../components/common/Button';
import Heading from '../components/common/Heading';
import Image from '../components/common/Image';
import Input from '../components/common/Input';

@observer
class Components extends Component {
    render() {

        const selectProps = {
            value: 1,
            onChange: function(value) { console.log(value) },
            options: [
                {
                    value: 1,
                    text: 'Первый пункт'
                },
                {
                    value: 2,
                    text: 'Второй пункт'
                }
            ],
            fieldSize: 'm'
        };

        const photoProps = {
            src: 'https://pp.userapi.com/c845018/v845018712/c0ed0/KjotTJpUgvw.jpg',
            alt: 'Photo'
        };

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
            
            div {
                background: white;
                padding: 50px;
            }
            
            div + div {
                background: #000000c2;
            }
            
            Image + Image {
                margin: 0 0 0 12px;
            }
            
            Input {
                margin: 10px;
            }
        `(
            <content>
                <div>
                    <Heading size={'l'} color={'black'}>Кнопки</Heading>
                    <Button color="blue" size={"m"}>Синяя кнопка</Button>

                    <Heading size={'l'} color={'black'}>Селекты</Heading>
                    <Select id={'firstSelect'} {...selectProps} size={"s"} />
                    <Select id={'secondSelect'}{...selectProps} size={"m"} text={'Placeholder'}/>
                    <Select id={'thirdSelect'} {...selectProps} size={"l"} />

                    <Heading size={'l'} color={'black'}>Инпуты</Heading>
                    <Input color={'white'} size={'l'}/>
                    <Input icon={true} size={'s'}/>
                    <Input icon={true} size={'m'}/>
                    <Input icon={true} size={'l'}/>

                    <Heading size={'l'} color={'black'}>Картинки</Heading>
                    <Image
                        { ...photoProps }
                        width={100}
                        height={300}
                        cover
                    />
                    <Image
                        { ...photoProps }
                        width={270}
                        height={200}
                        cover
                    />
                    <Image
                        { ...photoProps }
                        width={100}
                        height={100}
                    />
                </div>

                <div className="grey">
                    <Heading size={'l'} color={'white'}>Кнопки</Heading>
                    <Button color="white" size={"s"}>Белая кнопка</Button>
                    <Button color="white" size={"l"}>Белая кнопка</Button>

                    <Heading size={'l'} color={'white'}>Селекты</Heading>
                    <Select id={'fourthSelect'}{...selectProps} size={"m"} />
                </div>
            </content>
        );
    }
}

export default Components;