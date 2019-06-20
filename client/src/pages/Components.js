import React, { Component } from "react";
import { observer } from 'mobx-react';
import styled from 'reshadow';

import Select from 'src/components/common/Select';
import Button from 'src/components/common/Button';
import Heading from 'src/components/common/Heading';
import Image from 'src/components/common/Image';
import Input from 'src/components/common/Input';
import Icon from 'src/components/common/Icon';
import ToggledList from 'src/components/common/ToggledList';


@observer
class Components extends Component {
    render() {

        const selectProps = {
            value: 1,
            onChange: function(value) { console.log(value) },
            options: [
                {
                    value: 1,
                    text: 'First option'
                },
                {
                    value: 2,
                    text: 'Second option'
                },
                {
                    value: 3,
                    text: 'Third option'
                }
            ],
            fieldSize: 'm'
        };

        const mockTL = [
            {
                name: 'Пункт 1',
                list: [
                    {
                        name: 'Подпункт 1',
                        list: [
                            {
                                name: 'Подподпункт 1'
                            },
                            {
                                name: 'Подподпункт 2',
                                list: [
                                    {
                                        name: 'Подподподпункт 1'
                                    },
                                    {
                                        name: 'Кек',
                                        list: [
                                            {
                                                name: 'Подподподпункт 1',
                                                list: [
                                                    {
                                                        name: 'Ей нужна скорость',
                                                        list: [
                                                            {
                                                                name: 'Подподподпункт 1'
                                                            },
                                                            {
                                                                name: 'Что то еще',
                                                                list: [
                                                                    {
                                                                        name: 'Подподподпункт 1',
                                                                        list: [
                                                                            {
                                                                                name: 'Ей нужна скорость',

                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        name: 'Подподпункт 2',
                                                        list: [
                                                            {
                                                                name: 'Подподподпункт 1'
                                                            },
                                                            {
                                                                name: 'Что то еще',
                                                                list: [
                                                                    {
                                                                        name: 'Подподподпункт 1',
                                                                        list: [
                                                                            {
                                                                                name: 'Ей нужна скорость',
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Подпункт 2',
                    }
                ]
            },
            {
                name: 'Пункт 1',
                list: [
                    {
                        name: 'Подпункт 1',
                    }
                ]
            }
        ];

        const mockMenuToggle = [
            {
                name: 'Регион',
                category: 'region',
                list: [
                    {
                        name: 'Санкт-Петербург',
                        value: 131,
                    },
                    {
                        name: 'Москва',
                        value: 777,
                    },
                    {
                        name: 'Пенза',
                        value: 58,
                    },
                    {
                        name: 'Минск',
                        value: 983,
                    }
                ]
            },
            {
                name: 'Профобласть',
                category: 'profession',
                list: [
                    {
                        name: 'Продажи',
                        value: 'sales',
                    },
                    {
                        name: 'IT, телеком',
                        value: 'it',
                    },
                    {
                        name: 'Производство',
                        value: 'craft',
                    },
                    {
                        name: 'Админ, персонал',
                        value: 'admin',
                    },
                    {
                        name: 'Авто',
                        list: [
                            { name: 'Легковые', value: 'leg_car' },
                            { name: 'Грузовые', value: 'mid_car' },
                            { name: 'Фуры', value: 'b_car'  }
                        ]

                    },
                    {
                        name: 'Бухгалтерия',
                        value: 'money'
                    }
                ]
            }
        ];

        const photoProps = {
            src: 'https://cdn.vedomosti.ru/image/2017/7n/111re1/mobile_high-1c0j.jpg',
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
            
            Icon {
                margin: 10px;
            }
            
            Input {
                margin: 10px;
            }
            
            ToggledList {
                margin: 10px;
            }
        `(
            <content>
                <div>
                    <Heading size={'l'} color={'black'}>Toggles Lists</Heading>
                    <ToggledList list={mockTL}/>
                    <ToggledList
                        onElementClick={
                            (category, value) => { console.log('В категории ', category, 'выбрано свойство ', value) }
                        }
                        title={'Фильтр'}
                        list={mockMenuToggle}
                    />

                    <Heading size={'l'} color={'black'}>Icons</Heading>

                    <Icon isAwesome={true} awesomeClass={'fas fa-ad'} size={90} color={'blue'}/>
                    <Icon isAwesome={true} awesomeClass={'fas fa-ad'} size={60} color={'black'}/>
                    <Icon isAwesome={true} awesomeClass={'fas fa-ad'} size={40} color={'blue'}/>

                    <Heading size={'l'} color={'black'}>Buttons</Heading>
                    <Button color="blue" size={"m"}>Button</Button>

                    <Heading size={'l'} color={'black'}>Selects</Heading>
                    <Select id={'firstSelect'} {...selectProps} size={"s"} />
                    <Select id={'secondSelect'}{...selectProps} size={"m"} text={'Placeholder'}/>
                    <Select id={'thirdSelect'} {...selectProps} size={"l"} />

                    <Heading size={'l'} color={'black'}>Inputs</Heading>
                    <Input color={'white'} size={'l'}/>
                    <Input size={'s'}/>

                    <Input size={'m'}
                           icon={ <Icon isAwesome={true} awesomeClass={'fas fa-search'} size={16} color={'blue'} /> }
                    />

                    <Input size={'l'} icon={ <Icon isAwesome={true} awesomeClass={'fas fa-search-location'} size={20} color={'grey'} /> }/>

                    <Heading size={'l'} color={'black'}>Images</Heading>
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
                    <Heading size={'l'} color={'white'}>Icons</Heading>

                    <Icon isAwesome={true} awesomeClass={'fas fa-ad'} size={90} color={'white'}/>
                    <Icon isAwesome={true} awesomeClass={'fas fa-ad'} size={60} color={'blue'}/>
                    <Icon isAwesome={true} awesomeClass={'fas fa-ad'} size={40} color={'white'}/>

                    <Heading size={'l'} color={'white'}>Buttons</Heading>
                    <Button color="white" size={"s"}>Button</Button>
                    <Button color="white" size={"l"}>Button</Button>

                    <Heading size={'l'} color={'white'}>Selects</Heading>
                    <Select id={'fourthSelect'}{...selectProps} size={"m"} />

                    <Heading size={'l'} color={'white'}>Images</Heading>
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

                    <Heading size={'l'} color={'white'}>Inputs</Heading>
                    <Input size={'l'}
                           icon={ <Icon isAwesome={true} awesomeClass={'fas fa-search'} size={16} color={'white'} /> }
                    />

                </div>
            </content>
        );
    }
}

export default Components;