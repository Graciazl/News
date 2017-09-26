/**
 * Created by Gracia on 17/9/24.
 */
import React from 'react';
import {Row, Col, Tabs, Carousel} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCImageBlock from './pc_news_image';

const TabPane = Tabs.TabPane;

export default class pcNewsContainer extends React.Component {
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
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="container">
                        <div class="leftContainer">
                            <div className="carousel">
                                <Carousel {...settings}>
                                    <div><img src="./src/images/carousal_1.jpg"/></div>
                                    <div><img src="./src/images/carousal_2.jpg"/></div>
                                    <div><img src="./src/images/carousal_3.jpg"/></div>
                                    <div><img src="./src/images/carousal_4.jpg"/></div>
                                </Carousel>
                            </div>
                            <PCImageBlock count={6} type={"guoji"} width="400px" imageWidth="110px"
                                          cartTitle="International"/>
                        </div>
                        <Tabs class="tabs_news">
                            <TabPane tab="News" key="1">
                                <PCNewsBlock count={22} type={"top"} width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab="International" key="2">
                                <PCNewsBlock count={22} type={"guoji"} width="100%" bordered="false"/>
                            </TabPane>
                        </Tabs>

                    </Col>
                    <Col span={2}></Col>
                </Row>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <div>
                            <PCImageBlock count={7} type="guonei" width="100%" cartTitle="Local" imageWidth="132px"/>
                            <PCImageBlock count={14} type="yule" width="100%" cartTitle="Entertainment" imageWidth="132px"/>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>

        );
    }
}