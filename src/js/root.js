/**
 * Created by Gracia on 17/9/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import 'antd/dist/antd.css';
import {Button} from 'antd';

import PCIndex from './component/pc_index';

export default class Root extends React.Component {
    render() {
        return(
            <div>
                <PCIndex/>
            </div>
        );
    }
}

ReactDOM.render(<Root/>, document.getElementById('news'));