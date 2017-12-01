/**
 * Created by Gracia on 17/9/12.
 */
import React from 'react';
import {Row, Col, Menu, Icon, Tabs, message, Form, Input, Button, Checkbox, Modal} from 'antd';
import {Link} from 'react-router-dom';
import 'whatwg-fetch';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class PCHeader extends React.Component {
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

    componentWillMount() {
        if (localStorage.userid!='') {
            this.setState({hasLogined:true});
            this.setState({userNickName:localStorage.userNickName,userid:localStorage.userid});
        }
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

        var formData = this.props.form.getFieldsValue();

        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
            + "&username=" + formData.userName + "&password=" + formData.password
            + "&r_userName=" + formData.r_userName + "&r_password="
            + formData.r_password + "&r_confirmPassword="
            + formData.r_confirmPassword, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({userNickName: json.NickUserName, userid: json.UserId});
                localStorage.userid= json.UserId;
                localStorage.userNickName = json.NickUserName;
            });

        if (this.state.action=="login") {
            this.setState({hasLogined:true});
        }

        message.success("Successful request.");
        this.setModalVisible(false);
    }

    callback(key) {
        if (key === 1) {
            this.setState({
                action: 'login'
            });
        } else if (key === 2) {
            this.setState({
                action: 'register'
            });
        }
    }

    logout() {
        localStorage.userid = '';
        localStorage.userNickName = '';
        this.setState({hasLogined: false});
    }

    render() {
        let {getFieldDecorator} = this.props.form;
        let userShow = this.state.hasLogined
            ? <Menu.Item key="login">
            <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
            <Link target="_blank" to={`/usercenter`}>
                <Button type="dashed" htmlType="button">
                    Profile
                </Button>
            </Link>
            <Button type="ghost" htmlType="button" onClick={this.logout.bind(this)}>Log out</Button>
        </Menu.Item>
            : <Menu.Item key="register" class="register">
            <Icon type="appstore"/>Register/Login
        </Menu.Item>;

        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" class="logo">
                            <img src="/src/images/logo.svg" alt="logo"/>
                            <span>News</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" onClick={this.handleClick.bind(this)}
                              selectedKeys={[this.state.current]}>
                            <Menu.Item key="top">
                                <Icon type="appstore"/>World
                            </Menu.Item>
                            <Menu.Item key="politics">
                                <Icon type="appstore"/>Politics
                            </Menu.Item>
                            <Menu.Item key="tech">
                                <Icon type="appstore"/>Tech
                            </Menu.Item>
                            <Menu.Item key="travel">
                                <Icon type="appstore"/>Travel
                            </Menu.Item>
                            <Menu.Item key="sports">
                                <Icon type="appstore"/>Sports
                            </Menu.Item>
                            <Menu.Item key="entertain">
                                <Icon type="appstore"/>Entertainment
                            </Menu.Item>
                            {userShow}
                        </Menu>
                        <Modal wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
                               onCancel={()=>this.setModalVisible(false)} onOk={()=>this.setModalVisible(false)}
                               okText="Close" cancelText="Cancel">
                            <Tabs type="card" onChange={this.callback.bind(this)}>
                                <TabPane tab="Login" key="1">
                                    <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label="Account">
                                            {getFieldDecorator('userName')(
                                                <Input placeholder="Please enter your account"/>
                                            )}
                                        </FormItem>
                                        <FormItem label="Password">
                                            {getFieldDecorator('password')(
                                                <Input type="password" placeholder="Please enter your password"/>
                                            )}
                                        </FormItem>
                                        <Button type="primary" htmlType="submit">Login</Button>
                                    </Form>
                                </TabPane>
                                <TabPane tab="Register" key="2">
                                    <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label="Account">
                                            {getFieldDecorator('r_userName')(
                                                <Input placeholder="Please enter your account"/>
                                            )}
                                        </FormItem>
                                        <FormItem label="Password">
                                            {getFieldDecorator('r_password')(
                                                <Input type="password" placeholder="Please enter your password"/>
                                            )}
                                        </FormItem>
                                        <FormItem label="Confirm Password">
                                            {getFieldDecorator('r_confirmPassword')(
                                                <Input type="password" placeholder="Please confirm your password"/>
                                            )}
                                        </FormItem>
                                        <Button type="primary" htmlType="submit">Register</Button>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>
                    </Col>
                    <Col span={2}>

                    </Col>
                </Row>
            </header>
        );
    }
}

export default PCHeader = Form.create({})(PCHeader);