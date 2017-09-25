/**
 * Created by Gracia on 17/9/24.
 */
import React from 'react';
import {Card} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';

export default class PCNewsBlock extends React.Component {

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
/*        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=10")
            .then(response => response.json())
            .then(json => this.setState({news: json}));*/
    }

    render() {
        const {news} = this.state;
        let newsList = news.length
            ? news.map((newsItem, index) => (
            <li key={index}>
                <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                    {newsItem.title}
                </Link>
            </li>
        ))
            : 'No news loaded.';
        return (
            <div class="newslist">
                <Card>
                    <ul>
                        {newsList}
                    </ul>
                </Card>
            </div>
        );
    }
}