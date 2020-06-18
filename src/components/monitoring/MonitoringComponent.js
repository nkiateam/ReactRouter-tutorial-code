import React from 'react'
import SiderComponent from '../sider/SiderComponent'
import SubContainer from '../commons/container/SubContainer'

const MonitoringComponent = props => {
    const {} = props
    const main = <div>모니터링 </div>
    return <SubContainer leftSider={<SiderComponent />} content={main} />
}

export default MonitoringComponent
