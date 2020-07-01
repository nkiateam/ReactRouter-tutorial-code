import React, { Component } from 'react'
import { Layout } from 'antd'
import { Helmet } from 'react-helmet'
import { Container } from './components/commons'
import Dashboard from './components/dashboard/Dashboard'
import ListComponent from './components/list/ListComponent'

class App extends Component {
    render() {
        return (
            <Layout style={{ height: '100%' }}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <meta
                        name="description"
                        content="React Design Editor has started to developed direct manipulation of editable design tools like Powerpoint, We've developed it with react.js, ant.design, fabric.js "
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/earlyaccess/notosanskr.css"
                    />
                    <title>Router-tutorial-code</title>
                </Helmet>
                <Container>Hello Nkia.</Container>
            </Layout>
        )
    }
}

export default App
