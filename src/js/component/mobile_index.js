/**
 * Created by Gracia on 17/9/18.
 */
import React from 'react';
import {Tabs, Carousel} from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import MobileList from './mobile_list';

const TabPane = Tabs.TabPane;

export default class MobileIndex extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        };

        return (
            <div>
                <MobileHeader/>
                <Tabs>
                    <TabPane tab="World" key="1">
                        <div class="carousel">
                            <Carousel {...settings}>
                                <div><img src="./src/images/carousal_1.jpg"/></div>
                                <div><img src="./src/images/carousal_2.jpg"/></div>
                                <div><img src="./src/images/carousal_3.jpg"/></div>
                                <div><img src="./src/images/carousal_4.jpg"/></div>
                            </Carousel>
                        </div>
                        <MobileList count={20} type="top"/>
                    </TabPane>
                    <TabPane tab="Politics" key="2">
                        <MobileList count={20} type="shehui"/>
                    </TabPane>
                    <TabPane tab="Entertainment" key="5">
                        <MobileList count={20} type="yule"/>
                    </TabPane>
                </Tabs>
                <MobileFooter/>
            </div>
        );
    }
}