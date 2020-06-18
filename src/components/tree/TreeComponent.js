import React from 'react'
import { Col, Row, Tree } from 'antd'

const treeData = [
    {
        title: 'root',
        key: '0-0',
        children: [
            {
                title: '집',
                key: '0-0-0',
                children: [
                    {
                        title: '가자',
                        key: '0-0-0-0',
                        disableCheckbox: true,
                    },
                    {
                        title: '가즈아',
                        key: '0-0-0-1',
                    },
                ],
            },
            {
                title: '회사',
                key: '0-0-1',
                children: [
                    {
                        title: '출근',
                        key: '0-0-1-0',
                        disableCheckbox: true,
                    },
                    {
                        title: '퇴근',
                        key: '0-0-1-1',
                    },
                ],
            },
        ],
    },
]
const treeComponent = props => {
    return (
        <Row justify="left" align="middle">
            <Col span={12}>
                <Tree
                    // onSelect={onSelect}
                    // onCheck={onCheck}
                    defaultExpandedKeys={['0-0']}
                    treeData={treeData}
                />
            </Col>
        </Row>
    )
}

export default treeComponent
