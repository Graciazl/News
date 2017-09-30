/**
 * Created by Gracia on 17/9/28.
 */
import React from 'react';
import {Row, Col, Menu, Icon, Tabs, Form, Input, Button} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

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
            + this.props.params.uniquekey, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({comments: json});
            });
    }

    handleSubmit(e) {
        e.preventDefault();

        var formdata = this.props.form.getFieldsValue;
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid="
            + localStorage.userid + "&uniquekey="
            + this.props.params.uniquekey + "&commnet="
            + formdata.remark, myFetchOptions)
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
            <Card key={index} title={comment.UserName} extra={< a href = "#" > submitted {comment.datetime} < /a>}>
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
                        <Input type="textarea"
                               placeholder="Please leave your comments." {...getFieldDecorator('remark', {initialValue: ''})} />
                    </FormItem>
                    <Button type="primary" htmlType="submit">Submit comments</Button>
                </Form>
            </Row>
        );
    }
}

export default Comments = Form.create({})(Comments);