/**
 * Created by Gracia on 17/9/18.
 */
import React from 'react';
import {Tabs} from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';

const TabPane = Tabs.TabPane;

export default class MobileIndex extends React.Component {
    render() {
        return (
            <div>
                <MobileHeader/>
                <Tabs>
                    <TabPane tab="World" key="1">
                    </TabPane>
                    <TabPane tab="Politics" key="2">
                    </TabPane>
                    <TabPane tab="Tech" key="3">
                    </TabPane>
                    <TabPane tab="Travel" key="4">
                    </TabPane>
                    <TabPane tab="Sports" key="5">
                    </TabPane>
                    <TabPane tab="Entertainment" key="6">
                    </TabPane>
                </Tabs>
                <MobileFooter/>
            </div>
        );
    }
}