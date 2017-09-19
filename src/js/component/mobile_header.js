/**
 * Created by Gracia on 17/9/19.
 */
import React from 'react';

export default class MobileHeader extends React.Component {
    render() {
        return (
            <div id="mobileheader">
                <header>
                    <img src="./src/images/logo.svg" alt="logo"/>
                    <span>News</span>
                </header>
            </div>
        );
    }
}