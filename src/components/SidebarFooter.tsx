type SidebarFooterProps = {
    year: string,
    label: string, 
    version: string
}

const SidebarFooter = ({year, label, version}:SidebarFooterProps) => {
    return (
        <div className="col-12 mr-3 text-center navbar-title fixed-bottom small"> {year} © {label} {version}</div>
    )
}

export default SidebarFooter;