import React from 'react'

import { MainMenu } from '../menu'

const Header = ({ routes }) => {
    return (
        <React.Fragment>
            <div className="ant-layout-navbar">
                <div tabIndex="-1" className="ant-layout-navbar-logo">
                    <div className="ant-layout-navbar-logo-img">
                        <img src="/images/NKIA_logo_1_.png" alt="" />
                    </div>
                </div>
                <MainMenu routes={routes} />
            </div>
        </React.Fragment>
    )
}

export default Header
