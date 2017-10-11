/**
 * Created by Gracia on 17/9/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import {Router, Route, hashHistory} from 'react-router';
import 'antd/dist/antd.css';

import PCIndex from './component/pc_index';
import PCNewsDetails from './component/pc_details';
import MobileIndex from './component/mobile_index';
import MobileNewsDetails from './component/mobile_details';
import PCUserCenter from './component/pc_usercenter';
import MobileUserCenter from './component/mobile_usercenter';

export default class Root extends React.Component {
    render() {
        return(
            <div>
                <MediaQuery query='(min-device-width: 1224px)'>
                    <Router history={hashHistory}>
                        <Route path="/" component={PCIndex}></Route>
                        <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
                        <Route path="/usercenter" component={PCUserCenter}></Route>
                    </Router>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                    <Router history={hashHistory}>
                        <Route path="/" component={MobileIndex}></Route>
                        <Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
                        <Route path="/usercenter" component={MobileUserCenter}></Route>
                     </Router>
                </MediaQuery>
            </div>
        );
    }
}

ReactDOM.render(<Root/>, document.getElementById('news'));