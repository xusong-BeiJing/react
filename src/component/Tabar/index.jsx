import React from 'react';
import { Row, Col } from 'antd';
class Tabar extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                </Row>
            </div>)
    }

}
export default Tabar;