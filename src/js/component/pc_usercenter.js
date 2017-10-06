/**
 * Created by Gracia on 17/10/6.
 */
import React from 'react';
import {Row, Col, Menu, Icon, Tabs, message, Form, Input, Button, Checkbox, Modal} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';

import PCHeader from './pc_header';
import PCFooter from './pc_footer';

const TabPane = Tabs.TabPane;

export default class PCUserCenter extends React.Component {
    render() {
        return (
            <div>
                <PCHeader/>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Tabs>
                            <TabPane tab="My collection list" key="1">

                            </TabPane>
                            <TabPane tab="My comments" key="2">

                            </TabPane>
                            <TabPane tab="Profile setting" key="3">

                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter/>
            </div>
        );
    }
}