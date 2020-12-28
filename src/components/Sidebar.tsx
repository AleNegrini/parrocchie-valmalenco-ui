import React from 'react';

import Constants from '../utils/Contants';

type SidebarProps = {
    version: string
}

const Sidebar = ({version}: SidebarProps) => {
    return (
        <>
            <div className="col-sm-2 bg-primary">
                <div className="row text-white mt-3">
                    <div className="col-12">
                        <p className="text-uppercase h3 mb-0 font-title">{Constants.sidebar_title_sub1}</p>
                        <p className="text-uppercase h4 font-subtitle">{Constants.sidebar_title_sub2}</p>
                    </div>
                    <div className="col-12 mt-5 text-left navbar-title">
                        { Object.keys(Constants.navbar_items_label).map(header => 
                            <>
                                <h5 className="mb-0 font-subtitle">{header}</h5>
                                <hr className="mt-2 mb-2 navbar-title"/>
                                <ul className="mb-5 text-white font-subtitle">
                                    {Constants.navbar_items_label[header].map((item) =>
                                        <li key={header+""+item}>
                                            <div className="mt-4 mb-4 h6">
                                                <a href="">{item}</a></div>
                                        </li>
                                    )}
                                </ul>
                                
                            </>) 
                        }
                    </div>
                    <div className="col-12 mr-3 text-center navbar-title fixed-bottom small"> 2021 © Version {version}</div>
                </div>
            </div>
            <div className="col-sm-10">
                <h2>Perfetto</h2>
            </div>
        </>
        
    )
};

export default Sidebar;