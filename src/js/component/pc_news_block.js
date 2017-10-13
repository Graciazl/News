/**
 * Created by Gracia on 17/9/24.
 */
import React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router-dom';

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
    }

    render() {
        const styleLink = {
            color: "#666",
            lineHeight: "22px"
        };

        const {news} = this.state;
        let newsList = news.length
            ? news.map((newsItem, index) => (
            <li key={index}>
                <Link to={`details/${newsItem.uniquekey}`} target="_blank" style={styleLink}>
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