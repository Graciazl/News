/**
 * Created by Gracia on 17/9/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" component={PCIndex}></Route>
                            <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
                            <Route path="/usercenter" component={PCUserCenter}></Route>
                        </Switch>
                    </BrowserRouter>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={MobileIndex}></Route>
                            <Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
                            <Route path="/usercenter" component={MobileUserCenter}></Route>
                        </Switch>
                     </BrowserRouter>
                </MediaQuery>
            </div>
        );
    }
}

ReactDOM.render(<Root/>, document.getElementById('news'));