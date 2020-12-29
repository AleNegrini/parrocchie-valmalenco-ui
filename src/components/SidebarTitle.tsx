type SidebarTitleProps = {
    titlePart1: string,
    titlePart2: string
}

const SidebarTitle = ({titlePart1, titlePart2}:SidebarTitleProps) => {
    return (
        <div className="col-12">
            <p className="text-uppercase h3 mb-0 font-title">{titlePart1}</p>
            <p className="text-uppercase h4 font-subtitle">{titlePart2}</p>
        </div>
    )
}

export default SidebarTitle;