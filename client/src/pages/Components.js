import React, { Component } from "react";
import { observer } from 'mobx-react';
import styled from 'reshadow';

import Select from '../components/common/Select';
import Button from '../components/common/Button';
import Heading from '../components/common/Heading';
import Image from '../components/common/Image';
import Input from '../components/common/Input';
import Icon from '../components/common/Icon';

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
            
            Icon {
                margin: 10px;
            }
            
            Input {
                margin: 10px;
            }
        `(
            <content>
                <div>
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