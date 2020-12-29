import { Link } from "react-router-dom";

type SidebarNavProps = {
    navbarItems: { [key: string]: string[]; }
}

const SidebarNav = ({navbarItems}:SidebarNavProps) => {
    return (
        <div className="col-12 mt-5 text-left navbar-title">
            { Object.keys(navbarItems).map(header => 
                <>
                    <h5 className="mb-0 font-subtitle">{header}</h5>
                    <hr className="mt-2 mb-2 navbar-title"/>
                    <ul className="mb-5 text-white font-subtitle">
                        {navbarItems[header].map((item) =>
                            <li key={header+""+item}>
                                <div className="mt-4 mb-4 h6">
                                    <Link to={item.split(",")[1]}>{item.split(",")[0]}</Link>
                                </div>
                            </li>
                        )}
                    </ul>
                    
                </>) 
            }
        </div>
    )
}

export default SidebarNav;