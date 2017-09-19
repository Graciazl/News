/**
 * Created by Gracia on 17/9/13.
 */
import React from 'react';
import {Row, Col} from 'antd';

export default class PCFooter extends React.Component {

    render() {
        return (
            <footer>
                <Row>
                    <Col span={2}>

                    </Col>
                    <Col span={20} class="foter">
                        &copy;&nbsp;2017 News. All Rights Reserved.
                    </Col>
                    <Col span={2}>

                    </Col>
                </Row>
            </footer>
        );
    }
}