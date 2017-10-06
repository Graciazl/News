/**
 * Created by Gracia on 17/9/28.
 */
import React from 'react';
import {Row, Col, Menu, Icon, Tabs, Form, Input, Button, Card} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';

const FormItem = Form.Item;

class Comments extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: ''
        };
    }

    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey="
            + this.props.uniquekey, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({comments: json});
            });
    }

    handleSubmit(e) {
        e.preventDefault();

        var formData = this.props.form.getFieldsValue();

        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid="
            + localStorage.userid + "&uniquekey="
            + this.props.uniquekey + "&commnet="
            + formData.remark, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.componentDidMount();
            })
    }

    render() {
        let {getFieldDecorator} = this.props.form;
        const {comments} = this.state;
        let commentList = comments.length
            ? comments.map((comment, index) => (
            <Card key={index} title={comment.UserName} extra={<a href = "#"> submitted {comment.datetime} </a>}>
                <p>{comment.Comments}</p>
            </Card>
        ))
            : 'No comments';

        return (
            <Row>
                <Col span={24}></Col>
                {commentList}
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem label="Your comments">
                        {getFieldDecorator('remark')(
                            <Input type="textarea" placeholder="Please leave your comments."/>
                        )}
                    </FormItem>
                    <Button type="primary" htmlType="submit">Submit comments</Button>
                    <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>Save news</Button>
                </Form>
            </Row>
        );
    }
}

export default Comments = Form.create({})(Comments);