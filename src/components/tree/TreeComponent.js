import React, { useContext } from 'react'
import { Col, Row, Tree } from 'antd'
import Context from '../commons/container/Context'

const treeData = [
    {
        title: 'root',
        key: '0-0',
        children: [
            {
                title: '자전거',
                key: '0-0-0',
                children: [
                    {
                        title: '동호회',
                        key: '0-0-0-0',
                    },
                    {
                        title: '모집',
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
    const { onSelect = () => {} } = props

    const { onSelectResource } = useContext(Context)

    const onSelectTree = param => {
        if (param.length === 0) {
            return
        }
        console.log(param)
        onSelectResource(param)
    }
    return (
        <Row justify="left" align="middle">
            <Col span={12}>
                <Tree
                    onSelect={onSelectTree}
                    // onCheck={onCheck}
                    defaultExpandedKeys={['0-0']}
                    treeData={treeData}
                />
            </Col>
        </Row>
    )
}

export default treeComponent
