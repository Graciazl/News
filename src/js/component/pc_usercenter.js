/**
 * Created by Gracia on 17/10/6.
 */
import React from 'react';
import {Row, Col, Tabs, Icon, Modal, message, Upload} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';

import PCHeader from './pc_header';
import PCFooter from './pc_footer';

const TabPane = Tabs.TabPane;

export default class PCUserCenter extends React.Component {
    constructor() {
        super();
        this.state = {
            usercollection: '',
            usercomments: '',
            previewImage: '',
            previewVisible: false
        }
    }

    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };

        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid="
            + localStorage.userid, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({usercollection: json});
            });

        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid="
            + localStorage.userid, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({usercomments: json});
            });
    }

    render() {
        const props = {
            action: 'http://newsapi.gugujiankong.com/handler.ashx',
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            listType: 'picture-card',
            defaultFileList: [
                {
                    uid: -1,
                    name: 'xxx.png',
                    state: 'done',
                    url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
                    thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
                }
            ],
            onPreview: (file) => {
                this.setState({previewImage: file.url, previewVisible: true});
            }
        };

        const {usercollection, usercomments} = this.state;
        const usercollectionList = usercollection.length
            ? usercollection.map((uc, index)=>(
                <Card key={index} title={uc.uniquekey}
                      extra={<a target="_blank" href={`/#/details/${uc.uniquekey}`}>Check</a>}>
                    <p>{uc.Title}</p>
                </Card>
            ))
            : 'You do not have any collection.';

        const usercommentsList = usercomments.length ?
            usercomments.map((comment, index)=>(
                <Card key={index} title={`on ${comment.datetime} comments ${comment.uniquekey}`} extra={<a target="_blank" href={`/#/details/${comment.uniquekey}`}>查看</a>}>
                    <p>{comment.Comments}</p>
                </Card>
            ))
            : 'You have no comments.';

        return (
            <div>
                <PCHeader/>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Tabs>
                            <TabPane tab="My collection list" key="1">
                                <div class="comment">
                                    <Row>
                                        <Col span={24}>
                                            {usercollectionList}
                                        </Col>
                                    </Row>
                                </div>
                            </TabPane>
                            <TabPane tab="My comments" key="2">
                                <div class="comment">
                                    <Row>
                                        <Col span={24}>
                                            {usercommentsList}
                                        </Col>
                                    </Row>
                                </div>
                            </TabPane>
                            <TabPane tab="Profile setting" key="3">
                                <div class="clearfix">
                                    <Upload {...props}>
                                        <Icon type="plus"/>
                                        <div className="ant-upload-text">Upload portrait</div>
                                    </Upload>
                                    <Modal visible={this.state.previewVisible} footer={null}
                                           onCancel={this.handleCancel}>
                                        <img alt="preview" src={this.state.previewImage}/>
                                    </Modal>
                                </div>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter/>
            </div>
        );
    }
}