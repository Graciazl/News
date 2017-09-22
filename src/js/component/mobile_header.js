/**
 * Created by Gracia on 17/9/19.
 */
import React from 'react';
import {Row, Col, Menu, Icon, Tabs, message, Form, Input, Button, Checkbox, Modal} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';
import 'whatwg-fetch';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class MobileHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid: 0
        };
    }

    setModalVisible(value) {
        this.setState({modalVisible: value});
    }

    handleClick(e) {
        if (e.key = 'register') {
            this.setState({current: 'register'});
            this.setModalVisible(true);
        } else {
            this.setState({current: e.key});
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };

        var formData = this.props.form.getFieldsValue;
        console.log(formData);
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName=" + formData.r_userName + "&r_password=" + formData.r_password + "&r_confirmPassword=" + formData.r_confirmPassword, myFetchOptions).then(response=>response.json()).then(json=> {
            this.setState({userNickName: json.NickUserName, userid: json.UserId});
        });

        message.success("Successful request.");
        this.setModalVisible(false);
    }

    login(){
        this.setModalVisible(true);
    }

    render() {
        let {getFieldDecorator} = this.props.form;
        let userShow = this.state.hasLogined
            ? <Link>
            <Icon type="inbox"/>
            </Link>
            : <Icon type="plus-circle" onClick={this.login.bind(this)}/>;

        return (
            <div id="mobileheader">
                <header>
                    <img src="./src/images/logo.svg" alt="logo"/>
                    <span>News</span>
                    {userShow}
                </header>
                <Modal wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
                       onCancel={()=>this.setModalVisible(false)} onOk={()=>this.setModalVisible(false)}
                       okText="Close" cancelText="Cancel">
                    <Tabs type="card">
                        <TabPane tab="Register" key="1">
                            <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="Account">
                                    <Input
                                        placeholder="Please enter your account" {...getFieldDecorator('r_userName')}/>
                                </FormItem>
                                <FormItem label="Password">
                                    <Input type="password"
                                           placeholder="Please enter your password" {...getFieldDecorator('r_userPassword')}/>
                                </FormItem>
                                <FormItem label="Confirm Password">
                                    <Input type="password"
                                           placeholder="Please confirm your password" {...getFieldDecorator('r_confirmPassword')}/>
                                </FormItem>
                                <Button type="primary" htmlType="submit">Register</Button>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>
            </div>
        );
    }
}

export default MobileHeader = Form.create({})(MobileHeader);