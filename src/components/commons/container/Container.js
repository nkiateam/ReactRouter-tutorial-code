import React from 'react'
import { Layout } from 'antd'
import { withRouter } from 'react-router-dom'

import { Header } from '../../layout'

const Container = props => {
    const { children, routes } = props

    const footerStyle = {
        height: '30px',
        lineHeight: '30px',
        textAlign: 'right',
        fontSize: '12px',
        opacity: '.6',
        padding: '0 16px 0 0',
    }

    return (
        <React.Fragment>
            <Layout.Header>
                <Header routes={routes} />
            </Layout.Header>
            <Layout.Content style={{ display: 'flex' }}>
                {children}
            </Layout.Content>
            <Layout.Footer style={footerStyle}>
                <React.Fragment>
                    Copyright 2020. NKia all rights reserved.
                </React.Fragment>
            </Layout.Footer>
        </React.Fragment>
    )
}

export default withRouter(Container)
