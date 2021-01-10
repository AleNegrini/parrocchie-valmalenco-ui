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
                    <ul key={header} className="mb-5 text-white font-subtitle">
                        {navbarItems[header].map((item) =>
                            <li key={item}>
                                <div className="pt-2 pb-2 h6">
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