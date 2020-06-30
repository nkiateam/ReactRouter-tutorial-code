import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, List } from 'antd'
import SubContainer from '../commons/container/SubContainer'

const data = [
    {
        title: 1,
        avatar:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    },
    {
        title: 2,
        avatar:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    },
    {
        title: 3,
        avatar:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    },
    {
        title: 4,
        avatar:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    },
]

const ListComponent = () => {
    const main = (
        <div
            style={{
                overflow: 'auto',
                height: 'calc(100vh - 90px)',
                padding: '16px',
            }}
        >
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
        </div>
    )
    return <SubContainer content={main} />
}

export default ListComponent
