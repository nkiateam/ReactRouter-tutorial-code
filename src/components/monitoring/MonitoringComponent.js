import React from 'react'
import SiderComponent from '../sider/SiderComponent'
import SubContainer from '../commons/container/SubContainer'

const MonitoringComponent = props => {
    const { history, location, match } = props
    const renderResult = param => {
        const v = param.params.id
        switch (v) {
            case '0-0-0':
                return '자전거'
            case '0-0-0-0':
                return '동호회'
            case '0-0-0-1':
                return '모집'
            case '0-0-1':
                return '회사'
            case '0-0-1-0':
                return '출근'
            case '0-0-1-1':
                return '퇴근'
            default:
                return '모니터링'
        }
    }
    const main = <div>{renderResult(match)} </div>
    return <SubContainer leftSider={<SiderComponent />} content={main} />
}

export default MonitoringComponent
