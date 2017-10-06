/**
 * Created by Gracia on 17/10/6.
 */
import React from 'react';
import {Row, Col, Menu, Icon, Tabs, message, Form, Input, Button, Checkbox, Modal} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';

import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';

const TabPane = Tabs.TabPane;

export default class MobileUserCenter extends React.Component {
    render() {
        return (
            <div>
                <MobileHeader/>
                <Row>
                    <Col span={24}>
                        <Tabs>
                            <TabPane tab="My collection list" key="1">

                            </TabPane>
                            <TabPane tab="My comments" key="2">

                            </TabPane>
                            <TabPane tab="Profile setting" key="3">

                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
                <MobileFooter/>
            </div>
        );
    }
}