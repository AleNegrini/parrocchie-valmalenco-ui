import Constants from '../utils/Contants';

import SidebarTitle from '../components/SidebarTitle';
import SidebarNav from '../components/SidebarNav';
import SidebarFooter from '../components/SidebarFooter';

type SidebarProps = {
    version: string
}

const Sidebar = ({version}: SidebarProps) => {
    return (
        <>
            <div className="col-sm-2 bg-primary">
                <div className="row text-white mt-3">
                    <SidebarTitle 
                        titlePart1={Constants.sidebar_title_sub1} 
                        titlePart2={Constants.sidebar_title_sub2}/>
                    <SidebarNav
                        navbarItems={Constants.navbar_items_label}/>
                    <SidebarFooter 
                        year={Constants.sidebar_footer_year}
                        label={Constants.sidebar_footer_label}
                        version={version} />
                </div>
            </div>
            <div className="col-sm-10">
                <h2>Perfetto</h2>
            </div>
        </>
        
    )
};

export default Sidebar;