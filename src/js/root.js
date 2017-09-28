/**
 * Created by Gracia on 17/9/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import {Router, Route, hashHistory} from 'react-router';
import 'antd/dist/antd.css';
import {Button} from 'antd';

import PCIndex from './component/pc_index';
import MobileIndex from './component/mobile_index';
import PCNewsDetails from './component/pc_details';

export default class Root extends React.Component {
    render() {
        return(
            <div>
                <MediaQuery query='(min-device-width: 1224px)'>
                    <Router history={hashHistory}>
                        <Route path="/" component={PCIndex}></Route>
                        <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
                    </Router>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                    <MobileIndex/>
                </MediaQuery>
            </div>
        );
    }
}

ReactDOM.render(<Root/>, document.getElementById('news'));