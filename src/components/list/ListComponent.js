import React from 'react'
import { Avatar, List } from 'antd'
import SubContainer from '../commons/container/SubContainer'

const data = []
for (let i = 0; i < 25; i++) {
    data.push({
        href: 'https://ant.design',
        title: `ant design part ${i}`,
        avatar:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    })
}

const ListComponent = props => {
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
