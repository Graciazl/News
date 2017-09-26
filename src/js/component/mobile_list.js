/**
 * Created by Gracia on 17/9/24.
 */
import React from 'react';
import {Col, Row} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';

export default class MobileList extends React.Component {

    constructor() {
        super();
        this.state = {
            news: ''
        };
    }

    componentWillMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="
            + this.props.type + "&count=" + this.props.count, myFetchOptions)
            .then(response => response.json())
            .then(json => this.setState({news: json}));
    }

    render() {
        const {news} = this.state;
        let newsList = news.length
            ? news.map((newsItem, index) => (
            <section key={index} class="mobileList">
                <Link to={`details/${newsItem.uniquekey}`}>
                    <div class="mobileListImg">
                        <img src={newsItem.thumbnail_pic_s} alt={newsItem.title}/>
                    </div>
                    <div class="mobile_artical">
                        <div class="m_artical_title">
                            <span>{newsItem.title}</span>
                        </div>
                        <div class="m_article_desc">
                            <div class="m_article_desc_l">
                                <span class="m_article_channel">{newsItem.realtype}</span>
                                <span class="m_article_time">{newsItem.date}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </section>
        ))
            : 'No news loaded.';
        return (
            <div>
                <Col span={24}>
                    {newsList}
                </Col>
            </div>
        );
    }
}
