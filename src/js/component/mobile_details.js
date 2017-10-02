/**
 * Created by Gracia on 17/9/28.
 */
import React from 'react';
import {Row, Col, BackTop} from 'antd';

import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import Comments from './comments';

export default class MobileNewsDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            newsItem: ''
        };
    }

    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey="
            + this.props.params.uniquekey, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({newsItem: json});
                document.title = this.state.newsItem.title + " - News | News platform based on React";
            });
    }

    createMarkup() {
        return {__html: this.state.newsItem.pagecontent};
    }

    render() {
        return (
            <div id="mobileDetails">
                <MobileHeader/>
                <div class="mobileList">
                    <Row>
                        <Col span={24}>
                            <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                            <hr/>
                            <Comments uniquekey={this.props.params.uniquekey}/>
                        </Col>
                    </Row>
                </div>

                <MobileFooter/>
                <BackTop/>
            </div>
        );
    }

}
