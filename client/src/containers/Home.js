import React, { Component } from "react";
import { observer } from 'mobx-react';
import Menu from "../components/navigation/Menu";

import LazyWrapper from "../components/common/LazyWrapper";

import '../styles/Home.css';

import MainStore from "../stores/Main";

@observer
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Menu/>
                <LazyWrapper isLoading={MainStore.isLoading}>
                    Home page
                </LazyWrapper>
            </React.Fragment>
        );
    }
}

export default Home;