/**
 * Created by Gracia on 17/9/25.
 */
import React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router-dom';

export default class PCImageBlock extends React.Component {

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
        const styleImage = {
            display: "block",
            width: this.props.imageWidth,
            height: "90px"
        };
        const styleH3 = {
            width: this.props.imageWidth,
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden"
        };

        const {news} = this.state;
        let newsList = news.length
            ? news.map((newsItem, index) => (
            <div key={index} class="imageblock">
                <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                    <div class="custom-image">
                        <img src={newsItem.thumbnail_pic_s} style={styleImage}/>
                    </div>
                    <div class="custom-card">
                        <h3 style={styleH3}>{newsItem.title}</h3>
                    </div>
                </Link>
            </div>
        ))
            : 'No news loaded.';

        return (
            <div class="newslist">
                <Card title={this.props.cartTitle} bordered={true} style={{width: this.props.width}}>
                    {newsList}
                </Card>
            </div>
        );
    }
}